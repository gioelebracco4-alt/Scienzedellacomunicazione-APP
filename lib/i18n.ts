import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/locales/en.json';
import it from '@/locales/it.json';

export const SUPPORTED_LANGUAGES = ['it', 'en'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = 'it';

export const resources = {
  it: { translation: it },
  en: { translation: en },
} as const;

function isSupported(code: string | null | undefined): code is Language {
  return SUPPORTED_LANGUAGES.some((lang) => lang === code);
}

/** Lingua del telefono se supportata, altrimenti italiano. */
function detectLanguage(): Language {
  const deviceCode = getLocales()[0]?.languageCode;
  return isSupported(deviceCode) ? deviceCode : DEFAULT_LANGUAGE;
}

void i18n.use(initReactI18next).init({
  resources,
  lng: detectLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
});

export default i18n;
