import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

function getBrowserLocale() {
  const navigatorLocale = navigator.language || navigator.userLanguage;
  if (!navigatorLocale) return 'en';
  
  if (navigatorLocale.toLowerCase().startsWith('es')) {
    return 'es';
  }
  return 'en';
}

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})

export default i18n
