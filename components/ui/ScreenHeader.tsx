import { StyleSheet, View } from 'react-native';

import { spacing } from '@/theme';

import { Text } from './Text';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
};

export function ScreenHeader({ title, subtitle }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <Text variant="title" accessibilityRole="header">
        {title}
      </Text>
      {subtitle ? <Text color="textSecondary">{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.xxs },
});
