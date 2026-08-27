# Estructura canónica del artículo apologético

Referencia: artículo "Los santos y su intercesión" (`topicPages["los-santos"]` en `translations-es.js`).

---

## Secciones obligatorias (en orden)

1. **Introducción** — Párrafo `<p>` que presenta la objeción principal con sus palabras exactas en cursiva.
2. **Crítica común** — Nombrar explícitamente los grupos: Testigos de Jehová, pentecostales, adventistas, mormones u otros según corresponda al tema.
3. **Cita bíblica** — `<div class="scripture-block">` con `<span class="scripture-ref">✝ Libro Cap:Ver</span>` y `<blockquote>` con `<strong class="s-hi">` en frases clave.
4. **Explicación** — Párrafo `<p>` inmediatamente después de la cita que desarrolla el argumento.
5. Repetir pasos 3–4 cuantas veces sea necesario.
6. **Conclusión** — `<h2>Conclusión</h2>` con dos párrafos que sintetizan y responden a los críticos.

---

## Reglas de formato

### Botón «Compartir este tema»

No se escribe en el `hero` de los diccionarios: lo inyecta `js/main.js` junto a
«Volver a Temas», y su texto vive en la clave `share` de cada idioma. No hay
que tocar nada al crear un tema nuevo.

### scripture-block (citas bíblicas)

```html
<!-- TODO: verificar Libro Cap:Ver en BJL -->
<div class="scripture-block">
    <span class="scripture-ref">✝ Libro Cap:Ver</span>
    <blockquote>«...texto con <strong class="s-hi">frase clave</strong>...»</blockquote>
</div>
```

- `<strong class="s-hi">` — frase clave doctrinal (color rojo-marrón).
- `<strong class="s-name">` — nombre propio relevante (color dorado-ocre).
- Los versículos NO bíblicos (citas patrísticas, litúrgicas) van en `<blockquote>` plano con referencia al final: `— Autor, Obra, año`.

### Títulos de sección

```html
<h2>Título descriptivo<br>Libro Cap:Ver</h2>
```

Cuando la sección gira en torno a un versículo específico, se incluye la referencia en el `<h2>` después de `<br>`.

### Listas de síntesis

```html
<ul>
    <li>Punto clave 1.</li>
    <li>Punto clave 2.</li>
</ul>
```

Se usan para consolidar los puntos demostrados, generalmente antes de la Conclusión.

---

## La voz: combativa con la objeción, nunca con el lector

La referencia es `transubstanciacion`. El artículo **pelea** —contra el argumento
del adversario, al que nombra y cita— y **no le da órdenes a quien lee**. Esas dos
cosas van juntas: la fuerza sale de la demostración, no de la arenga. Medidor:
`docs/tono.py`, con autotest y lista blanca (las citas no cuentan para los rasgos
de voz: dentro de un `<blockquote>` el imperativo es de la Escritura).

### Lo que la voz SÍ tiene (el medidor lo verifica en cada artículo)

1. **Nombra a los grupos**, no habla de «algunos»: Testigos de Jehová,
   adventistas, pentecostales, mormones, protestantes, evangélicos, bautistas.
2. **Cita la objeción con sus palabras exactas**, en cursiva y entre comillas:
   *«El pan sigue siendo pan: se ve pan y sabe a pan.»* Se transcribe como la
   dicen ellos, no una versión debilitada.
3. **Responde en el terreno de la Escritura**, no en el de la filosofía: «no se
   responde con filosofía sino con la Escritura, porque la Escritura ya contó
   lo que ocurre cuando...».
4. **Despacha rápido el argumento flojo** y se queda con el que importa: «La
   segunda se responde en una línea... La primera es la que importa».
5. **Cierra cada tramo con un golpe corto**, después de la evidencia y no antes:
   «Ya ocurrió una vez. Ocurrió por lo mismo.» · «aquel pan no era pan.» ·
   «Nadie está rodeado por quienes no están.»
6. **Devuelve la carga de la prueba** al final: «Quien dice que los muertos no
   pueden escuchar tiene que explicar antes por qué el cielo guarda las
   oraciones en copas de oro.»

### Lo que la voz NO tiene

| En vez de | Va |
|---|---|
| «Fíjese en quién funda esa santidad» | «Conviene ver en quién se funda esa santidad» |
| «ve al tema ¿Por qué creemos?» | «en el tema ¿Por qué creemos?» |
| «Hay que leer la Palabra de Dios» (título) | «El enemigo pelea contra su lectura» |
| «hay que hacer lo que Dios dice» | «la fe consiste en hacer lo que Dios dice» |
| «nuestra fe no reposa en el ministro» | «la fe no reposa en el ministro» |

⛔ **Nada de imperativos al lector, ni tuteo, ni «debemos».** La conclusión la
saca quien lee; el artículo pone los hechos y el adversario queda sin salida.

### Español neutro — el «vosotros» también cuenta dentro de las citas

Es donde se cuela, porque las ediciones peninsulares lo traen. El 27-ago-2026
había dos en `los-santos` («os habéis acercado», «Pensad... no os canséis»),
heredados de la cita. `tono.py` los cuenta en **todo** el artículo, citas
incluidas, y deben ser **0**.

### Estado (27-ago-2026)

Los **cinco** artículos con contenido —`transubstanciacion`, `la-eucaristia`,
`por-que-creemos`, `sacerdocio` y `los-santos`— están en **0 rasgos a limar**,
**0 «vosotros»** y con los tres marcadores de voz combativa en verde.

## Marcadores de trabajo pendiente

Cuando falta una sección obligatoria:

```html
<!-- TODO: agregar [Crítica común] — descripción breve de lo que falta -->
<!-- TODO: agregar [Cita bíblica] — referencia sugerida -->
<!-- TODO: agregar [Conclusión] -->
```

---

## Artículos según estado

| Artículo | Estado | Notas |
|---|---|---|
| los-santos | **Completo y publicado** | Citas cotejadas, tono ajustado y traducido a los 12 idiomas (27-ago-2026) |
| la-eucaristia | Completo | Citas cotejadas y tono ajustado (27-ago-2026) |
| por-que-creemos | Completo | Citas cotejadas y tono ajustado (27-ago-2026) |
| sacerdocio | Completo | Citas cotejadas, crítica común agregada y tono ajustado (27-ago-2026) |
| el-purgatorio | Esqueleto | Faltan crítica común, citas, conclusión |
| la-nueva-ley | Esqueleto | Faltan crítica común, citas, conclusión |
| la-primacia-de-pedro | Esqueleto | Faltan crítica común, citas, conclusión |
| la-santisima-trinidad | Esqueleto | Faltan crítica común, citas, conclusión |
| transubstanciacion | Completo | Redactado 27-ago-2026 y traducido a los 12 idiomas |
| recursos-recomendados | No apologético | No aplica estructura |
| sobre-este-sitio | No apologético | No aplica estructura |
