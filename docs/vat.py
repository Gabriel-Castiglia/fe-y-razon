#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Descarga un capítulo de El Libro del Pueblo de Dios (vatican.va) y devuelve
el texto plano numerado por versículo."""
import re, io, sys, subprocess, os, html

CACHE = os.path.join(os.environ.get("TMPDIR", "/tmp"), "vaticano-cache")

def bajar(pag):
    os.makedirs(CACHE, exist_ok=True)
    f = os.path.join(CACHE, f"{pag}.html")
    if not os.path.exists(f):
        subprocess.run(["curl","-s","-A","Mozilla/5.0",
                        f"https://www.vatican.va/archive/ESL0506/__{pag}.HTM","-o",f], check=True)
    return io.open(f, encoding="latin-1", errors="replace").read()

def texto(pag):
    s = bajar(pag)
    s = re.sub(r"(?is)<(script|style).*?</\1>", " ", s)
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    s = s.replace("\xa0", " ")
    s = re.sub(r"[ \t]+", " ", s)
    return s

if __name__ == "__main__":
    pag = sys.argv[1]
    t = texto(pag)
    cab = re.search(r"(EVANGELIO[^0-9]*|PRIMERA CARTA[^0-9]*|SEGUNDA CARTA[^0-9]*)(\d+)", t)
    print("### PÁGINA", pag, "->", (cab.group(0).strip() if cab else "?"))
    # el cuerpo empieza tras "Anterior - Siguiente" y termina en "Anterior - Siguiente"
    partes = re.split(r"Anterior\s*-?\s*Siguiente|Anterior\s*-", t)
    cuerpo = max(partes, key=len)
    cuerpo = re.sub(r"\s+", " ", cuerpo).strip()
    print(cuerpo[:4000])
