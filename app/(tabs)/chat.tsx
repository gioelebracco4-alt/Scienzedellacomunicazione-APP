import { MessageCircle } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import { EmptyState, Screen, ScreenHeader } from '@/components/ui';

export default function ChatScreen() {
  const { t } = useTranslation();
  return (
    <Screen>
      <ScreenHeader title={t('chat.title')} />
      <EmptyState icon={MessageCircle} title={t('common.comingSoon')} description={t('chat.emptyDescription')} />
    </Screen>
  );
}
