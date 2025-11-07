/**
 * StatCard Component - Statistics card for dashboard
 * Used in User Story 1 (US1)
 */

import { Icon } from '../Icon';
import styles from './StatCard.module.css';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
  iconColor: 'green' | 'blue' | 'orange' | 'purple';
  className?: string;
}

export const StatCard = ({ label, value, icon, iconColor, className = '' }: StatCardProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.label}>{label}</p>
          <p className={styles.value}>{value}</p>
        </div>
        <div className={`${styles.iconWrapper} ${styles[iconColor]}`}>
          <Icon name={icon} size={24} color="currentColor" />
        </div>
      </div>
    </div>
  );
};
