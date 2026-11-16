import type { TextStyle } from 'react-native';

/** Nomi dei font caricati in app/_layout.tsx (Inter). */
export const fontFamily = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semibold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
} as const;

type Variant = Pick<TextStyle, 'fontFamily' | 'fontSize' | 'lineHeight' | 'letterSpacing'>;

export const typography = {
  display: { fontFamily: fontFamily.bold, fontSize: 32, lineHeight: 38, letterSpacing: -0.5 },
  title: { fontFamily: fontFamily.bold, fontSize: 24, lineHeight: 30, letterSpacing: -0.3 },
  heading: { fontFamily: fontFamily.semibold, fontSize: 18, lineHeight: 24 },
  body: { fontFamily: fontFamily.regular, fontSize: 16, lineHeight: 24 },
  bodyStrong: { fontFamily: fontFamily.semibold, fontSize: 16, lineHeight: 24 },
  label: { fontFamily: fontFamily.medium, fontSize: 14, lineHeight: 20 },
  caption: { fontFamily: fontFamily.regular, fontSize: 13, lineHeight: 18 },
} as const satisfies Record<string, Variant>;

export type TypographyVariant = keyof typeof typography;

/** Limite all'ingrandimento del testo di sistema, per non rompere i layout. */
export const maxFontScale = 1.6;
