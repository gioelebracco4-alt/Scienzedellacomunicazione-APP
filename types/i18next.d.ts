import 'i18next';

import type it from '@/locales/it.json';

/** Rende le chiavi di traduzione tipizzate: una chiave sbagliata è un errore di TypeScript. */
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: { translation: typeof it };
  }
}
