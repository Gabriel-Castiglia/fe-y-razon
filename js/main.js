/* ──────────────────────────────────────────────────────────── */
/* FE Y TRADICIÓN — Animaciones y Comportamiento               */
/* ──────────────────────────────────────────────────────────── */

// ──────────────────────────────────────────────────────────
// PRELOADER — Fade out cuando el primer video puede reproducir
// ──────────────────────────────────────────────────────────
(function () {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    preloader.classList.add('fade-out');
    setTimeout(() => preloader.remove(), 700);
  };
  const firstVideo = document.querySelector('.hero-video.active');
  if (firstVideo) {
    firstVideo.addEventListener('canplay', dismiss, { once: true });
  }
  setTimeout(dismiss, 2200);
})();

document.addEventListener('DOMContentLoaded', function () {

  // ──────────────────────────────────────────────────────────
  // 0. HAMBURGER MENU — Navegación móvil
  // ──────────────────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navList   = document.querySelector('.nav-links');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
  // ──────────────────────────────────────────────────────────
  // 1. HERO VIDEO CROSSFADE — Loop infinito de videos
  // ──────────────────────────────────────────────────────────
  
  const videos = Array.from(document.querySelectorAll('.hero-video'));
  if (videos.length) {
    let currentIndex = 0;
    let isTransitioning = false;
    const transitionDuration = 1200;

    function showVideo(index) {
      const prevIndex = currentIndex;
      currentIndex = index;
      const prevVideo = videos[prevIndex];
      const nextVideo = videos[currentIndex];

      if (prevVideo === nextVideo) return;

      nextVideo.preload = 'auto';
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {
        // En caso de fallo de autoplay
      });
      nextVideo.classList.add('active');

      setTimeout(() => {
        prevVideo.classList.remove('active');
        prevVideo.pause();
        prevVideo.currentTime = 0;
        isTransitioning = false;
      }, transitionDuration);
    }

    function advanceVideo() {
      if (isTransitioning) return;
      isTransitioning = true;
      const nextIndex = (currentIndex + 1) % videos.length;
      showVideo(nextIndex);
    }

    videos.forEach((video) => {
      video.addEventListener('timeupdate', function () {
        if (isTransitioning) return;
        if (!this.duration || this.currentTime < this.duration - 1.3) return;
        advanceVideo();
      });

      video.addEventListener('ended', advanceVideo);
    });

    const firstVideo = videos[0];
    firstVideo.play().catch(() => {
      setTimeout(advanceVideo, 2500);
    });
  }

  // ──────────────────────────────────────────────────────────
  // 1.5 CONTACT VIDEO CROSSFADE — Loop infinito de videos de velas
  // ──────────────────────────────────────────────────────────
  
  const contactVideos = Array.from(document.querySelectorAll('.contact-video'));
  if (contactVideos.length) {
    let contactCurrentIndex = 0;
    let contactIsTransitioning = false;
    const contactTransitionDuration = 1200;

    function showContactVideo(index) {
      const prevIndex = contactCurrentIndex;
      contactCurrentIndex = index;
      const prevVideo = contactVideos[prevIndex];
      const nextVideo = contactVideos[contactCurrentIndex];

      if (prevVideo === nextVideo) return;

      nextVideo.preload = 'auto';
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {
        // En caso de fallo de autoplay
      });
      nextVideo.classList.add('active');

      setTimeout(() => {
        prevVideo.classList.remove('active');
        prevVideo.pause();
        prevVideo.currentTime = 0;
        contactIsTransitioning = false;
      }, contactTransitionDuration);
    }

    function advanceContactVideo() {
      if (contactIsTransitioning) return;
      contactIsTransitioning = true;
      const nextIndex = (contactCurrentIndex + 1) % contactVideos.length;
      showContactVideo(nextIndex);
    }

    contactVideos.forEach((video) => {
      video.addEventListener('timeupdate', function () {
        if (contactIsTransitioning) return;
        if (!this.duration || this.currentTime < this.duration - 1.3) return;
        advanceContactVideo();
      });

      video.addEventListener('ended', advanceContactVideo);
    });

    const firstContactVideo = contactVideos[0];
    firstContactVideo.play().catch(() => {
      setTimeout(advanceContactVideo, 2500);
    });
  }

  // ──────────────────────────────────────────────────────────
  // 2. HEADER SCROLL EFFECT — Cambio de estilos al bajar
  // ──────────────────────────────────────────────────────────
  
  const header = document.getElementById('header');
  const hero = document.getElementById('hero');

  function updateHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();

  // ──────────────────────────────────────────────────────────
  // 3. SCROLL REVEAL — Animación de elementos al bajar
  // ──────────────────────────────────────────────────────────
  
  const revealElements = document.querySelectorAll('.reveal, .reveal-left');

  function revealOnScroll() {
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementBottom = el.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (elementBottom > 0 && elementTop < viewportHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll(); // Run on load

  // ──────────────────────────────────────────────────────────
  // 4. NAVIGATION ACTIVE LINK — Marcar link activo
  // ──────────────────────────────────────────────────────────
  
  const navLinks = document.querySelectorAll('nav a');

  function updateActiveLink() {
    let currentSection = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ──────────────────────────────────────────────────────────
  // 5. MEDITATION QUOTE CYCLE — Rotación de citas por idioma
  // ──────────────────────────────────────────────────────────

  const meditInner = document.getElementById('meditacion-inner');
  const meditRef   = document.getElementById('meditacion-ref');
  const meditText  = document.getElementById('meditacion-text');

  if (meditInner && meditRef && meditText) {
    let quoteIndex = 0;
    let quoteTimer = null;

    function getQuotes() {
      const lang = (typeof currentLang !== 'undefined') ? currentLang : 'es';
      const t = (typeof translations !== 'undefined') ? translations[lang] : null;
      return (t && t.meditacion && t.meditacion.quotes) ? t.meditacion.quotes : null;
    }

    function showQuote(quotes, idx) {
      meditRef.textContent  = quotes[idx].ref;
      meditText.textContent = '“' + quotes[idx].text + '”';
    }

    function cycleQuote() {
      const quotes = getQuotes();
      if (!quotes) return;

      meditInner.classList.add('meditacion-fading');
      setTimeout(() => {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        showQuote(quotes, quoteIndex);
        meditInner.classList.remove('meditacion-fading');
      }, 750);
    }

    function startCycle() {
      clearInterval(quoteTimer);
      quoteTimer = setInterval(cycleQuote, 7000);
    }

    // Restart cycle and update text immediately when language changes
    document.addEventListener('langChange', (e) => {
      const quotes = getQuotes();
      if (!quotes) return;
      quoteIndex = 0;
      showQuote(quotes, quoteIndex);
      startCycle();
    });

    startCycle();
  }

  // ──────────────────────────────────────────────────────────
  // 6. CARD VIDEO PREVIEW — Hover sobre tarjetas de artículo
  // ──────────────────────────────────────────────────────────
  // ──────────────────────────────────────────────────────────
  // 7. CONTACT FORM — Formspree AJAX
  // ──────────────────────────────────────────────────────────
  const contactForm    = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');
  const contactSubmit  = document.getElementById('contact-submit');

  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      contactSubmit.disabled = true;
      contactSubmit.textContent = '...';

      try {
        const res = await fetch('https://formspree.io/f/xrejklra', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(contactForm)
        });

        if (res.ok) {
          contactForm.style.display = 'none';
          contactForm.hidden = true;
          contactSuccess.removeAttribute('hidden');
          contactSuccess.style.display = 'block';
          contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          contactSubmit.disabled = false;
          contactSubmit.textContent = 'Enviar mensaje';
          alert('Hubo un error al enviar. Por favor intentá de nuevo.');
        }
      } catch {
        contactSubmit.disabled = false;
        contactSubmit.textContent = 'Enviar mensaje';
        alert('Sin conexión. Por favor intentá de nuevo.');
      }
    });
  }

  document.querySelectorAll('.article-card').forEach(card => {
    const vid = card.querySelector('.card-bg-video');
    if (!vid) return;
    card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
    card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
  });
});
