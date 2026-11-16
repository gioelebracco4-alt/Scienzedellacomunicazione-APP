import { Tabs } from 'expo-router';
import type { LucideIcon } from 'lucide-react-native';
import { House, LayoutGrid, MessageCircle, Target, UserRound } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import { colors, fontFamily, sizes } from '@/theme';

type TabConfig = {
  name: 'index' | 'dashboard' | 'training' | 'chat' | 'profile';
  labelKey: 'tabs.home' | 'tabs.dashboard' | 'tabs.training' | 'tabs.chat' | 'tabs.profile';
  icon: LucideIcon;
};

const TABS: readonly TabConfig[] = [
  { name: 'index', labelKey: 'tabs.home', icon: House },
  { name: 'dashboard', labelKey: 'tabs.dashboard', icon: LayoutGrid },
  { name: 'training', labelKey: 'tabs.training', icon: Target },
  { name: 'chat', labelKey: 'tabs.chat', icon: MessageCircle },
  { name: 'profile', labelKey: 'tabs.profile', icon: UserRound },
];

export default function TabsLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: { fontFamily: fontFamily.medium },
      }}
    >
      {TABS.map(({ name, labelKey, icon: Icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: t(labelKey),
            tabBarIcon: ({ color, focused }) => (
              <Icon size={sizes.iconMd} color={color} strokeWidth={focused ? 2.25 : 1.75} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
