const translations = {
  es: translationsES,
  en: translationsEN,
  ja: translationsJA,
  tl: translationsTL
};

let currentLang = 'es';

const langMeta = {
  es: { label: 'ES', flag: 'Recursos/Im%C3%A1genes/spain-flag-png-large.png.jpeg' },
  en: { label: 'EN', flag: 'Recursos/Im%C3%A1genes/united-states-of-america-flag-png-large.png.jpeg' },
  ja: { label: 'JA', flag: 'Recursos/Im%C3%A1genes/japan-flag-png-large.png.jpeg' },
  tl: { label: 'TL', flag: 'Recursos/Im%C3%A1genes/philippines-flag-png-large.png.jpeg' },
};

function getTranslationValue(lang, key) {
  const keys = key.split('.');
  let value = translations[lang];
  keys.forEach(k => {
    value = value && value[k];
  });
  return value;
}

function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getTranslationValue(lang, key);
    if (value) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const value = getTranslationValue(lang, key);
    if (value) {
      element.placeholder = value;
    }
  });

  // Update dropdown trigger
  const trigger   = document.getElementById('lang-dropdown-trigger');
  const flagImg   = trigger && trigger.querySelector('.lang-flag-img');
  const labelEl   = trigger && trigger.querySelector('.lang-trigger-label');
  if (flagImg && langMeta[lang]) flagImg.src = langMeta[lang].flag;
  if (labelEl && langMeta[lang]) labelEl.textContent = langMeta[lang].label;

  // Update active option
  document.querySelectorAll('.lang-option').forEach(opt => {
    const active = opt.getAttribute('data-lang') === lang;
    opt.classList.toggle('active', active);
    opt.setAttribute('aria-selected', String(active));
  });

  localStorage.setItem('language', lang);
  document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'es';
  setLanguage(savedLang);

  const dropdown = document.getElementById('lang-dropdown');
  const trigger  = document.getElementById('lang-dropdown-trigger');

  const menu = dropdown && dropdown.querySelector('.lang-dropdown-menu');

  function positionMenu() {
    if (!menu || !trigger) return;
    const rect = trigger.getBoundingClientRect();
    menu.style.top  = (rect.bottom + 8) + 'px';
    menu.style.right = (window.innerWidth - rect.right) + 'px';
  }

  if (dropdown && trigger && menu) {
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) positionMenu();
    });

    // Close on outside click
    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });

    // Prevent menu clicks from closing immediately
    menu.addEventListener('click', e => e.stopPropagation());
  }

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
