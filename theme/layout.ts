import type { ViewStyle } from 'react-native';

import { colors } from './colors';

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
} as const;

/** Dimensioni minime per l'accessibilità (target di tocco >= 44px). */
export const sizes = {
  touchTarget: 44,
  buttonHeight: 52,
  iconSm: 18,
  iconMd: 24,
  iconLg: 40,
  borderWidth: 1,
} as const;

export const shadows = {
  card: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
} as const satisfies Record<string, ViewStyle>;

export type Spacing = keyof typeof spacing;
