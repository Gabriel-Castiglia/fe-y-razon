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
  da: translationsDA,
  la: translationsLA,
  fr: translationsFR,
  pt: translationsPT,
  sw: translationsSW,
  it: translationsIT,
  ln: translationsLN,
  ig: translationsIG
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
  la: { label: 'LA', flag: 'Recursos/Im%C3%A1genes/vatican-city-flag-png-large.png.jpeg' },
  fr: { label: 'FR', flag: 'Recursos/Im%C3%A1genes/france-flag.svg' },
  pt: { label: 'PT', flag: 'Recursos/Im%C3%A1genes/brazil-flag.svg' },
  sw: { label: 'SW', flag: 'Recursos/Im%C3%A1genes/tz-flag.svg' },
  it: { label: 'IT', flag: 'Recursos/Im%C3%A1genes/it-flag.svg' },
  ln: { label: 'LN', flag: 'Recursos/Im%C3%A1genes/cd-flag.svg' },
  ig: { label: 'IG', flag: 'Recursos/Im%C3%A1genes/ng-flag.svg' },
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
 * Genera y actualiza las etiquetas <link rel="alternate" hreflang="..."> para SEO.
 * Esto le indica a los motores de búsqueda todas las versiones de idioma disponibles.
 */
function updateHreflangTags() {
  // Limpiar etiquetas hreflang previas que hayamos insertado dinámicamente
  document.querySelectorAll('link[data-hreflang]').forEach(el => el.remove());

  const url = new URL(window.location.href);

  // Crear etiquetas para cada idioma soportado
  Object.keys(translations).forEach(langCode => {
    url.searchParams.set('lang', langCode);
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = langCode;
    link.href = url.toString();
    link.setAttribute('data-hreflang', 'true');
    document.head.appendChild(link);
  });

  // Añadir la etiqueta obligatoria x-default (apuntando al español por defecto)
  url.searchParams.set('lang', 'es');
  const defaultLink = document.createElement('link');
  defaultLink.rel = 'alternate';
  defaultLink.hreflang = 'x-default';
  defaultLink.href = url.toString();
  defaultLink.setAttribute('data-hreflang', 'true');
  document.head.appendChild(defaultLink);
}

/**
 * Aplica un nuevo idioma a toda la interfaz y persiste la selección.
 * @param {string} lang - Código del nuevo idioma (es, en, ja, tl)
 */
function setLanguage(lang) {
  currentLang = lang;

  // 1. Actualizar el atributo lang del HTML para SEO y Accesibilidad
  document.documentElement.lang = lang;

  // 2. Actualizar el parámetro ?lang= en la barra de direcciones sin recargar la página
  const url = new URL(window.location.href);
  if (url.searchParams.get('lang') !== lang) {
    url.searchParams.set('lang', lang);
    window.history.replaceState(window.history.state, '', url.toString());
  }

  // 3. Actualizar las etiquetas hreflang invisibles para rastreadores (Googlebots)
  updateHreflangTags();

  // 4. Actualizar etiquetas Meta de SEO (Title y Description) en la página principal
  // Nota: router.js se encarga de actualizar document.title al abrir los artículos.
  if (typeof currentSlug === 'undefined' || !currentSlug) {
    const t = translations[lang];
    if (t) {
      document.title = `${t.logo || 'Fé y Razón'} | Apologética Católica`;
      const metaDesc = document.querySelector('meta[name="description"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      
      // Se limpian posibles etiquetas HTML (como <em>) antes de inyectarlo en el meta
      if (metaDesc && t.hero && t.hero.desc) metaDesc.setAttribute('content', t.hero.desc.replace(/<[^>]*>?/gm, ''));
      if (ogDesc && t.topics && t.topics.subtitle) ogDesc.setAttribute('content', t.topics.subtitle.replace(/&nbsp;/g, ' '));
      if (twDesc && t.topics && t.topics.subtitle) twDesc.setAttribute('content', t.topics.subtitle.replace(/&nbsp;/g, ' '));
      
      if (ogTitle) ogTitle.setAttribute('content', document.title);
      if (twTitle) twTitle.setAttribute('content', document.title);
    }
  }

  // 5. Actualizar Canonical URL para evitar contenido duplicado en SEO
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  const canonicalUrl = new URL(window.location.href);
  if (lang === 'es') {
    canonicalUrl.searchParams.delete('lang'); // Español es la raíz sin parámetros
  } else {
    canonicalUrl.searchParams.set('lang', lang);
  }
  canonical.href = canonicalUrl.toString().split('#')[0]; // Remover anclas (hashes)

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
      element.setAttribute('aria-label', value);
    }
  });

  // Traducir atributos alt de imágenes para SEO en Google Images
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    const key = element.getAttribute('data-i18n-alt');
    const value = getTranslationValue(lang, key);
    if (value) {
      element.alt = value;
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
  try { localStorage.setItem('language', lang); } catch (_) {}
  document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
}

// 4. INICIALIZACIÓN Y EVENTOS DE UI
document.addEventListener('DOMContentLoaded', () => {
  // 1º Prioridad: Parámetro en la URL (ej: ?lang=fr)
  // 2º Prioridad: Preferencia guardada del usuario en localStorage
  // 3º Prioridad: Español por defecto
  const params = new URLSearchParams(window.location.search);
  let savedLang = params.get('lang');
  
  if (!savedLang) {
    try { savedLang = localStorage.getItem('language'); } catch (_) {}
  }
  
  // Fallback de seguridad: si el idioma es inválido, vuelve al español
  if (!translations[savedLang]) {
    savedLang = 'es';
  }
  
  setLanguage(savedLang);

  const dropdown = document.getElementById('lang-dropdown');
  const trigger  = document.getElementById('lang-dropdown-trigger');
  const menu = dropdown && dropdown.querySelector('.lang-dropdown-menu');

  // Control del despliegue del menú de idiomas
  if (dropdown && trigger && menu) {
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
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
