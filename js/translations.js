/** 
 * =========================================================================
 * FÉ Y RAZÓN — SISTEMA DE INTERNACIONALIZACIÓN (i18n)
 * Gestiona el motor de traducción, persistencia y actualización del DOM.
 * =========================================================================
 */

// 1. DICCIONARIOS: SE CARGAN DE A UNO, CUANDO HACEN FALTA
// Antes este objeto se armaba con los doce diccionarios ya presentes, y las doce
// páginas cargaban los doce archivos: 816 KB de JavaScript para usar uno solo.
// Y como cada entrada nombraba una global, bastaba con que UN archivo no llegara
// para que saltara un ReferenceError y se cayera toda la traducción del sitio.
// Ahora arranca vacío y se llena bajo demanda, un idioma por visitante.
const translations = {};

let currentLang = 'es'; // Estado global del idioma

// 2. METADATOS DE UI PARA IDIOMAS
// Metadatos para el selector de idiomas: etiqueta corta del botón, bandera y
// nombre del idioma EN SU PROPIA LENGUA. De acá sale el desplegable entero
// (ver construirSelectorDeIdiomas), así que agregar un idioma número trece se
// hace en este único lugar y no en las trece páginas.
// Los nombres van en su propio idioma a propósito: no se traducen.
const langMeta = {
  es: { label: 'ES', name: 'Español',   flag: 'Recursos/Im%C3%A1genes/spain-flag-png-large.webp' },
  en: { label: 'EN', name: 'English',   flag: 'Recursos/Im%C3%A1genes/united-states-of-america-flag-png-large.webp' },
  ja: { label: 'JA', name: '日本語',      flag: 'Recursos/Im%C3%A1genes/japan-flag-png-large.webp' },
  tl: { label: 'TL', name: 'Filipino',  flag: 'Recursos/Im%C3%A1genes/philippines-flag-png-large.webp' },
  da: { label: 'DA', name: 'Dansk',     flag: 'Recursos/Im%C3%A1genes/denmark-flag-png-large.webp' },
  la: { label: 'LA', name: 'Latina',    flag: 'Recursos/Im%C3%A1genes/vatican-city-flag-png-large.webp' },
  fr: { label: 'FR', name: 'Français',  flag: 'Recursos/Im%C3%A1genes/france-flag.svg' },
  pt: { label: 'PT', name: 'Português', flag: 'Recursos/Im%C3%A1genes/brazil-flag.svg' },
  sw: { label: 'SW', name: 'Kiswahili', flag: 'Recursos/Im%C3%A1genes/tz-flag.svg' },
  it: { label: 'IT', name: 'Italiano',  flag: 'Recursos/Im%C3%A1genes/it-flag.svg' },
  ln: { label: 'LN', name: 'Lingala',   flag: 'Recursos/Im%C3%A1genes/cd-flag.svg' },
  ig: { label: 'IG', name: 'Igbo',      flag: 'Recursos/Im%C3%A1genes/ng-flag.svg' },
};

// Los doce idiomas que existen. Sale del propio langMeta para que no queden dos
// listas que se puedan desincronizar. OJO: la validación del idioma pedido va
// contra ESTA lista, nunca contra `translations`, que ahora arranca vacío.
const IDIOMAS = Object.keys(langMeta);

// 2b. CARGADOR DE DICCIONARIOS BAJO DEMANDA
/**
 * Versión de los archivos (?v=N). Se lee del <script> de este mismo archivo, así
 * el número vive en un solo lugar —el HTML— y el diccionario que se inyecta
 * queda siempre en la misma versión que el resto del JavaScript.
 */
const ASSET_V = (function () {
  try {
    const src = document.currentScript && document.currentScript.src;
    const v = src && new URL(src, location.href).searchParams.get('v');
    return v ? '?v=' + v : '';
  } catch (_) {
    return '';
  }
})();

// Promesas en vuelo, una por idioma: si dos caminos piden el mismo diccionario
// a la vez, se descarga una sola vez.
const cargasEnCurso = {};

/**
 * Descarga el diccionario de un idioma y lo deja en `translations[lang]`.
 * @param {string} lang - Código de idioma
 * @returns {Promise<Object>} El diccionario ya disponible
 */
function cargarIdioma(lang) {
  if (translations[lang]) return Promise.resolve(translations[lang]);
  if (cargasEnCurso[lang]) return cargasEnCurso[lang];

  const promesa = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'js/translations-' + lang + '.js' + ASSET_V;
    script.async = false;
    script.onload = () => {
      // Cada diccionario se publica en window al final de su archivo.
      const dic = window['translations' + lang.toUpperCase()];
      if (!dic) {
        reject(new Error('translations-' + lang + '.js cargó pero no dejó el diccionario'));
        return;
      }
      translations[lang] = dic;
      resolve(dic);
    };
    script.onerror = () => reject(new Error('no se pudo cargar translations-' + lang + '.js'));
    (document.head || document.documentElement).appendChild(script);
  });

  // Si falla, se olvida la promesa rechazada para poder reintentar más adelante
  // (por ejemplo si el visitante vuelve a elegir ese idioma).
  cargasEnCurso[lang] = promesa;
  promesa.catch(() => { delete cargasEnCurso[lang]; });
  return promesa;
}

/**
 * Idioma que corresponde mostrar, por orden de prioridad:
 *   1. ?lang= en la URL      (elección explícita, y la más fuerte)
 *   2. preferencia guardada  (lo que el visitante eligió antes)
 *   3. español
 *
 * El idioma del NAVEGADOR no se mira, y es a propósito: la raíz del sitio tiene
 * que quedar en español —para el visitante y para el buscador—, y quien hable
 * otro idioma lo cambia con el selector. Se llegó a implementar la detección y
 * se revirtió por decisión de Gabriel; el porqué está en la bitácora.
 *
 * Devuelve siempre uno de los doce.
 */
function idiomaPedido() {
  let pedido = null;
  try { pedido = new URLSearchParams(window.location.search).get('lang'); } catch (_) {}
  if (!pedido) {
    try { pedido = localStorage.getItem('language'); } catch (_) {}
  }
  return IDIOMAS.indexOf(pedido) !== -1 ? pedido : 'es';
}

// La descarga arranca acá, al ejecutarse este archivo, sin esperar a
// DOMContentLoaded: es lo que evita que el visitante llegue a ver un instante de
// español antes de que aparezca su idioma.
cargarIdioma(idiomaPedido()).catch(() => {});

// Disponible para otros scripts (router.js la usa como red de contención).
window.cargarIdioma = cargarIdioma;

// 2c. EL SELECTOR DE IDIOMAS SE ARMA SOLO
/**
 * Llena el desplegable del selector con los doce idiomas, a partir de langMeta.
 *
 * Antes este bloque estaba escrito a mano en las doce páginas —doce veces doce
 * botones—, con un comentario en el HTML pidiendo acordarse de actualizarlo en
 * todas. El idioma número trece se agrega ahora en langMeta y aparece solo en
 * todas las páginas.
 *
 * El botón que se ve (el "trigger") NO se toca: sigue escrito en el HTML con el
 * idioma inicial, así el selector no desaparece si el JavaScript no llega.
 */
function construirSelectorDeIdiomas() {
  const menu = document.querySelector('#lang-dropdown .lang-dropdown-menu');
  if (!menu || menu.querySelector('.lang-option')) return;

  const trozo = document.createDocumentFragment();
  IDIOMAS.forEach(code => {
    const meta = langMeta[code];
    if (!meta) return;

    const opcion = document.createElement('button');
    opcion.type = 'button';
    opcion.className = 'lang-option';
    opcion.setAttribute('data-lang', code);
    opcion.setAttribute('role', 'option');
    opcion.setAttribute('aria-selected', 'false');

    const bandera = document.createElement('img');
    bandera.src = meta.flag;
    bandera.alt = '';
    bandera.width = 22;
    bandera.height = 15;
    bandera.loading = 'lazy';

    const nombre = document.createElement('span');
    nombre.textContent = meta.name;

    opcion.append(bandera, nombre);
    trozo.appendChild(opcion);
  });

  menu.appendChild(trozo);
}

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

  // Crear etiquetas para cada idioma soportado. Va contra IDIOMAS y no contra
  // `translations`: ahora ahí solo está el idioma cargado, y recorrerlo dejaría
  // una sola etiqueta hreflang en vez de las doce.
  IDIOMAS.forEach(langCode => {
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
 * Cambia el idioma de toda la interfaz: se asegura primero de tener el
 * diccionario y recién entonces lo aplica, de una sola vez. Esperar acá es lo
 * que evita que router.js o main.js lean `translations[currentLang]` cuando
 * todavía no llegó, y también que quede texto a medio traducir en pantalla.
 *
 * @param {string} lang - Código del nuevo idioma
 * @returns {Promise<void>} Resuelve cuando la interfaz ya está en ese idioma
 */
function setLanguage(lang) {
  if (IDIOMAS.indexOf(lang) === -1) lang = 'es';

  return cargarIdioma(lang)
    .then(() => aplicarIdioma(lang))
    .catch(err => {
      console.warn('[i18n] ' + err.message);
      // Si el diccionario pedido no llega, se cae a español: el HTML crudo ya
      // está escrito en español, así que es el único idioma que se ve bien
      // aunque no llegue ningún diccionario. Si el que falla es el español, no
      // hay a dónde caer y se deja la página como vino.
      if (lang === 'es') return;
      return cargarIdioma('es')
        .then(() => aplicarIdioma('es'))
        .catch(() => {});
    });
}

/**
 * Aplica un idioma YA CARGADO a toda la interfaz y persiste la selección.
 * No se llama sola: siempre a través de setLanguage(), que garantiza que el
 * diccionario esté disponible.
 * @param {string} lang - Código del nuevo idioma (es, en, ja, tl)
 */
function aplicarIdioma(lang) {
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
      document.title = t.siteTitle || `${t.logo || 'Fé y Razón'} | Apologética Católica`;
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

  // Imágenes que CAMBIAN con el idioma: hoy, la portada del libro, que está
  // publicado en siete idiomas. Se compara antes de asignar para no disparar
  // una descarga nueva cuando el archivo es el mismo (que es lo que pasa con
  // los idiomas que no tienen edición propia y apuntan todos a la inglesa).
  document.querySelectorAll('[data-i18n-src]').forEach(element => {
    const key = element.getAttribute('data-i18n-src');
    const value = getTranslationValue(lang, key);
    if (value && element.getAttribute('src') !== value) {
      element.setAttribute('src', value);
    }
  });

  // Mostrar/ocultar avisos provisionales según idioma completado
  document.querySelectorAll('[data-complete-for]').forEach(function(el) {
    const completedLangs = el.getAttribute('data-complete-for').split(' ');
    el.style.display = completedLangs.includes(lang) ? 'none' : '';
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

  // Inyectar disclaimer de traducción automática en artículos apologéticos no-español
  injectTranslationDisclaimer(lang);

  // Persistir preferencia y disparar evento para otros scripts (como router.js)
  try { localStorage.setItem('language', lang); } catch (_) {}
  document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
}

// 4. DISCLAIMER DE TRADUCCIÓN AUTOMÁTICA
/**
 * Inyecta el aviso de traducción en artículos apologéticos para idiomas no-español.
 * No aplica a recursos-recomendados ni sobre-este-sitio.
 */
function injectTranslationDisclaimer(lang) {
  if (lang === 'es') return;
  var articleBody = document.querySelector('[data-i18n$=".article"]');
  if (!articleBody) return;
  var key = articleBody.getAttribute('data-i18n');
  // Páginas que NO son artículos apologéticos: no llevan el aviso. La de
  // privacidad entra acá por lo mismo que las otras dos, y además porque el
  // aviso está redactado para artículos («este artículo fue traducido…») y en
  // un texto legal suena a otra cosa.
  var nonApologetic = [
    'topicPages.recursos-recomendados.article',
    'topicPages.sobre-este-sitio.article',
    'topicPages.privacidad.article'
  ];
  if (nonApologetic.indexOf(key) !== -1) return;
  var t = translations[lang];
  if (!t || !t.disclaimerHTML) return;
  var existing = articleBody.querySelector('.translation-disclaimer');
  if (existing) existing.remove();
  var div = document.createElement('div');
  div.className = 'translation-disclaimer';
  div.innerHTML = t.disclaimerHTML;
  articleBody.prepend(div);
}

// 5. INICIALIZACIÓN Y EVENTOS DE UI
document.addEventListener('DOMContentLoaded', () => {
  // El orden de prioridad (?lang= → localStorage → español) y el descarte de un
  // idioma inválido viven en idiomaPedido(), que es la misma función que usó el
  // arranque para empezar a bajar el diccionario. Acá no se puede validar contra
  // `translations`, como se hacía antes: arranca vacío y descartaría todo.
  // Primero se arma el desplegable, después se aplica el idioma: así
  // aplicarIdioma() encuentra las opciones para marcar la activa.
  construirSelectorDeIdiomas();

  setLanguage(idiomaPedido());

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

    // Un solo manejador para todo el menú, por DELEGACIÓN: las opciones las crea
    // construirSelectorDeIdiomas() y engancharle un listener a cada una obligaría
    // a que el orden nunca cambie. Así funcionan aunque se creen después.
    // El stopPropagation evita que el clic llegue al document y cierre el menú
    // antes de tiempo.
    menu.addEventListener('click', e => {
      e.stopPropagation();
      const opcion = e.target.closest('.lang-option');
      if (!opcion) return;
      const lang = opcion.getAttribute('data-lang');
      if (!lang) return;
      setLanguage(lang);
      dropdown.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });
  }
});
