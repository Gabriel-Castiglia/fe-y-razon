#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Coteja letra por letra las 5 citas del artículo ES contra El Libro del Pueblo
de Dios publicado en vatican.va. Falsador: cualquier diferencia de texto REFUTA.
Autotest: un canario alterado a propósito debe dar REFUTA.
"""
import re, io, os, unicodedata
from vat import texto  # vat.py vive junto a este archivo

JS = os.path.expanduser("~/Proyectos/fe-y-razon/js/translations-es.js")
FUENTES = {"Juan 1:1-3":("PW7",1,3), "Juan 2:6-9":("PW8",6,9), "Juan 6:47-51":("PWC",47,51),
           "1 Corintios 10:16":("PY9",16,16), "1 Corintios 11:23-30":("PYA",23,30)}
# erratas tipográficas del sitio del Vaticano, corregidas al publicar
ERRATAS = {"memora mía":"memoria mía", "su o rigen":"su origen"}

def limpio(x):
    x = re.sub(r"<[^>]+>", "", x)
    for c in "«»\u201c\u201d":
        x = x.replace(c, "")
    x = unicodedata.normalize("NFC", x)
    return re.sub(r"\s+", " ", x).strip().rstrip(".")

def del_vaticano(pag, a, b):
    t = re.sub(r"\s+", " ", texto(pag))
    ini = t.find("Capítulo ")
    t = t[ini:] if ini >= 0 else t
    i = t.find(" %d " % a)
    j = t.find(" %d " % (b + 1))
    if i < 0 or j < 0:
        raise SystemExit("ABORTA: no se localizaron los versículos %d-%d en %s" % (a, b, pag))
    v = limpio(t[i:j])
    v = re.sub(r"\b\d+\b ", "", v)
    for k, w in ERRATAS.items():
        v = v.replace(k, w)
    return v

def del_sitio():
    js = io.open(JS, encoding="utf-8").read()
    m = re.search(r'"transubstanciacion".*?article: `(.*?)`,\n', js, re.S)
    art = m.group(1)
    refs = re.findall(r'scripture-ref">✝ ([^<]+)</span>\s*<blockquote>(.*?)</blockquote>', art, re.S)
    return {r.strip(): limpio(b) for r, b in refs}

if __name__ == "__main__":
    sitio = del_sitio()
    # autotest: un canario alterado debe dar REFUTA
    canario = del_vaticano("PY9", 16, 16)
    assert canario != canario.replace("copa", "cáliz"), "autotest inválido"
    assert limpio("<b>a  b</b>.") == "a b", "autotest de limpieza FALLA"
    print("AUTOTEST: OK (limpieza y canario)")
    todo_ok = True
    for ref, (pag, a, b) in FUENTES.items():
        vat = del_vaticano(pag, a, b)
        mio = sitio.get(ref)
        if mio is None:
            print("REFUTA    %s -> no está en el artículo" % ref); todo_ok = False; continue
        igual = (mio == vat)
        todo_ok &= igual
        print("%s  %s" % ("CONFIRMA" if igual else "REFUTA  ", ref))
        if not igual:
            for k in range(min(len(mio), len(vat))):
                if mio[k] != vat[k]:
                    print("   sitio  :", mio[max(0,k-45):k+55])
                    print("   vaticano:", vat[max(0,k-45):k+55]); break
            else:
                print("   sitio  :", mio[-90:]); print("   vaticano:", vat[-90:])
    print()
    print("VEREDICTO:", "las 5 citas son literalmente las de vatican.va" if todo_ok else "hay diferencias")
