import * as SecureStore from 'expo-secure-store';

/**
 * Archivio sicuro (Keychain iOS / Keystore Android) per la sessione di Supabase.
 * SecureStore accetta valori piccoli, quindi i valori lunghi vengono divisi in pezzi.
 */
const CHUNK_SIZE = 1800;
const countKey = (key: string) => `${key}.chunks`;
const chunkKey = (key: string, index: number) => `${key}.${index}`;

async function removeItem(key: string): Promise<void> {
  const count = Number((await SecureStore.getItemAsync(countKey(key))) ?? '0');
  await Promise.all(
    Array.from({ length: count }, (_, i) => SecureStore.deleteItemAsync(chunkKey(key, i))),
  );
  await SecureStore.deleteItemAsync(countKey(key));
}

async function setItem(key: string, value: string): Promise<void> {
  await removeItem(key);
  const chunks: string[] = [];
  for (let i = 0; i < value.length; i += CHUNK_SIZE) {
    chunks.push(value.slice(i, i + CHUNK_SIZE));
  }
  await Promise.all(chunks.map((chunk, i) => SecureStore.setItemAsync(chunkKey(key, i), chunk)));
  await SecureStore.setItemAsync(countKey(key), String(chunks.length));
}

async function getItem(key: string): Promise<string | null> {
  const countValue = await SecureStore.getItemAsync(countKey(key));
  if (countValue === null) return null;
  const chunks = await Promise.all(
    Array.from({ length: Number(countValue) }, (_, i) => SecureStore.getItemAsync(chunkKey(key, i))),
  );
  if (chunks.some((chunk) => chunk === null)) return null;
  return chunks.join('');
}

export const secureStorage = { getItem, setItem, removeItem };
