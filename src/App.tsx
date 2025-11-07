/**
 * App Component - Main application entry point
 * UniPortal Student Cabinet
 */

import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { SkipToContent } from './components/ui/SkipToContent';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { Schedule } from './pages/Schedule';
import { Grades } from './pages/Grades';
import { Messages } from './pages/Messages';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { useStudentData } from './hooks/useStudentData';
import { useMessages } from './hooks/useMessages';
import { ROUTES } from './constants/routes';

/**
 * App Layout Wrapper - handles routing and layout
 */
function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { student } = useStudentData();
  const { unreadCount } = useMessages();

  const handleLogout = () => {
    console.log('Logout clicked');
    // In a real app, this would clear auth and redirect
    navigate(ROUTES.HOME);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  // Get page title based on route
  const getPageTitle = () => {
    switch (location.pathname) {
      case ROUTES.HOME:
        return 'Головна панель';
      case ROUTES.SCHEDULE:
        return 'Розклад занять';
      case ROUTES.GRADES:
      case ROUTES.GRADEBOOK:
        return 'Оцінки та успішність';
      case ROUTES.MESSAGES:
        return 'Повідомлення';
      case ROUTES.PROFILE:
        return 'Профіль студента';
      case ROUTES.SETTINGS:
        return 'Налаштування';
      default:
        return 'UniPortal';
    }
  };

  const getPageSubtitle = () => {
    switch (location.pathname) {
      case ROUTES.HOME:
        return 'Ласкаво просимо до студентського кабінету';
      case ROUTES.SCHEDULE:
        return 'Перегляд розкладу занять';
      case ROUTES.GRADES:
      case ROUTES.GRADEBOOK:
        return 'Ваші оцінки та академічна успішність';
      case ROUTES.MESSAGES:
        return 'Повідомлення від викладачів та адміністрації';
      case ROUTES.PROFILE:
        return 'Персональна інформація';
      case ROUTES.SETTINGS:
        return 'Налаштування додатку';
      default:
        return '';
    }
  };

  return (
    <ErrorBoundary>
      <SkipToContent />
      <MainLayout
        student={student}
        activeRoute={location.pathname}
        unreadCount={unreadCount}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        headerTitle={getPageTitle()}
        headerSubtitle={getPageSubtitle()}
      >
        <Routes>
          <Route path={ROUTES.HOME} element={<Dashboard />} />
          <Route path={ROUTES.SCHEDULE} element={<Schedule />} />
          <Route path={ROUTES.GRADES} element={<Grades />} />
          <Route path={ROUTES.GRADEBOOK} element={<Grades />} />
          <Route path={ROUTES.MESSAGES} element={<Messages />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
        </Routes>
      </MainLayout>
    </ErrorBoundary>
  );
}

/**
 * Main App Component with Router
 */
function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
