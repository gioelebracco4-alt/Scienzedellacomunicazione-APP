import { Sparkles } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import { EmptyState, Screen, ScreenHeader } from '@/components/ui';
import { APP_NAME } from '@/lib/config';

export default function HomeScreen() {
  const { t } = useTranslation();
  return (
    <Screen>
      <ScreenHeader title={t('home.greeting')} subtitle={t('home.welcome', { appName: APP_NAME })} />
      <EmptyState
        icon={Sparkles}
        title={t('common.comingSoon')}
        description={t('home.emptyDescription')}
      />
    </Screen>
  );
}
