#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Medidor de tono de los artículos apologéticos (español).

La voz de referencia es la de `transubstanciacion`: expone y demuestra, no
exhorta. Este medidor cuenta los rasgos que se apartan de eso.

⛔ Las citas bíblicas y patrísticas NO cuentan: dentro de un <blockquote> el
imperativo es de la Escritura, no del artículo. Se recortan antes de medir.

Uso: python3 tono.py [slug ...]
"""
import re, io, os, sys

AQUI = os.path.dirname(os.path.abspath(__file__))
JS   = os.path.join(AQUI, "..", "js", "translations-es.js")
PUBLICADOS = ["transubstanciacion", "la-eucaristia", "por-que-creemos", "sacerdocio", "los-santos"]

# (nombre del rasgo, patrón, ejemplo de lo que sí queremos)
RASGOS = [
    ("imperativo al lector",
     r"\b(?:vé|ve|mira|mirá|lee|leé|acepta|aceptá|fíjese|fíjate|note|nótese|véase|considere|recuerde|pregúntese|vaya|anda|andá|continúa|continuá|sigue|seguí)\b",
     "«conviene mirar», «hay que fijarse»"),
    ("tuteo del lector",
     r"(?<![«\"])\b(?:tú|contigo|tuyo|tuya)\b",
     "impersonal: «se», «uno», «el lector»"),
    ("exhortación (hay que + acción del lector)",
     r"\bhay que (?:leer|creer|aceptar|rezar|orar|acercarse|confesar|comulgar|hacer lo que)\b",
     "«la Escritura dice», y que el lector saque la consecuencia"),
    ("apelación directa («nuestra fe», «nos libera»)",
     r"\b(?:nuestra fe|nuestras almas|nos libera|nos salva|debemos|tenemos que)\b",
     "tercera persona: «la fe no reposa en…»"),
]

# Rasgos que la voz de referencia SÍ tiene. Su ausencia no es un error de
# sintaxis: es un artículo que se quedó tibio.
COMBATE = [
    ("nombra a los grupos", r"\b(?:Testigos de Jehov|adventist|pentecostal|mormon|protestant)"),
    ("cita la objeción textual", r"<em>«[^»]{15,}»</em>"),
    # Patrón amplio a propósito: un falso negativo aquí haría creer que un
    # artículo no argumenta desde el texto cuando sí lo hace.
    ("responde en el terreno de la Escritura",
     r"\b(?:la Escritura|la Biblia|el texto|el versículo|el evangelista|el autor|Pablo|Pedro|Juan|Lucas|Jesús)\s+(?:\w+\s+){0,2}(?:dice|no dice|responde|escribe|anota|afirma|confirma|enseña|lo dice|se detiene|nombra|usa|ordena|lo ve)\b"),
]

# ⛔ Español neutro: el "vosotros" cuenta INCLUSO dentro de las citas, porque
# ahí es donde se cuela (la Biblia de Jerusalén peninsular lo trae).
VOSOTROS = r"\b(?:vosotros|os habéis|os hab|pensad|creed|mirad|habéis|vuestra|vuestro|vuestros|vuestras|sois|tenéis|podéis|sabéis|estáis|debéis)\b"

def articulo(slug):
    js = io.open(JS, encoding="utf-8").read()
    m = re.search(r'"%s"\s*:\s*\{.*?article: `(.*?)`,\n' % re.escape(slug), js, re.S)
    if not m:
        sys.exit("ABORTA: no se encontró el artículo %r" % slug)
    return m.group(1)

def prosa(art):
    """El texto del artículo SIN las citas: fuera blockquote y comentarios."""
    t = re.sub(r"(?s)<blockquote>.*?</blockquote>", " ", art)
    t = re.sub(r"(?s)<!--.*?-->", " ", t)
    t = re.sub(r"(?s)<em>[^<]*</em>", " ", t)   # las citas inline van en cursiva
    t = re.sub(r"<[^>]+>", " ", t)
    return re.sub(r"\s+", " ", t)

# Contextos verificados como tercera persona: el verbo coincide con un
# imperativo pero no lo es. ⛔ Un falso positivo se arregla ampliando ESTA
# lista, nunca recortando el patrón (que dejaría pasar los casos reales).
BLANCA = ["el que sigue", "que sigue,", "sigue «", "continúa siendo",
          "quien no lee", "no lee la palabra",
          # tercera persona de «ver» y «seguir», que coinciden con el imperativo
          "no se ve", "se ve a dios", "lo ve en visión", "alma sigue",
          # «hay que leer» dicho del texto que se está comentando, no de la Biblia
          "hay que leer el verbo", "hay que leer el texto", "hay que leer la cita"]

def vosotros(slug):
    """Busca formas de vosotros en TODO el artículo, citas incluidas."""
    art = articulo(slug)
    t = re.sub(r"(?s)<!--.*?-->", " ", art)
    t = re.sub(r"<[^>]+>", " ", t)
    t = re.sub(r"\s+", " ", t)
    return [(m.group(0), t[max(0, m.start()-40):m.end()+40].strip())
            for m in re.finditer(VOSOTROS, t, re.I)]

def combate(slug):
    t = prosa(articulo(slug)) if False else re.sub(r"\s+", " ", re.sub(r"(?s)<!--.*?-->", " ", articulo(slug)))
    return {nombre: bool(re.search(patron, t, re.I)) for nombre, patron in COMBATE}

def medir(slug):
    t = prosa(articulo(slug))
    hallazgos = {}
    for nombre, patron, _ in RASGOS:
        # Se guarda el contexto: sin él no se distingue el imperativo «sigue»
        # («sigue leyendo») de la tercera persona («el texto sigue»).
        crudos = [(m.group(0), t[max(0, m.start()-45):m.end()+45].strip())
                  for m in re.finditer(patron, t, re.I)]
        hallazgos[nombre] = [(w, c) for w, c in crudos
                             if not any(b in c.lower() for b in BLANCA)]
    palabras = len(t.split())
    return palabras, hallazgos

def autotest():
    # canario positivo: cada rasgo debe detectarse en una frase que lo tiene
    muestras = ["Ve al tema de la Eucaristía.", "Si tú lo dices.",
                "hay que leer la Palabra.", "nuestra fe no reposa en el ministro."]
    for (nombre, patron, _), frase in zip(RASGOS, muestras):
        assert re.search(patron, frase, re.I), "autotest: no detecta %r en %r" % (nombre, frase)
    # canario negativo: la voz de referencia no dispara ningún rasgo
    limpia = ("Conviene mirar dónde está el milagro. La Palabra de Dios no describe: "
              "la causa. Quien come indignamente tiene que dar cuenta del Cuerpo.")
    for nombre, patron, _ in RASGOS:
        assert not re.search(patron, limpia, re.I), "falso positivo de %r en la voz de referencia" % nombre
    # las citas no cuentan
    con_cita = '<p>Texto.</p><blockquote>«Ve y no peques más, mira, acepta»</blockquote>'
    assert not re.search(RASGOS[0][1], prosa(con_cita), re.I), "autotest: el blockquote no se está recortando"
    # La lista blanca no puede tapar un imperativo real
    assert re.search(RASGOS[0][1], "Ve al tema de la Eucaristía", re.I), "canario"
    assert any(b in "el pasaje decisivo es el que sigue, y conviene" for b in BLANCA), \
        "autotest: la lista blanca no cubre el caso que la motivó"
    assert re.search(VOSOTROS, "Sino que os habéis acercado al monte Sión", re.I), "canario de vosotros"
    assert not re.search(VOSOTROS, "Ustedes, en cambio, se han acercado a la montaña de Sión", re.I), \
        "falso positivo de vosotros en una frase en ustedes"
    print("AUTOTEST: OK (4 canarios positivos, voz de referencia limpia, blockquote recortado, lista blanca, vosotros)")

if __name__ == "__main__":
    autotest()
    slugs = sys.argv[1:] or PUBLICADOS
    print()
    print("%-22s %7s  %s" % ("artículo", "palabras", "rasgos fuera de la voz de referencia"))
    total = 0
    detalle = {}
    for slug in slugs:
        pal, h = medir(slug)
        n = sum(len(v) for v in h.values())
        total += n
        detalle[slug] = h
        resumen = ", ".join("%s:%d" % (k.split(" (")[0], len(v)) for k, v in h.items() if v) or "—"
        print("%-22s %7d  %d  (%s)" % (slug, pal, n, resumen))
    print("\nTOTAL de rasgos a limar: %d" % total)

    print("\n%-22s %s" % ("artículo", "voz combativa: nombra / cita la objeción / responde con el texto"))
    for slug in slugs:
        c = combate(slug)
        print("%-22s %s" % (slug, "  ".join(("✓" if v else "✗") + " " + k for k, v in c.items())))

    print("\n%-22s %s" % ("artículo", "formas de «vosotros» (⛔ deben ser 0, también en las citas)"))
    hay = 0
    for slug in slugs:
        v = vosotros(slug)
        hay += len(v)
        print("%-22s %d" % (slug, len(v)))
        for w, ctx in v:
            print("      · %-12s …%s…" % (w, ctx))
    print("\nTOTAL de «vosotros»: %d" % hay)
    for slug, h in detalle.items():
        casos = [(k, v) for k, v in h.items() if v]
        if casos:
            print("\n### %s" % slug)
            for k, v in casos:
                print("   %s" % k)
                for palabra, ctx in v:
                    print("      · %-12s …%s…" % (palabra, ctx))
