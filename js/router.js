/* ────────────────────────────────────────────────────────── */
/* FÉ Y RAZÓN — Router (SPA overlay, URL siempre fija)       */
/* ────────────────────────────────────────────────────────── */

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
};
const VIDEO_BASE = 'Recursos/Videos/';
const OV_TRANSITION = 1200;

let currentSlug    = null;
let ovIndex        = 0;
let ovTransitioning = false;

function ovVids() {
  return [
    document.getElementById('ov-vid-1'),
    document.getElementById('ov-vid-2'),
    document.getElementById('ov-vid-3'),
  ];
}

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

function runOverlayReveal() {
  const ov = document.getElementById('article-overlay');
  if (!ov || ov.hasAttribute('hidden')) return;
  ov.querySelectorAll('.reveal, .reveal-left').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.bottom > 0 && r.top < window.innerHeight * 0.85) el.classList.add('visible');
  });
}

function showArticle(slug) {
  const cfg = ARTICLES[slug];
  if (!cfg) return;
  const tp = translations[currentLang].topicPages;
  const t  = tp[slug];
  if (!t) return;

  currentSlug = slug;

  // Assign video sources
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

  // Inject translated content
  document.getElementById('overlay-hero-content').innerHTML  = t.hero    || '';
  document.getElementById('overlay-article-body').innerHTML  = t.article || '';
  buildOverlayNav(slug);
  document.title = t.pageTitle || 'Fé y Razón';

  // Swap visibility: hide main page, show overlay
  const mainContent = document.getElementById('main-page-content');
  const overlay     = document.getElementById('article-overlay');
  if (mainContent) mainContent.style.display = 'none';
  overlay.removeAttribute('hidden');

  // Header: apply hero-mode (transparent over dark video)
  document.getElementById('header').classList.add('hero-mode');
  document.body.style.overflow = '';

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Start video crossfade
  initOverlayVideos(cfg.videos.length);

  // Scroll reveal
  setTimeout(runOverlayReveal, 120);
}

function hideArticle() {
  stopOverlayVideos();

  const overlay     = document.getElementById('article-overlay');
  const mainContent = document.getElementById('main-page-content');
  if (overlay)     overlay.setAttribute('hidden', '');
  if (mainContent) mainContent.style.display = '';

  document.getElementById('header').classList.remove('hero-mode');
  document.title = 'Fé y Razón | Apologética Católica';
  currentSlug = null;
}

// Expose globally so main.js card handler can call it
window.openArticle = showArticle;

document.addEventListener('DOMContentLoaded', () => {

  // ── Click delegation ────────────────────────────────────
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

  // ── Language change: re-render current article ──────────
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

  // ── Scroll: reveal + reading progress ───────────────────
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

});
