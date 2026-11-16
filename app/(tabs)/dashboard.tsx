import { LayoutGrid } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import { EmptyState, Screen, ScreenHeader } from '@/components/ui';

export default function DashboardScreen() {
  const { t } = useTranslation();
  return (
    <Screen>
      <ScreenHeader title={t('dashboard.title')} />
      <EmptyState icon={LayoutGrid} title={t('common.comingSoon')} description={t('dashboard.emptyDescription')} />
    </Screen>
  );
}
