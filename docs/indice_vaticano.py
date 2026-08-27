#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Construye el índice libro -> {capítulo: página} de El Libro del Pueblo de Dios
(vatican.va). El índice del sitio escribe los href SIN comillas: href=__PW7.HTM.
Guarda el resultado en indice_vaticano.json para no volver a bajarlo."""
import re, io, os, json, subprocess, html

BASE  = "https://www.vatican.va/archive/ESL0506/"
AQUI  = os.path.dirname(os.path.abspath(__file__))
JSON  = os.path.join(AQUI, "indice_vaticano.json")
CACHE = os.path.join(os.environ.get("TMPDIR", "/tmp"), "vaticano-cache")

def bajar(nombre):
    os.makedirs(CACHE, exist_ok=True)
    f = os.path.join(CACHE, nombre)
    if not os.path.exists(f):
        subprocess.run(["curl", "-s", "-A", "Mozilla/5.0", BASE + nombre, "-o", f], check=True)
    return io.open(f, encoding="latin-1", errors="replace").read()

def construir():
    s = bajar("_INDEX.HTM")
    # <li><font size=3>NOMBRE DEL LIBRO</font><ul ...> <a href=__PXX.HTM>1</a>. ...
    indice = {}
    # El nombre del libro va como texto suelto (NT) o dentro de un <a> (buena parte
    # del AT): <font size=3>LEVITICO</font> vs <font size=3><a href=…>LEVITICO</a></font>.
    # Con el patrón estrecho faltaban 17 libros, Levítico entre ellos.
    for m in re.finditer(r"<font size=3>(?:<a[^>]*>)?([^<]+)(?:</a>)?</font>(.*?)(?=<font size=3>|$)", s, re.S):
        libro = html.unescape(m.group(1)).strip()
        caps = re.findall(r"href=(__P[0-9A-Z]+\.HTM)>(\d+)</a>", m.group(2))
        if caps:
            indice[libro] = {int(c): p for p, c in caps}
    return indice

def cargar():
    if os.path.exists(JSON):
        return json.load(io.open(JSON, encoding="utf-8"))
    ind = construir()
    json.dump(ind, io.open(JSON, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    return ind

if __name__ == "__main__":
    ind = cargar()
    print(len(ind), "libros,", sum(len(v) for v in ind.values()), "capítulos")
    for l in ind:
        print(" -", l)
