# Reglas de citas bíblicas en español

## Regla principal — dos fuentes admitidas, y se elige por el argumento

Las citas bíblicas en español salen de **una de estas dos**, nunca de otra:

| Marca | Versión | Dónde |
|---|---|---|
| `vaticano` | **«El Libro del Pueblo de Dios»** (traducción argentina, 1990) | `vatican.va/archive/ESL0506/_INDEX.HTM` — la Biblia en español que la Santa Sede publica libremente |
| `bj` | **Biblia de Jerusalén Latinoamericana** | edición en papel / consulta manual |

⛔ **NUNCA** Reina-Valera ni ninguna traducción protestante.

**Cuál de las dos se usa lo decide el argumento del pasaje** (decisión de Gabriel,
27-ago-2026), no una preferencia fija. Las dos son traducciones católicas
legítimas; cuando difieren, se elige la que dice mejor lo que el artículo está
demostrando, y **se deja escrito cuál se usó**.

Ejemplo real: en **Mateo 16:18** la del Vaticano dice «el poder de la Muerte no
prevalecerá contra ella» y la de Jerusalén «las puertas del infierno no
prevalecerán contra ella». Las dos traducen πύλαι ᾅδου; se quedó la de Jerusalén
porque es la que transmite lo que el tema quiere transmitir.

⚠️ **Cambiar de versión cambia el argumento, no solo las palabras.** Antes de
elegir hay que releer el párrafo que comenta la cita: si se apoyaba en una
palabra que la otra versión no usa, **hay que reescribir el párrafo**. Casos
medidos: «será reo del cuerpo y de la sangre» (BJ) contra «tendrá que dar cuenta
del Cuerpo y de la Sangre del Señor» (Vaticano); «cáliz» contra «copa»; «los que
la cumplen» contra «los que la practican».

⚠️ **Coherencia entre artículos:** si dos temas citan el mismo pasaje y se
enlazan entre sí, tienen que usar la misma versión. `la-eucaristia` y
`transubstanciacion` citan ambos 1 Corintios 11 y se remiten mutuamente: los dos
van con la del Vaticano.

---

## Cómo se declara la fuente de cada cita

Inmediatamente antes de cada `<div class="scripture-block">`:

```html
<!-- fuente: vaticano -->
<div class="scripture-block">
    <span class="scripture-ref">✝ Juan 6:47-51</span>
    <blockquote>«…»</blockquote>
</div>
```

o bien `<!-- fuente: bj -->`. **Toda cita lleva su marca**: una cita sin marca es
un error que el medidor reporta, no un descuido tolerable.

Y al inicio del bloque `article` de cada artículo apologético en
`translations-es.js`:

```html
<!--
REGLA: Las citas bíblicas en español salen de "El Libro del Pueblo de Dios"
(vatican.va/archive/ESL0506/) o de la Biblia de Jerusalén Latinoamericana,
según cuál sirva mejor al argumento; cada cita declara la suya con
<!- - fuente: vaticano - -> o <!- - fuente: bj - ->. Ambas usan "ustedes".
NUNCA Reina-Valera ni traducciones protestantes.
-->
```

---

## Verificación: los tres veredictos

El cotejo no se hace a ojo. `docs/cotejo.py` recorre las citas del artículo y da
**tres veredictos**, no dos:

- **CONFIRMA** — declarada `vaticano` y coincide letra por letra con vatican.va.
  También vale para citas parciales: cada trozo separado por elipsis tiene que
  estar literalmente en el original y en orden.
- **REFUTA** — declarada `vaticano` y NO coincide. Hay que corregirla.
- **NO DECIDE** — declarada `bj`: el medidor no tiene la Biblia de Jerusalén en
  línea, así que **no puede pronunciarse**. Se verifica a mano contra el papel.
  Que el medidor calle no es que la cita esté bien.

Una cita sin marca de fuente cuenta como REFUTA.

### El sitio del Vaticano, por dentro

Es IntraText y **el índice no tiene enlaces navegables a simple vista**: las
páginas son `__P<código>.HTM`, con el código en **base 36** y los capítulos
numerados de corrido desde el Génesis. `docs/indice_vaticano.py` arma el mapa
completo (70 libros, 1329 capítulos) y lo cachea en `indice_vaticano.json`.

Dos trampas al parsearlo, las dos ya resueltas ahí:

- Los `href` van **sin comillas** (`href=__PW7.HTM`), y el nombre del libro va
  como texto suelto en el NT pero **dentro de un `<a>`** en buena parte del AT.
  Con el patrón estrecho faltaban 17 libros, Levítico entre ellos.
- El HTML viene en **latin-1**, no en UTF-8.

Y una trampa al trocear versículos: **no sirve buscar `" N "` en el texto** —el
encabezado «Capítulo 5» ya trae un 5, y «cinco pórticos» o cualquier cifra del
relato también pegan. Los marcadores se buscan **en orden**, 1, luego 2, luego
3…, cada uno después del anterior. El autotest verifica el troceo de tres
capítulos conocidos (Juan 6 → 71 versículos, 1 Corintios 10 → 33, Lucas 5 → 39)
antes de cotejar nada.

⚠️ **El texto del Vaticano trae erratas tipográficas**: se han visto
`memora mía` (1 Co 11,25) y un espacio partido en `su o rigen` (Jn 2,9). Se
corrigen al publicar y están en la lista `ERRATAS` del medidor.

⚠️ **Respetar sus mayúsculas**: capitaliza Cuerpo, Sangre, Vida y Nombre cuando
se refieren a Cristo.

---

## Estado por artículo (español)

| Artículo | Estado |
|---|---|
| **transubstanciacion** | ✅ 5 citas, todas `vaticano`, cotejadas (27-ago-2026) |
| **la-eucaristia** | ✅ 7 citas, todas `vaticano`, cotejadas (27-ago-2026) |
| **por-que-creemos** | ✅ 10 citas cotejadas (27-ago-2026): 8 `vaticano`, 2 `bj` (Mt 16:18 y 1 Tim 3:15) |
| **sacerdocio** | ✅ 8 citas cotejadas (27-ago-2026) |
| los-santos | ⚠️ Plantilla canónica, sin cotejar y **sin marcas de fuente** |
| el-purgatorio | Esqueleto — sin citas bíblicas aún |
| la-nueva-ley | Esqueleto — citas sin referencia completa |
| la-primacia-de-pedro | Esqueleto — citas sin referencia completa |
| la-santisima-trinidad | Esqueleto — citas sin referencia completa |

⚠️ **Los otros once idiomas** conservan sus propias traducciones católicas, que
es lo correcto: esta regla manda sobre el **español**. Pero cuando un cambio de
versión altera el argumento, hay que revisar si la prosa de los demás idiomas
sigue diciendo lo mismo.
