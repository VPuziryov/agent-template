function applyTranslations(language) {

  if (!window.translations || !window.translations[language]) {
    return;
  }

  const dictionary = window.translations[language];

  document.querySelectorAll('[data-i18n]').forEach((element) => {

    const key = element.getAttribute('data-i18n');

    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }

  });

}