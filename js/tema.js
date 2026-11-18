/**
 * Tema de color según el tiempo litúrgico. Corre en el <head>, antes de pintar,
 * para que la página no aparezca un instante en blanco y dorado y después cambie.
 *
 * Fuera de las fechas del calendario el sitio usa el tema estándar (blanco y
 * dorado), que es el :root de css/style.css y no lleva atributo. Las fechas van
 * con el desfase de Roma (+01:00 en invierno, +02:00 en verano), así que el
 * cambio ocurre a la misma hora para todos: la medianoche del Vaticano.
 *
 * Vista previa: ?tema=adviento (o cualquier tema) lo fija en esta pestaña
 * mientras se navega; ?tema=auto vuelve al calendario.
 */
(function () {
  var CALENDARIO = [
    // tema,      desde (incluido),            hasta (excluido)
    ['adviento-oscuro', '2026-11-29T00:00:00+01:00', '2026-12-25T00:00:00+01:00']
  ];
  // Color de la barra del navegador en el móvil, por tema.
  var BARRA = {
    estandar: '#1a1410',
    'adviento-oscuro': '#160b22'
  };
  // Vídeos de cabecera por tema y por página: nombre base en Recursos/Videos y
  // qué altura del cuadro mostrar (object-position), para que en los vídeos
  // verticales no se corte lo que importa, como la llama. Las páginas que no
  // figuran conservan su vídeo propio. Elegidos por Gabriel el 18-nov-2026.
  var HERO = {
    adviento: {
      // La corona, la vela y al final la catedral en penumbra. El ícono de la
      // Virgen se probó y se sacó (19-nov-2026).
      'index': [['corona01', 'center 50%'], ['velas01', 'center 34%'], ['penumbra01', 'center 55%']],
      'temas': [['roseton01', 'center 40%']],
      'del-autor': [['biblia01', 'center 60%']],
      'tema-recursos-recomendados': [['cirios01', 'center 45%']],
      'sobre-este-sitio': [['vaticano01', ''], ['incienso01', 'center 40%']],
      // Los nueve temas conservan sus vídeos de siempre (Gabriel, 19-nov-2026).
      // El purgatorio lleva los mismos, solo encuadrados para que no se corte la llama.
      'tema-el-purgatorio': [['velas01', 'center 24%'], ['cirio01', 'center 35%']]
    }
  };
  // Vídeo de la sección de meditación de la portada, por tema.
  var MEDITACION = { adviento: 'cirios01' };
  var CLAVE = 'fyr-tema';

  function porFecha() {
    var ahora = Date.now();
    for (var i = 0; i < CALENDARIO.length; i++) {
      if (ahora >= Date.parse(CALENDARIO[i][1]) && ahora < Date.parse(CALENDARIO[i][2])) return CALENDARIO[i][0];
    }
    return 'estandar';
  }

  var pedido = null;
  try { pedido = new URLSearchParams(location.search).get('tema'); } catch (e) { /* navegador viejo */ }
  try {
    if (pedido === 'auto') sessionStorage.removeItem(CLAVE);
    else if (pedido && BARRA[pedido]) sessionStorage.setItem(CLAVE, pedido);
    pedido = sessionStorage.getItem(CLAVE);
  } catch (e) { /* sin almacenamiento: vale solo el parámetro */ }

  var tema = (pedido && BARRA[pedido]) ? pedido : porFecha();
  window.FYRTema = tema;
  if (tema === 'estandar') return;

  document.documentElement.setAttribute('data-tema', tema);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', BARRA[tema]);

  // Cambia los vídeos del hero antes de que main.js arranque su rotación:
  // este oyente se registra antes que el de main.js, así que corre primero.
  var familia = tema.split('-')[0];
  var porPagina = HERO[tema] || HERO[familia];
  // router.js pregunta acá qué vídeos usar al abrir un tema desde la portada,
  // así el artículo abierto en la portada y su página directa coinciden.
  window.FYRTemaVideos = function (pagina) {
    var l = porPagina && porPagina[pagina];
    return l ? l.map(function (x) { return x[0]; }) : null;
  };
  var pagina = location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
  var lista = porPagina && porPagina[pagina];
  var meditacion = MEDITACION[tema] || MEDITACION[familia];
  if (meditacion && pagina === 'index') {
    document.addEventListener('DOMContentLoaded', function () {
      var m = document.querySelector('.meditacion-video');
      if (!m) return;
      m.poster = 'Recursos/Videos/' + meditacion + '-poster.webp';
      var fuente = m.querySelector('source');
      if (fuente) fuente.src = 'Recursos/Videos/' + meditacion + '.mp4';
      m.load();
    });
  }
  if (!lista) return;
  document.addEventListener('DOMContentLoaded', function () {
    // Los huecos del artículo que se abre encima (#article-overlay) también son
    // .article-hero .hero-video, pero los maneja router.js: se dejan fuera.
    var todos = document.querySelectorAll('#hero .hero-video, .article-hero .hero-video');
    var videos = [];
    for (var k = 0; k < todos.length; k++) if (!todos[k].closest('#article-overlay')) videos.push(todos[k]);
    for (var i = 0; i < videos.length; i++) {
      var v = videos[i];
      if (i >= lista.length) { v.parentNode.removeChild(v); continue; }
      var base = 'Recursos/Videos/' + lista[i][0];
      v.style.objectPosition = lista[i][1];
      // Con un solo vídeo el rotador de main.js no lo reinicia: que se repita solo.
      if (lista.length === 1) v.loop = true;
      v.poster = base + '-poster.webp';
      var src = v.querySelector('source');
      if (src) src.src = base + '.mp4';
      // load() en todos: el navegador elige el archivo al leer el HTML, y sin
      // esto los vídeos que no son el primero seguían con su fuente vieja
      // (salía «lectura» en la portada). Con preload="none" no descarga nada.
      v.load();
    }
  });
})();
