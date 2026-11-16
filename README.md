# APP_NAME

App di studio per gli studenti di Scienze della Comunicazione (L-20 R) dell'Università di Palermo.
Il nome definitivo non è deciso: si cambia solo in `lib/config.ts`.

## Requisiti

- macOS con **Xcode** (per il simulatore iPhone)
- **Node.js** LTS (`node -v` per controllare)

## Primo avvio

```bash
npm install                # installa le librerie (solo la prima volta o dopo un aggiornamento)
cp .env.example .env       # poi apri .env e inserisci URL e chiave pubblica di Supabase
npm run ios                # compila l'app e la apre nel simulatore iPhone
```

La prima compilazione richiede diversi minuti. Le volte successive basta:

```bash
npm start                  # avvia Metro; l'app già installata nel simulatore si ricollega
```

Ricompila con `npm run ios` solo quando si aggiunge una libreria con codice nativo.

## Comandi utili

| Comando | A cosa serve |
|---|---|
| `npm run typecheck` | Controlla gli errori di TypeScript |
| `npx expo install <pacchetto>` | Aggiunge una libreria nella versione compatibile con Expo |
| `npx expo-doctor` | Controlla la configurazione del progetto |

## Struttura

```
app/              schermate (Expo Router): (tabs) = Home, Esplora, Allenamento, Chat, Profilo
features/         logica per area (library, marketplace, training, ...)
components/ui/    componenti riutilizzabili (Button, Card, Text, Screen, ...)
lib/              config, Supabase, i18n, archivio sicuro
theme/            colori, tipografia, spaziature: nessun valore scritto a mano altrove
locales/          traduzioni it/en: nessun testo scritto a mano nei componenti
supabase/         migration del database ed Edge Functions
```

## Sicurezza

- Nel file `.env` vanno **solo chiavi pubbliche** (prefisso `EXPO_PUBLIC_`). Il file non va su GitHub.
- Chiavi segrete (Stripe, Anthropic, Resend, service_role) solo nelle Edge Functions di Supabase.
