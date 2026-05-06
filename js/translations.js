const translations = {
  es: translationsES,
  en: translationsEN,
  ja: translationsJA
};

let currentLang = 'es';

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

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('language', lang);
  document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'es';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
