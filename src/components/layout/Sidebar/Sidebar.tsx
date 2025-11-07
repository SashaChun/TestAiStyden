/**
 * Sidebar Component - Navigation sidebar with profile
 * User Story 3 (US3) - Навігація по розділах кабінету
 */

import { Avatar } from '../../ui/Avatar';
import { NavItem } from '../../ui/NavItem';
import { Icon } from '../../ui/Icon';
import { NAVIGATION_ITEMS } from '../../../constants/navigation';
import type { Student } from '../../../types';
import styles from './Sidebar.module.css';

export interface SidebarProps {
  student: Student | null;
  activeRoute: string;
  unreadCount?: number;
  onNavigate: (path: string) => void;
  onLogout?: () => void;
  className?: string;
}

export const Sidebar = ({
  student,
  activeRoute,
  unreadCount = 0,
  onNavigate,
  onLogout,
  className = '',
}: SidebarProps) => {
  return (
    <aside className={`${styles.sidebar} ${className}`}>
      {/* Logo & Branding */}
      <div className={styles.brand}>
        <div className={styles.logo}>
          <Icon name="graduation" size={24} />
        </div>
        <div className={styles.brandText}>
          <h2 className={styles.brandTitle}>UniPortal</h2>
          <p className={styles.brandSubtitle}>Студентський кабінет</p>
        </div>
      </div>

      {/* Student Profile */}
      {student && (
        <div className={styles.profile}>
          <Avatar alt={student.fullName} size="lg" />
          <div className={styles.profileInfo}>
            <p className={styles.profileName}>{student.fullName}</p>
            <p className={styles.profileGroup}>
              {student.group}, {student.course} курс
            </p>
            <p className={styles.profileFaculty}>{student.faculty}</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {NAVIGATION_ITEMS.map(item => (
            <li key={item.id}>
              <NavItem
                label={item.label}
                icon={item.icon}
                active={activeRoute === item.path}
                badge={item.id === 'nav-messages' ? unreadCount : undefined}
                onClick={() => onNavigate(item.path)}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className={styles.footer}>
        <NavItem label="Вийти" icon="logout" onClick={onLogout} />
      </div>
    </aside>
  );
};
