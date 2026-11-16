import { UserRound } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import { EmptyState, Screen, ScreenHeader } from '@/components/ui';

export default function ProfileScreen() {
  const { t } = useTranslation();
  return (
    <Screen>
      <ScreenHeader title={t('profile.title')} />
      <EmptyState icon={UserRound} title={t('common.comingSoon')} description={t('profile.emptyDescription')} />
    </Screen>
  );
}
