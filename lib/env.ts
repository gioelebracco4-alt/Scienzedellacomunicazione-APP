import { z } from 'zod';

/**
 * Variabili pubbliche lette dal file .env (prefisso EXPO_PUBLIC_).
 * Qui vanno SOLO chiavi pubbliche: mai chiavi segrete.
 */
const envSchema = z.object({
  supabaseUrl: z.url(),
  supabasePublishableKey: z.string().min(20),
});

export type Env = z.infer<typeof envSchema>;

let cached: Env | undefined;

export function getEnv(): Env {
  if (cached) return cached;
  const parsed = envSchema.safeParse({
    // Le variabili vanno lette per esteso, così Expo le inserisce nell'app.
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
    supabasePublishableKey: process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  });
  if (!parsed.success) {
    throw new Error(
      'Configurazione mancante: copia .env.example in .env e inserisci URL e chiave pubblica di Supabase.',
    );
  }
  cached = parsed.data;
  return cached;
}
