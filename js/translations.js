/** 
 * =========================================================================
 * FÉ Y RAZÓN — SISTEMA DE INTERNACIONALIZACIÓN (i18n)
 * Gestiona el motor de traducción, persistencia y actualización del DOM.
 * =========================================================================
 */

// 1. CONFIGURACIÓN DE DICCIONARIOS
const translations = {
  es: translationsES,
  en: translationsEN,
  ja: translationsJA,
  tl: translationsTL,
  da: translationsDA
};

let currentLang = 'es'; // Estado global del idioma

// 2. METADATOS DE UI PARA IDIOMAS
// Metadatos para el selector de idiomas (Banderas y etiquetas)
const langMeta = {
  es: { label: 'ES', flag: 'Recursos/Im%C3%A1genes/spain-flag-png-large.png.jpeg' },
  en: { label: 'EN', flag: 'Recursos/Im%C3%A1genes/united-states-of-america-flag-png-large.png.jpeg' },
  ja: { label: 'JA', flag: 'Recursos/Im%C3%A1genes/japan-flag-png-large.png.jpeg' },
  tl: { label: 'TL', flag: 'Recursos/Im%C3%A1genes/philippines-flag-png-large.png.jpeg' },
  da: { label: 'DA', flag: 'Recursos/Im%C3%A1genes/denmark-flag-png-large.png.jpeg' },
};

// 3. NÚCLEO LÓGICO DE TRADUCCIÓN
/**
 * Resuelve claves anidadas (ej: "nav.home") dentro de los objetos de traducción.
 * @param {string} lang - Código de idioma
 * @param {string} key - Clave en formato punto (ej: "hero.title")
 * @returns {*} El valor traducido o undefined
 */
function getTranslationValue(lang, key) {
  const keys = key.split('.');
  let value = translations[lang];
  keys.forEach(k => {
    value = value && value[k];
  });
  return value;
}

/**
 * Aplica un nuevo idioma a toda la interfaz y persiste la selección.
 * @param {string} lang - Código del nuevo idioma (es, en, ja, tl)
 */
function setLanguage(lang) {
  currentLang = lang;

  // Traducir elementos con contenido HTML
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getTranslationValue(lang, key);
    if (value) {
      element.innerHTML = value;
    }
  });

  // Traducir placeholders de formularios
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const value = getTranslationValue(lang, key);
    if (value) {
      element.placeholder = value;
    }
  });

  // Actualizar el botón visual del selector (Trigger)
  const trigger   = document.getElementById('lang-dropdown-trigger');
  const flagImg   = trigger && trigger.querySelector('.lang-flag-img');
  const labelEl   = trigger && trigger.querySelector('.lang-trigger-label');
  if (flagImg && langMeta[lang]) flagImg.src = langMeta[lang].flag;
  if (labelEl && langMeta[lang]) labelEl.textContent = langMeta[lang].label;

  // Marcar la opción activa en el menú desplegable
  document.querySelectorAll('.lang-option').forEach(opt => {
    const active = opt.getAttribute('data-lang') === lang;
    opt.classList.toggle('active', active);
    opt.setAttribute('aria-selected', String(active));
  });

  // Persistir preferencia y disparar evento para otros scripts (como router.js)
  localStorage.setItem('language', lang);
  document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
}

// 4. INICIALIZACIÓN Y EVENTOS DE UI
document.addEventListener('DOMContentLoaded', () => {
  // Recuperar preferencia del usuario o usar español por defecto
  const savedLang = localStorage.getItem('language') || 'es';
  setLanguage(savedLang);

  const dropdown = document.getElementById('lang-dropdown');
  const trigger  = document.getElementById('lang-dropdown-trigger');
  const menu = dropdown && dropdown.querySelector('.lang-dropdown-menu');

  /**
   * Ajusta la posición del menú flotante respecto al botón disparador.
   */
  function positionMenu() {
    if (!menu || !trigger) return;
    const rect = trigger.getBoundingClientRect();
    menu.style.top  = (rect.bottom + 8) + 'px';
    menu.style.right = (window.innerWidth - rect.right) + 'px';
  }

  // Control del despliegue del menú de idiomas
  if (dropdown && trigger && menu) {
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) positionMenu();
    });

    // Cierre automático al hacer clic en cualquier otra parte
    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });

    // Prevenir cierre accidental al interactuar con el menú
    menu.addEventListener('click', e => e.stopPropagation());
  }

  // Asignación de eventos a cada opción del selector
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) {
        setLanguage(lang);
        if (dropdown) dropdown.classList.remove('open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
