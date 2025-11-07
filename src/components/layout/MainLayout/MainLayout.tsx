/**
 * MainLayout Component - Main application layout wrapper
 */

import { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import type { Student } from '../../../types';
import styles from './MainLayout.module.css';

export interface MainLayoutProps {
  student: Student | null;
  activeRoute: string;
  unreadCount?: number;
  onNavigate: (path: string) => void;
  onLogout?: () => void;
  headerTitle: string;
  headerSubtitle?: string;
  children: ReactNode;
}

export const MainLayout = ({
  student,
  activeRoute,
  unreadCount,
  onNavigate,
  onLogout,
  headerTitle,
  headerSubtitle,
  children,
}: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Sidebar
        student={student}
        activeRoute={activeRoute}
        unreadCount={unreadCount}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />
      <div className={styles.main}>
        <Header title={headerTitle} subtitle={headerSubtitle} />
        <main id="main-content" className={styles.content} role="main">
          {children}
        </main>
      </div>
    </div>
  );
};
