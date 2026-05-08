/** 
 * =========================================================================
 * FÉ Y RAZÓN — SISTEMA DE NAVEGACIÓN SPA
 * Controla el overlay de artículos, inyección de contenido y navegación interna.
 * =========================================================================
 */

// 1. CONFIGURACIÓN DE RUTAS Y RECURSOS
// Configuración de artículos: videos asociados y punteros de navegación
const ARTICLES = {
  'sacerdocio':            { videos: ['sacerdote01','sacerdote02','sacerdote03'], prev: 'la-primacia-de-pedro', next: 'por-que-creemos' },
  'por-que-creemos':       { videos: ['conf01','conf02','lectura02'],             prev: 'sacerdocio',           next: 'la-eucaristia' },
  'la-eucaristia':         { videos: ['calis01','misa01','misa02'],               prev: 'por-que-creemos',      next: 'transubstanciacion' },
  'transubstanciacion':    { videos: ['calis01','misa02'],                        prev: 'la-eucaristia',        next: 'los-santos' },
  'los-santos':            { videos: ['rosario01','rosario02','rosario03'],       prev: 'transubstanciacion',   next: 'la-santisima-trinidad' },
  'la-santisima-trinidad': { videos: ['crucifijo01','crucifijo02','crucifijo03'], prev: 'los-santos',           next: 'el-purgatorio' },
  'el-purgatorio':         { videos: ['velas01','velas02','velas03'],             prev: 'la-santisima-trinidad',next: 'la-nueva-ley' },
  'la-nueva-ley':          { videos: ['lectura01','conf01','conf02'],             prev: 'el-purgatorio',        next: 'la-primacia-de-pedro' },
  'la-primacia-de-pedro':  { videos: ['conf03','conf04'],                         prev: 'la-nueva-ley',         next: 'sacerdocio' },
  'recursos-recomendados': { videos: [],                                          prev: 'la-primacia-de-pedro', next: 'sacerdocio' },
};

const VIDEO_BASE = 'Recursos/Videos/';
const OV_TRANSITION = 1200;

let currentSlug    = null;    // Identificador del artículo actual abierto
let ovIndex        = 0;       // Índice del video en reproducción dentro del overlay
let ovTransitioning = false;  // Flag para evitar conflictos durante el crossfade de videos

// 2. HELPERS DE DOM
/**
 * Retorna los elementos de video destinados al fondo del overlay.
 */
function ovVids() {
  return [
    document.getElementById('ov-vid-1'),
    document.getElementById('ov-vid-2'),
    document.getElementById('ov-vid-3'),
  ];
}

// 3. GESTIÓN DEL CICLO DE VIDA DE VIDEOS EN OVERLAY
/**
 * Detiene y limpia los videos del overlay para liberar memoria y recursos.
 */
function stopOverlayVideos() {
  ovTransitioning = false;
  ovIndex = 0;
  ovVids().forEach(v => {
    if (!v) return;
    if (v._ovTimeUpdate) v.removeEventListener('timeupdate', v._ovTimeUpdate);
    if (v._ovEnded)      v.removeEventListener('ended',      v._ovEnded);
    v._ovTimeUpdate = null;
    v._ovEnded      = null;
    v.pause();
    v.src = '';
    v.load();
  });
}

/**
 * Inicia el sistema de crossfade para los videos de fondo del artículo abierto.
 * @param {number} count - Cantidad de videos a ciclar.
 */
function initOverlayVideos(count) {
  ovIndex        = 0;
  ovTransitioning = false;
  const vids     = ovVids().slice(0, count);
  if (!vids.length) return;


  function advanceOv() {
    if (ovTransitioning || vids.length <= 1) return;
    ovTransitioning = true;
    const prevIdx  = ovIndex;
    ovIndex        = (ovIndex + 1) % vids.length;
    const prev     = vids[prevIdx];
    const next     = vids[ovIndex];
    next.currentTime = 0;
    next.play().catch(() => {});
    next.classList.add('active');
    setTimeout(() => {
      prev.classList.remove('active');
      prev.pause();
      prev.currentTime = 0;
      ovTransitioning  = false;
    }, OV_TRANSITION);
  }

  vids.forEach((v, i) => {
    const onTime = function () {
      if (ovTransitioning) return;
      if (!this.duration || this.currentTime < this.duration - 1.3) return;
      advanceOv();
    };
    v._ovTimeUpdate = onTime;
    v._ovEnded      = advanceOv;
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('ended',      advanceOv);
    v.classList.toggle('active', i === 0);
  });

  vids[0].play().catch(() => {});
}

// 4. RENDERIZADO DINÁMICO
/**
 * Genera el HTML para los botones de navegación "Anterior" y "Siguiente".
 * @param {string} slug - ID del artículo actual.
 */
function buildOverlayNav(slug) {
  const cfg    = ARTICLES[slug];
  const tp     = translations[currentLang].topicPages;
  const common = tp.common || {};
  const tSlug  = tp[slug] || {};
  const tNav   = tSlug.nav || {};

  const prevLbl = common.prevLabel || 'Artículo anterior';
  const nextLbl = common.nextLabel || 'Siguiente artículo';
  const prevTit = tNav.prevTitle || cfg.prev;
  const nextTit = tNav.nextTitle || cfg.next;

  document.getElementById('overlay-article-nav').innerHTML =
    `<a href="#" class="article-nav-card prev" data-article="${cfg.prev}">` +
      `<span>${prevLbl}</span><h3>${prevTit}</h3>` +
    `</a>` +
    `<a href="#" class="article-nav-card next" data-article="${cfg.next}">` +
      `<span>${nextLbl}</span><h3>${nextTit}</h3>` +
    `</a>`;
}

/**
 * Ejecuta la animación de aparición de elementos dentro del overlay.
 */
function runOverlayReveal() {
  const ov = document.getElementById('article-overlay');
  if (!ov || ov.hasAttribute('hidden')) return;
  ov.querySelectorAll('.reveal, .reveal-left').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.bottom > 0 && r.top < window.innerHeight * 0.85) el.classList.add('visible');
  });
}

// 5. API PÚBLICA DE NAVEGACIÓN
/**
 * Abre un artículo, inyecta su contenido y activa su fondo de video.
 * @param {string} slug - ID del tema a mostrar.
 */
function showArticle(slug, skipHistory = false) {
  const cfg = ARTICLES[slug];
  if (!cfg) return;
  const tp = translations[currentLang].topicPages;
  const t  = tp[slug];
  if (!t) return;

  currentSlug = slug;
  if (!skipHistory) history.pushState({ article: slug }, '');


  // 5a. Configuración de recursos visuales
  stopOverlayVideos();
  const all = ovVids();
  cfg.videos.forEach((name, i) => {
    if (!all[i]) return;
    all[i].src = VIDEO_BASE + name + '.mp4';
    all[i].classList.toggle('active', i === 0);
  });
  all.forEach((v, i) => {
    if (i >= cfg.videos.length) {
      v.src = '';
      v.classList.remove('active');
    }
  });

  // 5b. Inyección de textos
  document.getElementById('overlay-hero-content').innerHTML  = t.hero    || '';
  document.getElementById('overlay-article-body').innerHTML  = t.article || '';
  buildOverlayNav(slug);
  document.title = t.pageTitle || 'Fé y Razón';

  // 5c. Gestión de visibilidad
  const mainContent = document.getElementById('main-page-content');
  const overlay     = document.getElementById('article-overlay');
  if (mainContent) mainContent.style.display = 'none';
  overlay.removeAttribute('hidden');

  // Cambia el estilo del header para que sea transparente sobre el video oscuro
  document.getElementById('header').classList.add('hero-mode');
  document.body.style.overflow = '';

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Start video crossfade
  initOverlayVideos(cfg.videos.length);

  // Scroll reveal
  setTimeout(runOverlayReveal, 120);
}

/**
 * Cierra el artículo abierto y vuelve a la página de inicio.
 */
function hideArticle(skipHistory = false) {
  stopOverlayVideos();

  const overlay     = document.getElementById('article-overlay');
  const mainContent = document.getElementById('main-page-content');
  if (overlay)     overlay.setAttribute('hidden', '');
  if (mainContent) mainContent.style.display = '';

  document.getElementById('header').classList.remove('hero-mode');
  document.title = 'Fé y Razón | Apologética Católica';
  currentSlug = null;
  if (!skipHistory) history.pushState(null, '', location.pathname);

}

// Exponer globalmente para ser invocado desde main.js u otros scripts
window.openArticle = showArticle;

// 6. MANEJO DE EVENTOS GLOBALES
document.addEventListener('DOMContentLoaded', () => {

  // Delegación de clics: Centraliza la lógica de navegación
  // Maneja todos los clics relacionados con la navegación SPA en un solo punto
  document.addEventListener('click', e => {
    // "Leer →" card links
    const artLink = e.target.closest('.article-link[data-article]');
    if (artLink) {
      e.preventDefault();
      showArticle(artLink.dataset.article);
      return;
    }

    // Prev / Next within overlay
    const navCard = e.target.closest('#article-overlay .article-nav-card[data-article]');
    if (navCard) {
      e.preventDefault();
      showArticle(navCard.dataset.article);
      return;
    }

    // "Volver a Temas" button inside overlay hero
    const backBtn = e.target.closest('#article-overlay .btn-outline-white');
    if (backBtn) {
      e.preventDefault();
      hideArticle();
      const temasEl = document.getElementById('temas');
      if (temasEl) temasEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Header nav links while overlay is open → close overlay
    if (currentSlug) {
      const navA = e.target.closest('header nav a, .logo');
      if (navA) {
        hideArticle();
        // Let browser handle the anchor scroll
      }
    }
  });

  // Sincronización con el sistema de idiomas
  document.addEventListener('langChange', () => {
    if (!currentSlug) return;
    const tp = translations[currentLang].topicPages;
    const t  = tp[currentSlug];
    if (!t) return;
    document.getElementById('overlay-hero-content').innerHTML = t.hero    || '';
    document.getElementById('overlay-article-body').innerHTML = t.article || '';
    buildOverlayNav(currentSlug);
    document.title = t.pageTitle || 'Fé y Razón';
    setTimeout(runOverlayReveal, 60);
  });

  // Barra de progreso y animaciones de scroll dentro del overlay
  window.addEventListener('scroll', () => {
    runOverlayReveal();

    const overlay = document.getElementById('article-overlay');
    if (!overlay || overlay.hasAttribute('hidden')) return;
    const page = document.getElementById('overlay-article-page');
    const bar  = document.getElementById('overlay-reading-progress');
    if (!page || !bar) return;
    const start  = page.offsetTop;
    const height = page.offsetHeight - window.innerHeight;
    if (height <= 0) return;
    const pct = Math.min(Math.max(((window.scrollY - start) / height) * 100, 0), 100);
    bar.style.width = pct + '%';
  }, { passive: true });

    // Soporte para botón Atrás del navegador
  window.addEventListener('popstate', e => {
    if (e.state && e.state.article) {
      showArticle(e.state.article, true);
    } else {
      hideArticle(true);
    }
  });

});
