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

// 1b. ARRANQUE DE LOS VIDEOS DE FONDO
//
// Todos los videos del sitio son de fondo, mudos y en bucle, y los arranca el
// JavaScript: unos empiezan con preload="none" para no descargarlos en cada
// visita, y los del crossfade se van encadenando entre sí.
//
// Safari en el iPhone rechaza un play() pedido cuando el archivo todavía no
// tiene datos. El rechazo llega como una promesa fallida, fácil de tragarse con
// un catch vacío, y el video se queda congelado en el póster. Peor: como nunca
// empieza, tampoco dispara el 'ended' que encadenaría el siguiente, así que la
// sección entera se queda quieta. En Chrome no se notaba porque es más
// permisivo con el arranque automático.
//
// Estas funciones concentran el arranque y la parada de todos los videos del
// sitio, acá y en router.js. reproducir() pide la carga, marca autoplay —que es
// lo que Safari respeta de verdad, más que un play() a mano— y reintenta cada
// vez que llegan datos, mientras ese video siga siendo el que toca mostrar.
window.FYRVideo = (function () {
  const gestionados = [];

  function reproducir(video) {
    if (!video) return;
    video.dataset.fyrCorriendo = '1';
    video.preload = 'auto';
    video.autoplay = true;
    // load() solo si el navegador todavía no eligió una fuente: con un video que
    // ya está cargando, volver a llamarlo reiniciaría la descarga.
    if (video.readyState === 0 && !video.currentSrc) video.load();
    video.play().catch(() => {});

    if (video.dataset.fyrReintento) return;
    video.dataset.fyrReintento = '1';
    gestionados.push(video);

    // Solo se insiste con el video que debe estar sonando: los que salen del
    // crossfade quedan marcados y no se resucitan solos.
    const reintentar = () => {
      if (video.dataset.fyrCorriendo === '1' && video.paused) video.play().catch(() => {});
    };
    ['loadeddata', 'canplay', 'canplaythrough'].forEach(ev => video.addEventListener(ev, reintentar));
  }

  function detener(video) {
    if (!video) return;
    video.dataset.fyrCorriendo = '0';
    // Se le saca el autoplay además de pausarlo: los videos del overlay se
    // reutilizan con otras fuentes al abrir el artículo siguiente, y con el
    // autoplay puesto arrancarían los tres a la vez en cuanto tuvieran datos.
    video.autoplay = false;
    video.pause();
  }

  function reanudar() {
    gestionados.forEach(v => {
      if (v.dataset.fyrCorriendo === '1' && v.paused) v.play().catch(() => {});
    });
  }

  // Último recurso: con el ahorro de energía de iOS activado, el sistema
  // bloquea todo arranque automático y solo lo permite tras un gesto.
  ['touchstart', 'click'].forEach(ev =>
    document.addEventListener(ev, reanudar, { passive: true })
  );

  // iOS también congela los videos al volver de segundo plano.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') reanudar();
  });

  return { reproducir, detener, reanudar };
})();

document.addEventListener('DOMContentLoaded', function () {

  const header = document.getElementById('header');

  // 2. MENÚ HAMBURGUESA (Móvil)
  const hamburger = document.getElementById('hamburger');
  const navList   = document.querySelector('.nav-links');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('no-scroll', isOpen);
      header.classList.toggle('nav-open', isOpen);
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
        header.classList.remove('nav-open');
      });
    });
  }

  // 3 & 4. CICLO DE VIDEO (Hero y Contacto)
  // VideoManager encapsula el crossfade infinito reutilizable para cualquier grupo de videos.

  function VideoManager(selector) {
    const videos = Array.from(document.querySelectorAll(selector));
    if (!videos.length) return;

    let currentIndex = 0;
    let isTransitioning = false;
    let vigilante = null;
    const TRANSITION_MS = 1200; // Debe coincidir con el transition de CSS
    const ESPERA_ARRANQUE = 8000; // margen para que un video descargue y arranque

    // La rotación vivía solo de los eventos 'timeupdate' y 'ended'. Si a un video
    // le tocaba el turno y no llegaba a reproducirse —con preload="none" hay que
    // descargarlo justo en ese momento— no disparaba ninguno de los dos, y la
    // cadena entera se quedaba clavada ahí. Con dos videos casi no se notaba; con
    // cinco, tarde o temprano uno falla y la sección se para.
    //
    // Este vigilante se arma en cada cambio: si el video que debería estar
    // corriendo no ha avanzado ni un fotograma pasado el margen, se salta al
    // siguiente en vez de dejar el hero congelado.
    function vigilar() {
      clearTimeout(vigilante);
      const actual = videos[currentIndex];
      const marca = actual.currentTime;
      vigilante = setTimeout(() => {
        // Salvavidas: si por lo que sea el que toca perdió la clase, devolvérsela.
        // Sin esto el hero se queda con el fondo a la vista y ya no vuelve.
        if (!actual.classList.contains('active')) actual.classList.add('active');
        const atascado = actual.paused || actual.currentTime === marca || actual.error;
        if (atascado && videos.length > 1) {
          isTransitioning = false; // por si quedó a medias
          advance();
        }
      }, ESPERA_ARRANQUE);
    }

    // Tener listo el siguiente evita el parón: mientras se ve uno, el que viene
    // ya se está descargando, así que al llegarle el turno arranca en el acto.
    function precargarSiguiente() {
      if (videos.length < 2) return;
      const siguiente = videos[(currentIndex + 1) % videos.length];
      if (siguiente.preload !== 'auto') siguiente.preload = 'auto';
      if (siguiente.readyState === 0 && !siguiente.currentSrc) siguiente.load();
    }

    function show(index) {
      const prevVideo = videos[currentIndex];
      const nextVideo = videos[index];
      if (prevVideo === nextVideo) {
        // Un solo video: no hay a dónde pasar, pero hay que soltar el cerrojo o
        // la rotación no vuelve a moverse nunca.
        isTransitioning = false;
        return;
      }

      currentIndex = index;
      nextVideo.currentTime = 0;
      window.FYRVideo.reproducir(nextVideo);
      nextVideo.classList.add('active');
      vigilar();
      precargarSiguiente();

      // Se apaga TODO lo que no sea el video actual en este momento, en vez de
      // apagar la referencia guardada hace 1,2 s. Al cerrar la vuelta esa
      // referencia podía ser justo el video que acababa de volver a tocar, se le
      // quitaba la clase y el hero se quedaba en el fondo marrón sin retomar.
      // Así siempre queda exactamente uno encendido: el que corresponde.
      setTimeout(() => {
        const actual = videos[currentIndex];
        videos.forEach(v => {
          if (v === actual) return;
          v.classList.remove('active');
          window.FYRVideo.detener(v);
          v.currentTime = 0;
        });
        actual.classList.add('active');
        isTransitioning = false;
      }, TRANSITION_MS);
    }

    function advance() {
      if (isTransitioning) return;
      isTransitioning = true;
      show((currentIndex + 1) % videos.length);
    }

    videos.forEach(video => {
      video.addEventListener('timeupdate', function () {
        if (isTransitioning || !this.duration) return;
        if (this.currentTime >= this.duration - 1.3) advance();
      });
      video.addEventListener('ended', advance);
      // Si un archivo falla del todo, no esperar al vigilante.
      video.addEventListener('error', function () {
        if (videos[currentIndex] === this) {
          isTransitioning = false;
          advance();
        }
      });
    });

    window.FYRVideo.reproducir(videos[0]);
    vigilar();
    precargarSiguiente();
  }

  VideoManager('.hero-video');

  // Lazy-init contact video cuando la sección entra al viewport
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    let contactStarted = false;
    new IntersectionObserver((entries, obs) => {
      if (!entries[0].isIntersecting || contactStarted) return;
      contactStarted = true;
      const first = document.querySelector('.contact-video.active');
      if (first) first.preload = 'auto';
      VideoManager('.contact-video');
      obs.disconnect();
    }, { rootMargin: '300px' }).observe(contactSection);
  }

  // Lazy-init meditación cuando entra al viewport. Este es el único que no
  // forma parte de un crossfade: va solo y en bucle.
  const meditacionVid = document.querySelector('.meditacion-video');
  if (meditacionVid) {
    new IntersectionObserver((entries, obs) => {
      if (!entries[0].isIntersecting) return;
      obs.disconnect();
      window.FYRVideo.reproducir(meditacionVid);
    }, { rootMargin: '300px' }).observe(meditacionVid);
  }

  // De volver de segundo plano se encarga FYRVideo, que sabe cuáles son los
  // videos que tienen que estar corriendo en cada momento.

  // 5. EFECTOS DEL HEADER AL HACER SCROLL
  // Cambia la opacidad y colores del menú según la posición del scroll.

  const hero = document.getElementById('hero');

  // Cambia la apariencia del header (transparente -> sólido) al hacer scroll.
  // Los colores del selector de idioma se dejan al CSS a propósito: cuando se
  // fijaban acá con estilo inline, ganaban a toda regla posterior y el selector
  // quedaba negro sobre negro con el menú móvil abierto.
  function updateHeaderScroll() {
    header.classList.toggle('scrolled', window.scrollY > 50);
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

  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
      progressBar.setAttribute('aria-valuenow', Math.round(pct));
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
