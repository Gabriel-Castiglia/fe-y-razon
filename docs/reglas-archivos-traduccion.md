# Reglas para archivos de traducción (`translations-*.js`)

## Protocolo de debugging — SINTAXIS PRIMERO

**Cuando algo deja de funcionar en múltiples navegadores simultáneamente** (links, menús,
scripts), lo primero que hay que revisar son errores de sintaxis JS — antes de cualquier
otra investigación (CSS, z-index, event listeners, etc.).

Un solo `SyntaxError` en un archivo de traducción rompe la cadena completa de dependencias
y deja el sitio sin interactividad, pero visualmente parece normal.

**Paso 1 — Abrir DevTools (F12) → pestaña Console. Si hay líneas rojas, ir directo a ellas.**

```bash
# Detección rápida vía Playwright (30 segundos):
python3 - <<'EOF'
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        await page.add_init_script("window.onerror=function(m,s,l){console.error('ERR:'+m+' en '+s+':'+l);}")
        page.on("console", lambda m: errors.append(m.text) if m.type=='error' else None)
        await page.goto("http://localhost:8765/index.html", wait_until="domcontentloaded")
        await page.wait_for_timeout(2000)
        for e in errors: print(e)
        await browser.close()
asyncio.run(main())
EOF
```

No hay errores → pasar a investigar CSS/JS. Hay errores → resolver primero y solo esos.

---

## Error crítico documentado — Mayo 2026

### El bug
Los links "Leer" en Temas y el menú de idiomas dejaron de funcionar completamente en
todos los navegadores. Causa raíz: **coma faltante** en 4 archivos de traducción
(`en`, `ja`, `da`, `la`) justo antes de la clave `"sobre-este-sitio"`:

```js
// MAL — causa SyntaxError "Unexpected string"
    "la-primacia-de-pedro": {
      ...
    }                          // ← falta coma aquí
    "sobre-este-sitio": {

// CORRECTO
    "la-primacia-de-pedro": {
      ...
    },                         // ← coma obligatoria
    "sobre-este-sitio": {
```

### Efecto en cascada
Un `SyntaxError` en cualquier archivo `translations-*.js` impide que ese archivo
defina su variable global (`translationsEN`, `translationsJA`, etc.). Cuando
`translations.js` intenta referenciar esa variable, lanza `ReferenceError`, y todos
los scripts que dependen de `translations` o `currentLang` fallan silenciosamente.
**Resultado visible**: toda la interactividad JS del sitio se rompe.

### Regla obligatoria al agregar un nuevo idioma o sección

Cada entrada del objeto `topicPages` **debe terminar con coma**, incluida la última
antes de `"sobre-este-sitio"` y la última del bloque completo:

```js
topicPages: {
  common: { ... },
  "sacerdocio": { ... },
  "por-que-creemos": { ... },
  // ... todos los temas ...
  "la-primacia-de-pedro": { ... },   // ← COMA
  "sobre-este-sitio": { ... },        // ← COMA (aunque sea el último, JavaScript lo acepta)
},
```

### Verificación antes de commit

Antes de hacer `git commit` con cambios en cualquier `translations-*.js`, correr:

```bash
python3 -c "
import os
files = [f for f in os.listdir('js') if f.startswith('translations-') and f.endswith('.js')]
for f in files:
    with open('js/' + f) as fp: content = fp.read()
    opens = content.count('{') - content.count('}')
    if opens != 0: print('DESBALANCE EN', f, opens)
    else: print('OK:', f)
"
```

Esto detecta `{` sin cerrar, pero **no detecta comas faltantes**. La verificación
definitiva es un test rápido con Playwright o abriendo el sitio en el navegador y
revisando la consola de DevTools (F12 → Console).

### Checklist al agregar `"sobre-este-sitio"` a un idioma nuevo

1. Copiar el bloque de otro idioma que ya funcione (ej. `translations-es.js`)
2. Verificar que la entrada ANTERIOR a `"sobre-este-sitio"` termina con `},`
3. Abrir `http://localhost:8765/index.html` en el navegador
4. Confirmar en DevTools Console: sin errores rojos
5. Confirmar que "Leer →" abre el overlay y el menú de idiomas responde
