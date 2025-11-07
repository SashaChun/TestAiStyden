/**
 * LoadingSpinner Component - Loading indicator
 */

import styles from './LoadingSpinner.module.css';

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export const LoadingSpinner = ({ size = 'md', text, className = '' }: LoadingSpinnerProps) => {
  return (
    <div className={`${styles.container} ${className}`} role="status" aria-live="polite">
      <div className={`${styles.spinner} ${styles[size]}`}>
        <div className={styles.circle}></div>
      </div>
      {text && <p className={styles.text}>{text}</p>}
      <span className="sr-only">Завантаження...</span>
    </div>
  );
};
