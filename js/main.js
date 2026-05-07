/** 
 * =========================================================================
 * FÉ Y RAZÓN — LÓGICA PRINCIPAL DE INTERFAZ
 * Controla animaciones, ciclos de video, UI global y formularios.
 * =========================================================================
 */

// 1. SISTEMA DE PRELOADER
// PRELOADER — Fade out cuando el primer video puede reproducir
(function () {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  let dismissed = false;
  
  // Función para ocultar y eliminar el preloader del DOM
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    preloader.classList.add('fade-out');
    setTimeout(() => preloader.remove(), 700); // Sincronizado con la transición CSS
  };

  // Estrategia 1: Quitar preloader cuando el video del Hero esté listo
  const firstVideo = document.querySelector('.hero-video.active');
  if (firstVideo) {
    firstVideo.addEventListener('canplay', dismiss, { once: true });
  }

  // Estrategia 2: Límite de tiempo por seguridad (Failsafe)
  setTimeout(dismiss, 2200);
})();

document.addEventListener('DOMContentLoaded', function () {

  // 2. MENÚ HAMBURGUESA (Móvil)
  const hamburger = document.getElementById('hamburger');
  const navList   = document.querySelector('.nav-links');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      // Toggle de clases y accesibilidad ARIA
      const isOpen = navList.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : ''; // Evita scroll con menú abierto
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        // Cierra el menú automáticamente al hacer click en un enlace
        navList.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. CICLO DE VIDEO DEL HERO
  // Maneja el crossfade infinito de videos de fondo en la sección principal.
  
  const videos = Array.from(document.querySelectorAll('.hero-video'));
  if (videos.length) {
    let currentIndex = 0;
    let isTransitioning = false;
    const transitionDuration = 1200; // Debe coincidir con el transition de CSS

    // Gestiona la transición opacidad entre dos videos
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

    // Salta al siguiente video en el array
    function advanceVideo() {
      if (isTransitioning) return;
      isTransitioning = true;
      const nextIndex = (currentIndex + 1) % videos.length;
      showVideo(nextIndex);
    }

    // Eventos para detectar el final del video (con margen de seguridad de 1.3s para el crossfade)
    videos.forEach((video) => {
      video.addEventListener('timeupdate', function () {
        if (isTransitioning) return;
        if (!this.duration || this.currentTime < this.duration - 1.3) return;
        advanceVideo();
      });

      // Backup si timeupdate falla o el video es muy corto
      video.addEventListener('ended', advanceVideo);
    });

    const firstVideo = videos[0];
    firstVideo.play().catch(() => {
      setTimeout(advanceVideo, 2500);
    });
  }

  // 4. CICLO DE VIDEO DE CONTACTO
  // Nota: Mantiene lógica separada para permitir tiempos o comportamientos distintos al Hero.
  
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

  // 5. EFECTOS DEL HEADER AL HACER SCROLL
  // Cambia la opacidad y colores del menú según la posición del scroll.
  
  const header = document.getElementById('header');
  const hero = document.getElementById('hero');

  const langTrigger = document.getElementById('lang-dropdown-trigger');

  // Cambia la apariencia del header (transparente -> sólido) al hacer scroll
  function updateHeaderScroll() {
    const scrolled = window.scrollY > 50;
    header.classList.toggle('scrolled', scrolled);
    if (langTrigger) {
      // Ajuste dinámico de colores del selector de idioma según el fondo
      langTrigger.style.borderColor = scrolled ? 'rgba(160, 115, 50, 0.8)' : '';
      langTrigger.style.color = scrolled ? '#1a1410' : '';
    }
  }

  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();

  // 6. ANIMACIONES DE REVEAL (Aparición gradual)
  
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

  // 7. INDICADOR DE SECCIÓN ACTIVA EN NAVEGACIÓN
  
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

  // 8. CICLO DE CITAS DE MEDITACIÓN
  // Rotación automática de textos bíblicos con soporte multi-idioma.

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

    // Actualiza el DOM con la cita específica
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

    document.addEventListener('langChange', (e) => {
      // Reinicia el ciclo al cambiar de idioma para mostrar la cita correcta de inmediato
      const quotes = getQuotes();
      if (!quotes) return;
      quoteIndex = 0;
      showQuote(quotes, quoteIndex);
      startCycle();
    });

    startCycle();
  }

  // 9. FORMULARIO DE CONTACTO (AJAX via Formspree)
  const contactForm    = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');
  const contactSubmit  = document.getElementById('contact-submit');
  const contactDesc    = document.getElementById('contact-desc');

  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      contactSubmit.disabled = true; // Evita múltiples envíos
      contactSubmit.textContent = '...';

      try {
        // Envío mediante Formspree
        const res = await fetch('https://formspree.io/f/xrejklra', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(contactForm)
        });

        if (res.ok) {
          contactForm.style.display = 'none';
          contactForm.hidden = true;
          if (contactDesc) { contactDesc.style.display = 'none'; }
          contactSuccess.removeAttribute('hidden');
          contactSuccess.style.display = 'block';
          // Scroll suave hacia el mensaje de éxito
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

  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  // 10. INTERACTIVIDAD DE TARJETAS DE ARTÍCULO
  document.querySelectorAll('.article-card').forEach(card => {
    const vid  = card.querySelector('.card-bg-video');
    const link = card.querySelector('.article-link');

    if (vid && !isTouchDevice) {
      card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
      card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
    }

    // Hacer que toda la tarjeta sea clickable

    if (link) {
      card.style.cursor = 'pointer';

      const openCard = () => {
        const slug = link.getAttribute('data-article');
        if (typeof window.openArticle === 'function' && slug) {
          window.openArticle(slug);
        } else {
          window.location.href = link.href;
        }
      };

      // Soporte para iOS Safari: 
      // touchend es más fiable para elementos no interactivos nativamente.
      card.addEventListener('touchend', e => {
        if (e.target.closest('.article-link')) return;
        e.preventDefault();
        openCard();
      }, { passive: false });

      card.addEventListener('click', e => {
        if (!e.target.closest('.article-link')) openCard();
      });
    }
  });

  // 11. BARRA DE PROGRESO DE LECTURA
  const progressBar = document.getElementById('reading-progress');
  const articlePage = document.querySelector('.article-page');

  if (progressBar && articlePage) {
    window.addEventListener('scroll', () => {
      const start = articlePage.offsetTop;
      const height = articlePage.offsetHeight - window.innerHeight;
      const scrolled = window.scrollY - start;
      const pct = Math.min(Math.max((scrolled / height) * 100, 0), 100);
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }

  // 12. BOTÓN "VOLVER ARRIBA"
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
