import { StyleSheet, View, type ViewProps } from 'react-native';

import { colors, radii, shadows, sizes, spacing } from '@/theme';

export function Card({ style, ...rest }: ViewProps) {
  return <View style={[styles.card, style]} {...rest} />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: radii.lg,
    borderWidth: sizes.borderWidth,
    borderColor: colors.border,
    padding: spacing.md,
    ...shadows.card,
  },
});
