/**
 * Aviso de Adviento: cuenta regresiva hasta la próxima vela de la corona y
 * miniatura de un vídeo sobre el sentido del Adviento.
 *
 * Calendario (pedido por Gabriel el 19-nov-2026), a medianoche de Roma:
 *  - hasta el 29-nov cuenta hasta el primer domingo de Adviento;
 *  - el 29-nov, el 6-dic y el 13-dic se enciende una vela y la cuenta pasa a
 *    la siguiente («Faltan para la segunda vela»…);
 *  - el 20-dic se enciende la cuarta y el aviso se retira de todas las páginas
 *    (ventana, panel y pestaña). La corona de la portada queda con las cuatro
 *    velas encendidas hasta Navidad, cuando tema.js pasa al tema de Navidad.
 *
 * Tres formas de mostrarse:
 *  - ventana: la primera vez que alguien entra al sitio, si entra por la portada;
 *  - panel: se despliega desde la pestaña (o la primera vez, si entra por otra página);
 *  - pestaña: angosta, pegada al borde derecho, en todas las páginas.
 * Recuerda lo que eligió el visitante (localStorage, clave fyr-adviento-estado):
 * si lo cerró, en adelante queda en la pestaña; si lo abrió, el panel se abre
 * en cada página. Está declarado en Privacidad, en los doce idiomas.
 * La miniatura reproduce el vídeo ahí mismo: el reproductor de YouTube
 * (youtube-nocookie) se carga recién al pulsarla y se quita al cerrar.
 *
 * Hora del Vaticano = Europe/Rome. En noviembre Italia está en UTC+1, así que
 * el instante se fija con ese desfase y Date.now(), que es UTC, da la misma
 * cuenta en cualquier país. Para quitarlo del todo: borrar este archivo,
 * css/adviento.css y sus dos renglones en cada página.
 *
 * Textos: clave advent.* de cada js/translations-xx.js; si el idioma todavía
 * no la tiene, se usa el español de RESPALDO.
 * ?adviento=ver abre la ventana aunque ya se haya visto en la visita.
 */
(function () {
  const NAVIDAD = Date.parse('2026-12-25T00:00:00+01:00');
  const VIDEO = 'https://youtu.be/Z-0HyI4gYk8';
  const EMBED = 'https://www.youtube-nocookie.com/embed/Z-0HyI4gYk8?autoplay=1&rel=0&playsinline=1';
  const MINIATURA = 'Recursos/Im%C3%A1genes/multimedia/catequesis-Z-0HyI4gYk8.webp';
  const CLAVE = 'fyr-adviento-estado';

  // Igual que advent en translations-es.js; solo se usa si falta la traducción.
  const RESPALDO = {
    eyebrow: 'Tiempo de Adviento',
    countdownTitle: 'Faltan para el Adviento',
    startedTitle: 'Ya comenzó el Adviento',
    days: 'días', hours: 'horas', minutes: 'minutos', seconds: 'segundos',
    daysShort: 'd',
    dateNote: 'Primer domingo de Adviento: 29 de noviembre de 2026, hora del Vaticano.',
    countdownCandle2: 'Faltan para la segunda vela',
    countdownCandle3: 'Faltan para la tercera vela',
    countdownCandle4: 'Faltan para la cuarta vela',
    dateNote2: 'Segundo domingo de Adviento: 6 de diciembre de 2026, hora del Vaticano.',
    dateNote3: 'Tercer domingo de Adviento, Gaudete: 13 de diciembre de 2026, hora del Vaticano.',
    dateNote4: 'Cuarto domingo de Adviento: 20 de diciembre de 2026, hora del Vaticano.',
    videoTitle: 'El verdadero significado del Adviento',
    videoSource: 'Vídeo en YouTube · Te Explico la Biblia',
    romeTime: 'En Roma son las',
    tab: 'Adviento',
    open: 'Abrir el aviso de Adviento',
    hide: 'Ocultar el aviso de Adviento',
    close: 'Cerrar',
    play: 'Reproducir',
    wreathBefore: 'La primera vela se enciende el domingo 29 de noviembre.',
    wreathWeek1: 'Primera semana de Adviento',
    wreathWeek2: 'Segunda semana de Adviento',
    wreathWeek3: 'Tercera semana de Adviento, domingo de Gaudete',
    wreathWeek4: 'Cuarta semana de Adviento',
    wreathNext2: 'La segunda vela se enciende el domingo 6 de diciembre.',
    wreathNext3: 'La tercera vela, la rosa, se enciende el domingo 13 de diciembre.',
    wreathNext4: 'La cuarta vela se enciende el domingo 20 de diciembre.'
  };
  // Los cuatro domingos de Adviento de 2026, a medianoche de Roma.
  const DOMINGOS = ['2026-11-29', '2026-12-06', '2026-12-13', '2026-12-20']
    .map(d => Date.parse(d + 'T00:00:00+01:00'));
  // Con la cuarta vela encendida el aviso se retira; queda solo la corona.
  const FIN_AVISO = DOMINGOS[3];

  if (Date.now() >= NAVIDAD) return;

  const pedidoAviso = new URLSearchParams(location.search).get('adviento');
  const forzado = pedidoAviso === 'ver';
  // ?adviento=no: nada abierto en esta carga (para revisar el diseño).
  const callado = pedidoAviso === 'no';
  const esPortada = !!document.getElementById('hero');

  function idioma() {
    return (typeof currentLang !== 'undefined' && currentLang) ? currentLang : (document.documentElement.lang || 'es');
  }
  function t(clave) {
    if (typeof getTranslationValue === 'function') {
      const v = getTranslationValue(idioma(), 'advent.' + clave);
      if (typeof v === 'string' && v) return v;
    }
    return RESPALDO[clave];
  }
  function estado() {
    try { return localStorage.getItem(CLAVE); } catch (e) { return null; }
  }
  function guardar(valor) {
    try { localStorage.setItem(CLAVE, valor); } catch (e) { /* sin almacenamiento: vale solo esta página */ }
  }
  function dosCifras(n) { return String(n).padStart(2, '0'); }
  function velasEncendidas() { return DOMINGOS.filter(d => Date.now() >= d).length; }
  function avisoVigente() { return Date.now() < FIN_AVISO; }
  // La cuenta va siempre hacia la próxima vela: la primera (29-nov) y después
  // la segunda, la tercera y la cuarta.
  function claveTitulo(n) { return n === 0 ? 'countdownTitle' : 'countdownCandle' + (n + 1); }
  function claveNota(n) { return n === 0 ? 'dateNote' : 'dateNote' + (n + 1); }

  // Contenido común a la ventana y al panel. Los textos se ponen después, con
  // textos(), para poder cambiarlos de idioma sin rearmar nada.
  function contenido(idTitulo) {
    return `
      <p class="adv-ceja" data-t="eyebrow"></p>
      <h2 id="${idTitulo}" class="adv-titulo" data-t-titulo></h2>
      <div class="adv-cuenta" role="timer" aria-live="off">
        <div><span data-u="d">0</span><small data-t="days"></small></div>
        <div><span data-u="h">00</span><small data-t="hours"></small></div>
        <div><span data-u="m">00</span><small data-t="minutes"></small></div>
        <div><span data-u="s">00</span><small data-t="seconds"></small></div>
      </div>
      <div class="adv-mini">
        <div class="adv-mini-img">
          <button type="button" class="adv-mini-boton" data-reproducir>
            <img src="${MINIATURA}" alt="" width="960" height="540" loading="lazy" decoding="async">
            <span class="adv-mini-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
          </button>
        </div>
        <a class="adv-mini-titulo" href="${VIDEO}" target="_blank" rel="noopener" data-t="videoTitle"></a>
        <span class="adv-mini-fuente" data-t="videoSource"></span>
      </div>
      <p class="adv-nota" data-t-nota></p>
      <p class="adv-roma"><span data-t="romeTime"></span> <span data-roma>--:--</span></p>`;
  }

  // ---- Reproducir en la miniatura ----
  function reproducirEn(caja) {
    const marco = caja.querySelector('.adv-mini-img');
    if (marco.querySelector('iframe')) return;
    const f = document.createElement('iframe');
    f.src = EMBED;
    f.title = t('videoTitle');
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    marco.dataset.miniatura = marco.innerHTML;
    marco.innerHTML = '';
    marco.appendChild(f);
  }
  // Al cerrar o esconder, el vídeo se corta y vuelve la miniatura.
  function detenerEn(caja) {
    if (!caja) return;
    const marco = caja.querySelector('.adv-mini-img');
    if (marco && marco.dataset.miniatura) {
      marco.innerHTML = marco.dataset.miniatura;
      delete marco.dataset.miniatura;
      textos();
    }
  }
  document.addEventListener('click', e => {
    const b = e.target.closest && e.target.closest('.adv-raiz [data-reproducir]');
    if (b) reproducirEn(b.closest('.adv-mini'));
  });

  // ---- Pestaña y panel: en todas las páginas ----
  const pestana = document.createElement('button');
  pestana.type = 'button';
  pestana.className = 'adv-raiz adv-pestana';
  pestana.setAttribute('aria-expanded', 'false');
  pestana.setAttribute('aria-controls', 'adv-panel');
  pestana.innerHTML = `
    <svg class="adv-vela" viewBox="0 0 16 32" aria-hidden="true"><path d="M8 1c2 3 3 5 0 8-3-3-2-5 0-8z"/><rect x="4" y="11" width="8" height="20" rx="1"/></svg>
    <span class="adv-pestana-txt" data-t="tab"></span>
    <span class="adv-pestana-dias" data-dias></span>`;

  const panel = document.createElement('aside');
  panel.id = 'adv-panel';
  panel.className = 'adv-raiz adv-panel';
  panel.setAttribute('aria-labelledby', 'adv-panel-titulo');
  panel.hidden = true;
  panel.innerHTML = `<button type="button" class="adv-cerrar" data-ocultar>&rsaquo;</button>` + contenido('adv-panel-titulo');

  let ventana = null;

  // ---- Corona del hero: solo en la portada y con el tema de Adviento ----
  let corona = null;
  function armarCorona() {
    const tema = document.documentElement.getAttribute('data-tema') || '';
    const hero = document.querySelector('.hero-content');
    if (!hero || tema.indexOf('adviento') !== 0) return;
    corona = document.createElement('div');
    corona.className = 'adv-raiz adv-corona';
    corona.innerHTML = '<div class="adv-corona-velas" aria-hidden="true">' +
      [0, 1, 2, 3].map(i => `<span class="adv-corona-vela${i === 2 ? ' rosa' : ''}"></span>`).join('') +
      '</div><p class="adv-corona-txt"><span data-t-corona></span><span class="adv-corona-prox" data-t-prox></span></p>';
    hero.appendChild(corona);
  }
  function textoCorona() {
    if (!corona) return;
    const n = velasEncendidas();
    corona.querySelectorAll('.adv-corona-vela').forEach((v, i) => v.classList.toggle('encendida', i < n));
    corona.querySelector('[data-t-corona]').textContent = t(n === 0 ? 'wreathBefore' : 'wreathWeek' + n);
    // Entre la primera y la cuarta vela, debajo de la semana va cuándo se
    // enciende la siguiente.
    corona.querySelector('[data-t-prox]').textContent = (n >= 1 && n <= 3) ? t('wreathNext' + (n + 1)) : '';
  }

  function textos() {
    document.querySelectorAll('.adv-raiz [data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
    const n = velasEncendidas();
    document.querySelectorAll('.adv-raiz [data-t-titulo]').forEach(el => { el.textContent = t(claveTitulo(n)); });
    document.querySelectorAll('.adv-raiz [data-t-nota]').forEach(el => { el.textContent = t(claveNota(n)); });
    velasMostradas = n;
    pestana.setAttribute('aria-label', t('open'));
    document.querySelectorAll('.adv-raiz [data-reproducir]').forEach(b => b.setAttribute('aria-label', t('play') + ': ' + t('videoTitle')));
    if (panel.isConnected) panel.querySelector('[data-ocultar]').setAttribute('aria-label', t('hide'));
    if (ventana) ventana.querySelector('.adv-cerrar').setAttribute('aria-label', t('close'));
    textoCorona();
    tic();
  }

  const reloj = new Intl.DateTimeFormat('es', { timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit', hour12: false });

  let velasMostradas = -1;
  function tic() {
    const ahora = Date.now();
    const n = velasEncendidas();
    // Domingo nuevo con la página abierta: se enciende la vela y cambian los textos.
    if (n !== velasMostradas) { velasMostradas = n; textoCorona(); if (avisoVigente()) textos(); }
    if (!avisoVigente()) { quitarAviso(); return; }
    document.querySelectorAll('.adv-raiz [data-roma]').forEach(el => { el.textContent = reloj.format(ahora); });
    let resto = Math.max(0, Math.floor((DOMINGOS[n] - ahora) / 1000));
    const dias = pestana.querySelector('[data-dias]');
    const d = Math.floor(resto / 86400); resto %= 86400;
    const h = Math.floor(resto / 3600); resto %= 3600;
    const m = Math.floor(resto / 60);
    const s = resto % 60;
    const valores = { d: d, h: dosCifras(h), m: dosCifras(m), s: dosCifras(s) };
    document.querySelectorAll('.adv-raiz [data-u]').forEach(el => { el.textContent = valores[el.dataset.u]; });
    dias.textContent = d + ' ' + t('daysShort');
  }

  function abrirPanel(recordar) {
    if (recordar !== false) guardar('abierto');
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add('adv-abierto'));
    pestana.setAttribute('aria-expanded', 'true');
    pestana.classList.add('adv-escondida');
    panel.querySelector('[data-ocultar]').focus({ preventScroll: true });
  }
  function ocultarPanel(devolverFoco) {
    guardar('cerrado');
    detenerEn(panel);
    panel.classList.remove('adv-abierto');
    pestana.setAttribute('aria-expanded', 'false');
    pestana.classList.remove('adv-escondida');
    setTimeout(() => { if (!panel.classList.contains('adv-abierto')) panel.hidden = true; }, 350);
    if (devolverFoco) pestana.focus({ preventScroll: true });
  }

  pestana.addEventListener('click', () => abrirPanel());
  panel.querySelector('[data-ocultar]').addEventListener('click', () => ocultarPanel(true));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.classList.contains('adv-abierto')) ocultarPanel(true);
  });
  // Un toque fuera del panel lo oculta, como un menú.
  // isConnected: al pulsar la miniatura el botón se reemplaza por el reproductor
  // y ese clic ya no está «dentro» del panel; sin esto el panel se cerraba solo.
  document.addEventListener('click', e => {
    if (!e.target.isConnected) return;
    if (panel.classList.contains('adv-abierto') && !panel.contains(e.target) && !pestana.contains(e.target)) ocultarPanel(false);
  });

  // ---- Ventana de la portada ----
  function abrirVentana() {
    guardar('abierto');
    ventana = document.createElement('div');
    ventana.className = 'adv-raiz adv-fondo';
    ventana.innerHTML = `
      <div class="adv-caja" role="dialog" aria-modal="true" aria-labelledby="adv-ventana-titulo">
        <button type="button" class="adv-cerrar">&times;</button>
        <div class="adv-foto" aria-hidden="true">
          <video muted loop playsinline preload="none" tabindex="-1" poster="Recursos/Videos/velas01-poster.webp"><source src="Recursos/Videos/velas01.mp4" type="video/mp4"></video>
        </div>
        <div class="adv-texto">${contenido('adv-ventana-titulo')}</div>
      </div>`;
    document.body.appendChild(ventana);
    textos();
    // La vela se mueve solo si la foto está a la vista (en el móvil se oculta)
    // y si el visitante no pidió menos movimiento.
    const vela = ventana.querySelector('.adv-foto video');
    const quieto = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!quieto && getComputedStyle(vela.parentElement).display !== 'none') {
      vela.preload = 'auto';
      const p = vela.play();
      if (p && p.catch) p.catch(() => { /* queda el póster */ });
    }
    const anterior = document.activeElement;
    const cerrarBtn = ventana.querySelector('.adv-cerrar');

    function alTeclado(e) {
      if (e.key === 'Escape') cerrar();
      if (e.key === 'Tab') {
        const focos = ventana.querySelectorAll('button, a[href]');
        const primero = focos[0], ultimo = focos[focos.length - 1];
        if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
        else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
      }
    }
    function cerrar() {
      guardar('cerrado');
      detenerEn(ventana);
      document.removeEventListener('keydown', alTeclado);
      ventana.classList.remove('adv-visible');
      const v = ventana; ventana = null;
      setTimeout(() => v.remove(), 400);
      // La pestaña avisa con un destello dónde quedó el aviso.
      pestana.classList.add('adv-destello');
      setTimeout(() => pestana.classList.remove('adv-destello'), 2400);
      if (anterior && anterior.focus) anterior.focus({ preventScroll: true });
    }
    cerrarBtn.addEventListener('click', cerrar);
    ventana.addEventListener('click', e => { if (e.target === ventana) cerrar(); });
    document.addEventListener('keydown', alTeclado);
    requestAnimationFrame(() => {
      ventana.classList.add('adv-visible');
      cerrarBtn.focus({ preventScroll: true });
    });
  }

  // La corona no se toca: queda con las cuatro velas hasta Navidad.
  function quitarAviso() {
    clearInterval(intervalo);
    [pestana, panel, ventana].forEach(el => { if (el) el.remove(); });
    ventana = null;
  }

  let intervalo = null;

  function arrancar() {
    armarCorona();
    if (!avisoVigente()) {
      textoCorona();
      document.addEventListener('langChange', () => setTimeout(textoCorona, 0));
      return;
    }
    document.body.appendChild(pestana);
    document.body.appendChild(panel);
    textos();
    intervalo = setInterval(tic, 1000);
    document.addEventListener('langChange', () => setTimeout(textos, 0));
    if (callado) return;
    const e = estado();
    if (forzado || (e === null && esPortada)) esperarPreloader();   // primera vez, por la portada
    else if (e === null || e === 'abierto') abrirPanel(true);        // primera vez por otra página, o lo dejó abierto
  }

  // La ventana espera a que se vaya el preloader de la portada.
  function esperarPreloader() {
    if (document.getElementById('preloader')) { setTimeout(esperarPreloader, 300); return; }
    setTimeout(abrirVentana, 1200);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar);
  else arrancar();
})();
