/**
 * Badge Component - Notification badge
 */

import styles from './Badge.module.css';

export interface BadgeProps {
  count: number;
  max?: number;
  variant?: 'primary' | 'danger' | 'warning' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge = ({
  count,
  max = 99,
  variant = 'danger',
  size = 'md',
  className = '',
}: BadgeProps) => {
  if (count <= 0) return null;

  const displayCount = count > max ? `${max}+` : count.toString();

  const classNames = [styles.badge, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} aria-label={`${count} непрочитаних`}>
      {displayCount}
    </span>
  );
};
