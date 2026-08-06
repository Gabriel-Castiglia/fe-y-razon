# Reglas de los vídeos de fondo

## ⚠️ ANTES DE BORRAR O MOVER UN VÍDEO: hay CINCO sitios que los usan

Es fácil mirar solo los fondos de las páginas y creer que un clip está libre.
**No lo está.** El 6 de agosto de 2026 se retiraron nueve vídeos «sin usar» y
cuatro de ellos sí se usaban: se rompieron tres tarjetas de la portada y la
sección de meditación. Se detectó por casualidad al verificar referencias.

Los cinco lugares, todos con selector distinto:

| Dónde | Clase / selector | Cuántos | Quién los gobierna |
|---|---|---|---|
| Fondo de página (portada y cada tema) | `.hero-video` | 4 en la portada, 2 por página | `VideoManager` en `main.js` |
| **Tarjetas de tema de la portada** | `.card-bg-video` | 9, uno por tarjeta | HTML, con `loop` propio |
| **Sección de meditación** | `.meditacion-video` | 1 | HTML, con `loop` propio |
| **Formulario de contacto** | `.contact-video` | 3 (las velas) | `VideoManager`, init diferido |
| Fondo del artículo abierto desde la portada | `.hero-video` dentro de `#article-overlay` | 2 por tema | tabla `ARTICLES` de `router.js` |

**Comprobación obligatoria antes de dar por libre un vídeo** — que ninguna de
estas devuelva nada:

```bash
grep -rn "NOMBRE01" *.html js/*.js
```

Y después de tocar cualquier cosa, que no queden referencias a archivos que ya no
existen: recorrer los `Recursos/Videos/*.mp4` citados en los `.html` y en
`router.js` y comprobar que cada uno esté en disco.

## Las dos fuentes de un mismo fondo

Un tema tiene sus vídeos **en dos sitios que hay que mantener iguales**:

1. Las etiquetas `<video class="hero-video">` de su `tema-*.html`, que es lo que
   se ve al entrar por la URL directa.
2. La lista `videos:` de su entrada en `ARTICLES` (`js/router.js`), que es lo que
   se ve al abrir el tema **desde la portada** (overlay SPA).

Cambiar solo el HTML no se nota navegando desde el índice. Verificar siempre que
ambas coincidan.

⚠️ `VideoManager` selecciona por clase en todo el documento, así que en la portada
se llevaba también los huecos vacíos del overlay y la rotación se paraba al
llegar a ellos. Está filtrado con `:not(#article-overlay)`; no quitar ese filtro.

## Formato

Lado largo **1280 px** conservando proporción, **solo MP4** h264 crf 28, **sin
pista de audio**, póster `.webp` a la mitad exacta de la resolución, por debajo
de ~2,3 MB por archivo.

- **No volver a generar WEBM**: no aporta compatibilidad (H.264 lo reproduce
  todo, y Safari es el peor con VP9) ni ahorro (en 9 de 21 pesaba más que el
  MP4), y duplicaba el peso del sitio.
- **No bajar de 1280 px.** Se probó a 960 y la pérdida es evidente. Si hace falta
  aligerar, subir el CRF o recortar duración; la resolución no se toca.
- Máximo **dos vídeos por tema**, por About y por Recursos. La portada lleva
  cuatro y el formulario de contacto tres.
