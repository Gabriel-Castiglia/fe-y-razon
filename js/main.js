/* ──────────────────────────────────────────────────────────── */
/* FE Y TRADICIÓN — Animaciones y Comportamiento               */
/* ──────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {
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
});
