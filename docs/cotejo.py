#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Coteja las citas bíblicas de un artículo (o de todos) contra «El Libro del
Pueblo de Dios» publicado en vatican.va.

Uso:  python3 cotejo.py [slug ...]        (sin argumentos: todos los que tengan citas)

Falsador: cualquier diferencia de texto entre el <blockquote> publicado y el
pasaje del Vaticano REFUTA la cita, y hay que reemplazarla.
Autotest: canarios de limpieza y de detección en cada corrida.
"""
import re, io, os, sys, json, html, subprocess, unicodedata

AQUI  = os.path.dirname(os.path.abspath(__file__))
JS    = os.path.join(AQUI, "..", "js", "translations-es.js")
BASE  = "https://www.vatican.va/archive/ESL0506/"
CACHE = os.path.join(os.environ.get("TMPDIR", "/tmp"), "vaticano-cache")

sys.path.insert(0, AQUI)
from indice_vaticano import cargar as cargar_indice

# nombre corto que usa el sitio -> nombre del libro en vatican.va
LIBROS = {
    "Génesis": "GENESIS", "Éxodo": "EXODO", "Levítico": "LEVITICO",
    "Salmo": "SALMOS", "Salmos": "SALMOS", "Malaquías": "MALAQUIAS",
    "Mateo": "EVANGELIO SEGUN SAN MATEO", "Marcos": "EVANGELIO SEGUN SAN MARCOS",
    "Lucas": "EVANGELIO SEGUN SAN LUCAS", "Juan": "EVANGELIO SEGUN SAN JUAN",
    "Hechos": "HECHOS DE LOS APOSTOLES", "Romanos": "CARTA A LOS ROMANOS",
    "1 Corintios": "PRIMERA CARTA A LOS CORINTIOS", "2 Corintios": "SEGUNDA CARTA A LOS CORINTIOS",
    "Gálatas": "CARTA A LOS GALATAS", "Efesios": "CARTA A LOS EFESIOS",
    "Filipenses": "CARTA A LOS FILIPENSES", "Colosenses": "CARTA A LOS COLOSENSES",
    "1 Tesalonicenses": "PRIMERA CARTA A LOS TESALONICENSES",
    "2 Tesalonicenses": "SEGUNDA CARTA A LOS TESALONICENSES",
    "1 Timoteo": "PRIMERA CARTA A TIMOTEO", "2 Timoteo": "SEGUNDA CARTA A TIMOTEO",
    "Hebreos": "CARTA A LOS HEBREOS", "Santiago": "CARTA DE SANTIAGO",
    "1 Pedro": "PRIMERA CARTA DE SAN PEDRO", "2 Pedro": "SEGUNDA CARTA DE SAN PEDRO",
    "1 Juan": "PRIMERA CARTA DE SAN JUAN", "Apocalipsis": "APOCALIPSIS",
}

# erratas tipográficas del sitio del Vaticano, corregidas al publicar
ERRATAS = {"memora mía": "memoria mía", "su o rigen": "su origen",
           "no profanaran": "no profanarán", "porque son los presentan": "porque son los que presentan",
           "añadió Reciban": "añadió: Reciban",  # Jn 20,22: el original abre la cita sin los dos puntos
           "des provistos": "desprovistos"}      # Heb 11,37

def bajar(nombre):
    os.makedirs(CACHE, exist_ok=True)
    f = os.path.join(CACHE, nombre)
    if not os.path.exists(f):
        subprocess.run(["curl", "-s", "-A", "Mozilla/5.0", BASE + nombre, "-o", f], check=True)
    return io.open(f, encoding="latin-1", errors="replace").read()

def limpio(x):
    x = re.sub(r"<[^>]+>", "", x)
    for c in "«»“”":
        x = x.replace(c, "")
    x = html.unescape(x)
    x = unicodedata.normalize("NFC", x).replace("\xa0", " ")
    # ⛔ Sin rstrip del punto: al unir versículo por versículo, quitarlo aquí
    # borraría el punto final de cada uno y ninguna cita coincidiría jamás.
    return re.sub(r"\s+", " ", x).strip()

def versiculos(pag, cap):
    """Trocea un capítulo en versículos.

    ⛔ No sirve buscar " N " en el texto: el encabezado "Capítulo 5" ya trae un
    5, y "cinco pórticos" o cualquier cifra del relato también pegan. Por eso
    los marcadores se buscan EN ORDEN —1, luego 2, luego 3…—, cada uno después
    del anterior: así un número suelto del texto no puede hacerse pasar por el
    comienzo de un versículo.
    """
    t = bajar(pag)
    t = re.sub(r"(?is)<(script|style).*?</\1>", " ", t)
    t = limpio(t)
    k = t.find("Capítulo %d" % cap)
    if k < 0:
        k = t.find("SALMO %d" % cap)
    if k < 0:
        raise SystemExit("ABORTA: no se encontró el encabezado del capítulo %d en %s" % (cap, pag))
    t = t[k:]
    t = t[t.find(str(cap)) + len(str(cap)):]          # saltar el propio encabezado
    t = re.sub(r"\[[A-Za-zÁÉÍÓÚáéíóú]+\]", " ", t)     # letras hebreas de los Salmos
    fin = t.find("Anterior")
    if fin > 0:
        t = t[:fin]
    marcas, pos, n = {}, 0, 1
    while True:
        m = re.compile(r"(?<![\d])%d\s" % n).search(t, pos)
        if not m:
            break
        marcas[n] = (m.end(), None)
        if n > 1:
            marcas[n - 1] = (marcas[n - 1][0], m.start())
        pos, n = m.end(), n + 1
    if marcas:
        ult = max(marcas)
        marcas[ult] = (marcas[ult][0], len(t))
    return t, marcas

def pasaje(ref):
    """ref: 'Juan 6:47-51' | 'Salmo 119:105' | 'Hebreos 11:1 — 12:3'
    -> texto del Vaticano, sin versiculado."""
    ref = ref.strip()
    # Rango que cruza capítulos: se arma encadenando los tramos.
    m = re.match(r"^(.+?)\s+(\d+):(\d+)\s*[—–-]\s*(\d+):(\d+)$", ref)
    if m:
        libro, c1, v1, c2, v2 = m.group(1), int(m.group(2)), int(m.group(3)), int(m.group(4)), int(m.group(5))
        ind = cargar_indice()
        nombre = LIBROS.get(libro)
        if not nombre or nombre not in ind:
            raise SystemExit("ABORTA: libro sin mapear: %r" % libro)
        trozos = []
        for c in range(c1, c2 + 1):
            pag = ind[nombre].get(str(c))
            if not pag:
                raise SystemExit("ABORTA: %s no tiene capítulo %d" % (nombre, c))
            t, marcas = versiculos(pag, c)
            desde = v1 if c == c1 else 1
            hasta = v2 if c == c2 else max(marcas)
            for v in range(desde, hasta + 1):
                if v in marcas:
                    trozos.append(limpio(t[marcas[v][0]:marcas[v][1]]))
        txt = re.sub(r"\s+", " ", " ".join(x for x in trozos if x)).strip()
        for a_, b_ in ERRATAS.items():
            txt = txt.replace(a_, b_)
        return txt.rstrip(".")
    m = re.match(r"^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$", ref)
    if not m:
        raise SystemExit("ABORTA: referencia ilegible: %r" % ref)
    libro, cap, v1, v2 = m.group(1), int(m.group(2)), int(m.group(3)), int(m.group(4) or m.group(3))
    ind = cargar_indice()
    nombre = LIBROS.get(libro)
    if not nombre or nombre not in ind:
        raise SystemExit("ABORTA: libro sin mapear: %r" % libro)
    pag = ind[nombre].get(str(cap))
    if not pag:
        raise SystemExit("ABORTA: %s no tiene capítulo %d" % (nombre, cap))
    t, marcas = versiculos(pag, cap)
    for v in (v1, v2):
        if v not in marcas:
            raise SystemExit("ABORTA: %s no trae el versículo %d (detectados 1-%d)"
                             % (ref, v, max(marcas) if marcas else 0))
    # Se arma uniendo versículo por versículo: así los marcadores intermedios
    # (24, 25, 26…) no quedan dentro del texto, y no hace falta borrar cifras
    # a ciegas, que se llevaría por delante las del propio relato.
    partes = []
    for v in range(v1, v2 + 1):
        if v not in marcas:
            raise SystemExit("ABORTA: %s no trae el versículo %d" % (ref, v))
        partes.append(limpio(t[marcas[v][0]:marcas[v][1]]))
    txt = " ".join(x for x in partes if x)
    txt = re.sub(r"\s+", " ", txt).strip()
    for a, b in ERRATAS.items():
        txt = txt.replace(a, b)
    return txt.rstrip(".")

def citas_del_sitio(slug):
    js = io.open(JS, encoding="utf-8").read()
    m = re.search(r'"%s"\s*:\s*\{.*?article: `(.*?)`,\n' % re.escape(slug), js, re.S)
    if not m:
        raise SystemExit("ABORTA: no se encontró el artículo %r" % slug)
    art = m.group(1)
    # Cada cita declara su versión con <!-- fuente: vaticano --> o <!-- fuente: bj -->
    # justo antes del bloque. Sin marca, el medidor no puede saber contra qué cotejar.
    patron = (r'(?:<!--\s*fuente:\s*(\w+)\s*-->\s*)?'
              r'<div class="scripture-block">\s*'
              r'<span class="scripture-ref">✝ ([^<]+)</span>\s*<blockquote>(.*?)</blockquote>')
    return [(f or "", r, b) for f, r, b in re.findall(patron, art, re.S)]

def autotest():
    assert limpio("<b>a  b</b>.") == "a b.", "autotest de limpieza FALLA"
    p = pasaje("1 Corintios 10:16")
    assert "copa de bendición" in p, "autotest: el pasaje conocido no trae lo esperado"
    assert p != p.replace("copa", "cáliz"), "autotest: el canario no distingue"
    # Canarios de troceo: el capítulo debe tener EXACTAMENTE los versículos que
    # tiene, o el medidor está arrastrando texto vecino y todo lo demás miente.
    ind = cargar_indice()
    for ref, cap, esperados in (("EVANGELIO SEGUN SAN JUAN", 6, 71),
                                ("PRIMERA CARTA A LOS CORINTIOS", 10, 33),
                                ("EVANGELIO SEGUN SAN LUCAS", 5, 39)):
        _, marcas = versiculos(ind[ref][str(cap)], cap)
        assert max(marcas) == esperados, \
            "autotest de troceo FALLA: %s %d -> %d versículos, esperaba %d" % (ref, cap, max(marcas), esperados)
    # Un versículo corto no puede venir con el vecino pegado
    v = pasaje("Juan 6:68").rstrip(".")
    assert v.startswith("Simón Pedro") and len(v) < 120, "autotest: el troceo arrastra vecinos"
    # Canario de la marca de fuente: una cita sin marca no puede leerse como vaticano
    muestra = '<!-- fuente: bj -->\n<div class="scripture-block">\n<span class="scripture-ref">✝ X 1:1</span>\n<blockquote>a</blockquote>'
    patron = (r'(?:<!--\s*fuente:\s*(\w+)\s*-->\s*)?'
              r'<div class="scripture-block">\s*'
              r'<span class="scripture-ref">✝ ([^<]+)</span>\s*<blockquote>(.*?)</blockquote>')
    got = re.findall(patron, muestra, re.S)
    assert got and got[0][0] == "bj", "autotest: no se lee la marca de fuente"
    got2 = re.findall(patron, muestra.replace("<!-- fuente: bj -->", ""), re.S)
    assert got2 and got2[0][0] == "", "autotest: se inventa una marca donde no la hay"
    print("AUTOTEST: OK (limpieza, canario de texto, troceo de 3 capítulos y marca de fuente)")

if __name__ == "__main__":
    autotest()
    # Por defecto, solo los artículos PUBLICADOS. `los-santos` es la plantilla
    # canónica y sigue provisional: se coteja pidiéndolo por nombre.
    slugs = sys.argv[1:] or ["transubstanciacion", "la-eucaristia", "por-que-creemos", "sacerdocio"]
    total = malas = nodecide = 0
    for slug in slugs:
        pares = citas_del_sitio(slug)
        if not pares:
            print("\n### %s — sin citas bíblicas" % slug); continue
        print("\n### %s" % slug)
        for fuente, ref, blockq in pares:
            ref = ref.strip()
            fuente = (fuente or "").strip().lower()
            if not fuente:
                malas += 1; total += 1
                print("  REFUTA    %s  (sin marca de fuente: falta <!-- fuente: … -->)" % ref)
                continue
            if fuente == "bj":
                total += 1; nodecide += 1
                print("  NO DECIDE %s  (declarada Biblia de Jerusalén: se verifica a mano)" % ref)
                continue
            if fuente != "vaticano":
                malas += 1; total += 1
                print("  REFUTA    %s  (fuente desconocida: %r)" % (ref, fuente))
                continue
            vat = pasaje(ref).rstrip(".")
            mio = limpio(blockq).rstrip(".")
            total += 1
            if mio == vat:
                print("  CONFIRMA  %s" % ref)
            elif "…" in mio or "..." in mio:
                # Cita parcial: cada trozo separado por elipsis tiene que estar
                # literalmente en el pasaje y EN ORDEN. Así un recorte legítimo
                # no cuenta como error, pero un recorte que cambia el texto sí.
                trozos = [x.strip() for x in re.split(r"…|\.\.\.", mio) if x.strip()]
                pos, ok = 0, True
                for tr in trozos:
                    k = vat.find(tr, pos)
                    if k < 0:
                        ok = False; break
                    pos = k + len(tr)
                if ok:
                    print("  CONFIRMA  %s  (cita parcial, %d trozos)" % (ref, len(trozos)))
                else:
                    malas += 1
                    print("  REFUTA    %s  (cita parcial: un trozo no está en el original)" % ref)
                    print("     sitio    : %s" % mio)
                    print("     vaticano : %s" % vat)
            else:
                malas += 1
                print("  REFUTA    %s" % ref)
                print("     sitio    : %s" % mio)
                print("     vaticano : %s" % vat)
    print("\nTOTAL: %d citas | CONFIRMA %d | REFUTA %d | NO DECIDE %d"
          % (total, total - malas - nodecide, malas, nodecide))
