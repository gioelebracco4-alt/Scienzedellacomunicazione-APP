import type { LucideIcon } from 'lucide-react-native';
import { CircleAlert, Inbox } from 'lucide-react-native';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { colors, radii, sizes, spacing } from '@/theme';

import { Button } from './Button';
import { Text } from './Text';

type StateLayoutProps = {
  icon: LucideIcon;
  tone: 'neutral' | 'error';
  title: string;
  description?: string;
  action?: { label: string; onPress: () => void };
};

function StateLayout({ icon: Icon, tone, title, description, action }: StateLayoutProps) {
  const isError = tone === 'error';
  return (
    <View style={styles.container}>
      <View style={[styles.iconBadge, isError && styles.iconBadgeError]}>
        <Icon size={sizes.iconLg} color={isError ? colors.error : colors.primary} strokeWidth={1.5} />
      </View>
      <Text variant="heading" align="center">
        {title}
      </Text>
      {description ? (
        <Text color="textSecondary" align="center">
          {description}
        </Text>
      ) : null}
      {action ? <Button label={action.label} variant="secondary" onPress={action.onPress} /> : null}
    </View>
  );
}

export function LoadingState() {
  const { t } = useTranslation();
  return (
    <View style={styles.container} accessibilityLabel={t('common.loading')}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

type ErrorStateProps = { message?: string; onRetry?: () => void };

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  const { t } = useTranslation();
  return (
    <StateLayout
      icon={CircleAlert}
      tone="error"
      title={t('common.errorTitle')}
      description={message ?? t('common.errorMessage')}
      action={onRetry ? { label: t('common.retry'), onPress: onRetry } : undefined}
    />
  );
}

type EmptyStateProps = { icon?: LucideIcon; title?: string; description?: string };

export function EmptyState({ icon = Inbox, title, description }: EmptyStateProps) {
  const { t } = useTranslation();
  return (
    <StateLayout
      icon={icon}
      tone="neutral"
      title={title ?? t('common.emptyTitle')}
      description={description}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  iconBadge: {
    width: sizes.iconLg * 2,
    height: sizes.iconLg * 2,
    borderRadius: radii.full,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBadgeError: { backgroundColor: colors.errorSoft },
});
