import { Target } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import { EmptyState, Screen, ScreenHeader } from '@/components/ui';

export default function TrainingScreen() {
  const { t } = useTranslation();
  return (
    <Screen>
      <ScreenHeader title={t('training.title')} />
      <EmptyState icon={Target} title={t('common.comingSoon')} description={t('training.emptyDescription')} />
    </Screen>
  );
}
