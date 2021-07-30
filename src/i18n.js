import * as RNLocalize from 'react-native-localize';
import i18n from 'i18next';

import en from './translations/en.json';
import fr from './translations/fr.json';
import de from './translations/de.json';
import vi from './translations/vi.json';

const locales = RNLocalize.getLocales();

console.log('locales', locales);

export default i18n.init({
  // debug: true,
  lng: locales && locales.length > 0 ? locales[0].languageCode : 'en',
  fallbackLng: 'en',
  resources: {en, fr, de, vi},
});
