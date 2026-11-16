import { createClient } from '@supabase/supabase-js';
import { AppState } from 'react-native';

import { getEnv } from './env';
import { secureStorage } from './secureStorage';

const { supabaseUrl, supabasePublishableKey } = getEnv();

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: secureStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Rinnova la sessione solo quando l'app è in primo piano (risparmia batteria e rete).
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    void supabase.auth.startAutoRefresh();
  } else {
    void supabase.auth.stopAutoRefresh();
  }
});
