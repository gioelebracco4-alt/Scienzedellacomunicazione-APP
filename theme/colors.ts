/**
 * Palette segnaposto: 1 colore principale + 1 accento + grigi.
 * Quando arriverà il brand, si cambia solo questo file.
 */
const palette = {
  indigo700: '#2F3E9E',
  indigo50: '#EEF0FB',
  amber500: '#E8A33D',
  amber50: '#FDF5E8',
  white: '#FFFFFF',
  gray50: '#F7F8FA',
  gray100: '#EFF1F4',
  gray200: '#E3E6EB',
  gray400: '#9AA1AD',
  gray600: '#5B6270',
  gray900: '#14171F',
  red600: '#C8352E',
  red50: '#FCEDEC',
  green600: '#1F8A4C',
} as const;

export const colors = {
  primary: palette.indigo700,
  primarySoft: palette.indigo50,
  onPrimary: palette.white,
  accent: palette.amber500,
  accentSoft: palette.amber50,

  background: palette.white,
  surface: palette.gray50,
  surfaceMuted: palette.gray100,
  border: palette.gray200,

  textPrimary: palette.gray900,
  textSecondary: palette.gray600,
  textMuted: palette.gray400,

  error: palette.red600,
  errorSoft: palette.red50,
  success: palette.green600,

  shadow: palette.gray900,
} as const;

export type ColorName = keyof typeof colors;
