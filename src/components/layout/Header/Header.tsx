/**
 * Header Component - Page header with title and actions
 */

import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';
import styles from './Header.module.css';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Header = ({ title, subtitle, className = '' }: HeaderProps) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.actions}>
          <Button variant="ghost" size="sm">
            <Icon name="bell" size={20} />
          </Button>
          <Button variant="ghost" size="sm">
            <Icon name="user" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};
