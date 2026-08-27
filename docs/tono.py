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
PUBLICADOS = ["transubstanciacion", "la-eucaristia", "por-que-creemos", "sacerdocio"]

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
          "quien no lee", "no lee la palabra"]

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
    print("AUTOTEST: OK (4 canarios positivos, voz de referencia limpia, blockquote recortado, lista blanca)")

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
    for slug, h in detalle.items():
        casos = [(k, v) for k, v in h.items() if v]
        if casos:
            print("\n### %s" % slug)
            for k, v in casos:
                print("   %s" % k)
                for palabra, ctx in v:
                    print("      · %-12s …%s…" % (palabra, ctx))
