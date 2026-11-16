import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { colors, maxFontScale, typography, type ColorName, type TypographyVariant } from '@/theme';

export type TextProps = RNTextProps & {
  variant?: TypographyVariant;
  color?: ColorName;
  align?: 'left' | 'center' | 'right';
};

export function Text({
  variant = 'body',
  color = 'textPrimary',
  align = 'left',
  style,
  ...rest
}: TextProps) {
  return (
    <RNText
      maxFontSizeMultiplier={maxFontScale}
      style={[typography[variant], { color: colors[color], textAlign: align }, style]}
      {...rest}
    />
  );
}
