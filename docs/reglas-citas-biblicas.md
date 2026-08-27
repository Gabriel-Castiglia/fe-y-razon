# Reglas de citas bíblicas en español

## Regla principal

```html
<!--
REGLA: Todas las citas bíblicas en español deben provenir de la
"Biblia de Jerusalén Latinoamericana" (sin "vosotros"). Si no está
disponible para un versículo, usar la versión oficial en vatican.va.
NUNCA Reina-Valera ni traducciones protestantes.
-->
```

Este comentario va al inicio del bloque `article` de cada artículo apologético en `translations-es.js`.

---

## Verificación

- **Biblia de Jerusalén Latinoamericana (BJL)**: edición latinoamericana de la Jerusalem Bible. Usa "ustedes" (no "vosotros"). Usa guillemets `«»`.
- **vatican.va**: fuente de respaldo cuando la BJL no está disponible para un versículo específico.

## Marcadores de verificación pendiente

Cuando la redacción exacta de un versículo no está confirmada en BJL:

```html
<!-- TODO: verificar Libro Cap:Ver en BJL -->
```

Este comentario va inmediatamente antes del `<div class="scripture-block">` correspondiente.

## Marcadores de resaltado

Si tras verificar en BJL la palabra clave del argumento cambia de forma o desaparece:

```html
<!-- TODO: revisar resaltado en Libro Cap:Ver -->
```

---

## Estado de verificación por artículo (español)

| Artículo | Estado BJL |
|---|---|
| los-santos | Asumido correcto (plantilla) |
| la-eucaristia | TODO en Juan 6 y 1 Cor |
| por-que-creemos | TODO en todas las citas |
| sacerdocio | TODO en todas las citas |
| el-purgatorio | TODO — sin citas bíblicas aún |
| la-nueva-ley | TODO — citas sin referencia completa |
| la-primacia-de-pedro | TODO — citas sin referencia completa |
| la-santisima-trinidad | TODO — citas sin referencia completa |
| transubstanciacion | TODO en las 5 citas (Jn 1, Jn 2, Jn 6, 1 Co 10, 1 Co 11) |
