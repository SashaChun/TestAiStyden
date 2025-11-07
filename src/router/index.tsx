/**
 * Application Router Configuration
 * All routes for UniPortal Student Cabinet
 */

import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ROUTES } from '../constants/routes';

// Lazy load pages for code splitting
const Dashboard = lazy(() => import('../pages/Dashboard').then(m => ({ default: m.Dashboard })));
const Schedule = lazy(() => import('../pages/Schedule').then(m => ({ default: m.Schedule })));
const Grades = lazy(() => import('../pages/Grades').then(m => ({ default: m.Grades })));
const Messages = lazy(() => import('../pages/Messages').then(m => ({ default: m.Messages })));
const Profile = lazy(() => import('../pages/Profile').then(m => ({ default: m.Profile })));
const Settings = lazy(() => import('../pages/Settings').then(m => ({ default: m.Settings })));

/**
 * Loading fallback component
 */
const PageLoader = () => (
  <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <LoadingSpinner size="lg" text="Завантаження сторінки..." />
  </div>
);

/**
 * Main Router Component
 */
export const AppRouter = () => {
  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Dashboard */}
          <Route path={ROUTES.HOME} element={<Dashboard />} />
          
          {/* Schedule Pages */}
          <Route path={ROUTES.SCHEDULE} element={<Schedule />} />
          
          {/* Grades Pages */}
          <Route path={ROUTES.GRADES} element={<Grades />} />
          <Route path={ROUTES.GRADEBOOK} element={<Grades />} />
          
          {/* Messages */}
          <Route path={ROUTES.MESSAGES} element={<Messages />} />
          
          {/* Profile */}
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          
          {/* Settings */}
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          
          {/* 404 - Redirect to home */}
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

/**
 * Route configuration for reference
 */
export const ROUTE_CONFIG = [
  {
    path: ROUTES.HOME,
    name: 'Головна',
    component: 'Dashboard',
    description: 'Головна панель з статистикою, розкладом, повідомленнями та оцінками',
    priority: 'P1 - MVP',
  },
  {
    path: ROUTES.SCHEDULE,
    name: 'Розклад занять',
    component: 'Schedule',
    description: 'Повний розклад занять на тиждень',
    priority: 'P2',
  },
  {
    path: ROUTES.GRADES,
    name: 'Оцінки та успішність',
    component: 'Grades',
    description: 'Детальна інформація про оцінки за всіма предметами',
    priority: 'P2',
  },
  {
    path: ROUTES.GRADEBOOK,
    name: 'Залікова книжка',
    component: 'Grades',
    description: 'Електронна залікова книжка',
    priority: 'P3',
  },
  {
    path: ROUTES.MESSAGES,
    name: 'Повідомлення',
    component: 'Messages',
    description: 'Всі повідомлення від викладачів та адміністрації',
    priority: 'P2',
  },
  {
    path: ROUTES.PROFILE,
    name: 'Профіль',
    component: 'Profile',
    description: 'Персональна інформація студента',
    priority: 'P3',
  },
  {
    path: ROUTES.SETTINGS,
    name: 'Налаштування',
    component: 'Settings',
    description: 'Налаштування додатку та сповіщень',
    priority: 'P3',
  },
] as const;
