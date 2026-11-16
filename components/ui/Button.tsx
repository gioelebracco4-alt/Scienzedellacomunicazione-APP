import { ActivityIndicator, Pressable, StyleSheet, type PressableProps } from 'react-native';

import { colors, radii, sizes, spacing, type ColorName } from '@/theme';

import { Text } from './Text';

type Variant = 'primary' | 'secondary' | 'ghost';

export type ButtonProps = Omit<PressableProps, 'children' | 'style'> & {
  label: string;
  variant?: Variant;
  loading?: boolean;
  fullWidth?: boolean;
};

const textColor: Record<Variant, ColorName> = {
  primary: 'onPrimary',
  secondary: 'primary',
  ghost: 'primary',
};

export function Button({
  label,
  variant = 'primary',
  loading = false,
  fullWidth = false,
  disabled,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled === true || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        fullWidth && styles.fullWidth,
        pressed && styles.pressed,
        isDisabled && styles.disabled,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={colors[textColor[variant]]} />
      ) : (
        <Text variant="bodyStrong" color={textColor[variant]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: sizes.buttonHeight,
    minWidth: sizes.touchTarget,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.primarySoft },
  ghost: { backgroundColor: 'transparent' },
  fullWidth: { alignSelf: 'stretch' },
  pressed: { opacity: 0.85 },
  disabled: { opacity: 0.5 },
});
