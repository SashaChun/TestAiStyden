/**
 * Navigation menu items
 */

import type { NavigationItem } from '../types';
import { ROUTES } from './routes';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'nav-home',
    label: 'Головна',
    icon: 'home',
    path: ROUTES.HOME,
  },
  {
    id: 'nav-schedule',
    label: 'Розклад занять',
    icon: 'calendar',
    path: ROUTES.SCHEDULE,
  },
  {
    id: 'nav-grades',
    label: 'Оцінки та успішність',
    icon: 'chart',
    path: ROUTES.GRADES,
  },
  {
    id: 'nav-gradebook',
    label: 'Залікова книжка',
    icon: 'book',
    path: ROUTES.GRADEBOOK,
  },
  {
    id: 'nav-messages',
    label: 'Повідомлення',
    icon: 'mail',
    path: ROUTES.MESSAGES,
    badge: 0, // Will be updated dynamically
  },
  {
    id: 'nav-profile',
    label: 'Профіль',
    icon: 'user',
    path: ROUTES.PROFILE,
  },
  {
    id: 'nav-settings',
    label: 'Налаштування',
    icon: 'settings',
    path: ROUTES.SETTINGS,
  },
];
