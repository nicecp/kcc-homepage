import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// load language templates
const templates = require.context('../locales/', true, /\.json$/)
let lngTemplates: { [key: string]: { translation: string } } = {}
templates.keys().forEach((lng: string) => {
  const lngName = lng.slice(2, lng.lastIndexOf('.'))
  lngTemplates[lngName] = {
    translation: templates(lng),
  }
})

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      ...lngTemplates,
    } as any,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
