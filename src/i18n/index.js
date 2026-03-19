import { createI18n } from 'vue-i18n'
import ka from './locales/ka.json'
import en from './locales/en.json'
import ru from './locales/ru.json'

const savedLocale = localStorage.getItem('locale') || 'ka'

export default createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'ka',
  messages: { ka, en, ru },
})
