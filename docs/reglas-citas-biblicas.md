# Reglas de citas bíblicas en español

## Regla principal — la Biblia del Vaticano, NO la de Jerusalén

Todas las citas bíblicas en español salen de **«El Libro del Pueblo de Dios»**
(traducción argentina, 1990, de Levoratti y Trusso), que es **la Biblia en
español que la Santa Sede publica libremente** en:

```
https://www.vatican.va/archive/ESL0506/_INDEX.HTM
```

⛔ **NUNCA** Reina-Valera ni ninguna traducción protestante.
⛔ **Tampoco** la Biblia de Jerusalén Latinoamericana: es una buena traducción
católica, pero **no es la que está publicada en vatican.va**, y la fuente del
sitio es la del Vaticano (decisión de Gabriel, 27-ago-2026). La regla anterior
decía BJL con vatican.va «de respaldo»; eso quedó al revés y se corrigió.

Usa **«ustedes»** (es una traducción rioplatense), así que cumple sola la regla
de español neutro, y **capitaliza Cuerpo, Sangre, Vida y Nombre** cuando se
refieren a Cristo: hay que respetar esas mayúsculas al copiar.

Este comentario va al inicio del bloque `article` de cada artículo apologético
en `translations-es.js`:

```html
<!--
REGLA: Todas las citas bíblicas en español provienen de "El Libro del Pueblo
de Dios" (traducción argentina, 1990), que es la Biblia en español publicada
libremente por la Santa Sede en vatican.va/archive/ESL0506/. Usa "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
-->
```

---

## Cómo se busca un capítulo en vatican.va

El sitio es IntraText y **no tiene enlaces navegables en el índice**: las
páginas se llaman `__P<código>.HTM`, donde el código es el número de página
**en base 36**, con los capítulos numerados de corrido de Génesis en adelante.

Anclas medidas (27-ago-2026), para no volver a buscarlas:

| Página | Capítulo |
|---|---|
| `__PW7.HTM` | Juan 1 |
| `__PW8.HTM` | Juan 2 |
| `__PWC.HTM` | Juan 6 |
| `__PY9.HTM` | 1 Corintios 10 |
| `__PYA.HTM` | 1 Corintios 11 |

Desde cualquiera de esas, el capítulo siguiente es el código siguiente en base
36 (`…W7 → W8 → W9 → WA → WB → WC…`). El HTML viene en **latin-1**, no en UTF-8.

⚠️ **El texto del Vaticano trae erratas tipográficas**: se han visto
`memora mía` (1 Co 11,25) y un espacio partido en `su o rigen` (Jn 2,9). Se
corrigen al publicar y se anotan en la lista de erratas del medidor.

---

## Verificación

El cotejo no se hace a ojo: se corre el medidor
`cotejo.py` (versionado junto al artículo), que baja el capítulo de vatican.va,
le quita los números de versículo y compara **letra por letra** contra el
`<blockquote>` publicado, con autotest de canario en cada corrida.

Un `CONFIRMA` sin ese cotejo no vale.

### Marcadores de verificación pendiente

Mientras una cita no esté cotejada contra vatican.va:

```html
<!-- TODO: verificar Libro Cap:Ver en vatican.va -->
```

Va inmediatamente antes del `<div class="scripture-block">` correspondiente.

### Marcadores de resaltado

Si tras cotejar, la palabra clave del argumento cambia de forma o desaparece,
**hay que ajustar también la argumentación**, no solo la cita. Ocurrió el
27-ago-2026 en transubstanciación: donde la Biblia de Jerusalén dice «será reo
del cuerpo y de la sangre», la del Vaticano dice «tendrá que dar cuenta del
Cuerpo y de la Sangre del Señor», y decía «cáliz» donde esta dice «copa».

---

## Estado de verificación por artículo (español)

| Artículo | Estado |
|---|---|
| **transubstanciacion** | ✅ **Las 5 citas cotejadas contra vatican.va** (27-ago-2026, letra por letra) |
| los-santos | Asumido correcto (plantilla) — sin cotejar contra vatican.va |
| la-eucaristia | ⚠️ Citas de la Biblia de Jerusalén — **re-cotejar contra vatican.va** |
| por-que-creemos | ⚠️ Citas de la Biblia de Jerusalén — **re-cotejar contra vatican.va** |
| sacerdocio | ⚠️ Citas de la Biblia de Jerusalén — **re-cotejar contra vatican.va** |
| el-purgatorio | Esqueleto — sin citas bíblicas aún |
| la-nueva-ley | Esqueleto — citas sin referencia completa |
| la-primacia-de-pedro | Esqueleto — citas sin referencia completa |
| la-santisima-trinidad | Esqueleto — citas sin referencia completa |

⚠️ **Los otros once idiomas** conservan sus propias traducciones católicas, que
es lo correcto: la regla del Vaticano manda sobre el **español**. Pero cuando
un cambio de traducción altera el argumento (como «dar cuenta» por «reo»), hay
que revisar si la prosa de los demás idiomas sigue diciendo lo mismo.
