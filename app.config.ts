import type { ExpoConfig } from 'expo/config';

import { APP_BUNDLE_ID, APP_NAME, APP_SCHEME, APP_SLUG } from './lib/config.ts';
import { colors } from './theme/colors.ts';

const config: ExpoConfig = {
  name: APP_NAME,
  slug: APP_SLUG,
  scheme: APP_SCHEME,
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  ios: {
    bundleIdentifier: APP_BUNDLE_ID,
    supportsTablet: false,
  },
  android: {
    package: APP_BUNDLE_ID,
    adaptiveIcon: {
      backgroundColor: colors.background,
      foregroundImage: './assets/android-icon-foreground.png',
      backgroundImage: './assets/android-icon-background.png',
      monochromeImage: './assets/android-icon-monochrome.png',
    },
  },
  plugins: [
    'expo-router',
    'expo-localization',
    'expo-secure-store',
    'expo-font',
    [
      'expo-splash-screen',
      {
        image: './assets/splash-icon.png',
        imageWidth: 160,
        backgroundColor: colors.background,
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
};

export default config;
