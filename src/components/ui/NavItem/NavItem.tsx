/**
 * NavItem Component - Navigation menu item
 * Used in User Story 3 (US3)
 */

import { Icon } from '../Icon';
import { Badge } from '../Badge';
import styles from './NavItem.module.css';

export interface NavItemProps {
  label: string;
  icon: string;
  active?: boolean;
  badge?: number;
  onClick?: () => void;
}

export const NavItem = ({ label, icon, active = false, badge, onClick }: NavItemProps) => {
  return (
    <button
      className={`${styles.navItem} ${active ? styles.active : ''}`}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
    >
      <Icon name={icon} size={20} />
      <span className={styles.label}>{label}</span>
      {badge !== undefined && badge > 0 && (
        <Badge count={badge} variant="danger" size="sm" className={styles.badge} />
      )}
    </button>
  );
};
