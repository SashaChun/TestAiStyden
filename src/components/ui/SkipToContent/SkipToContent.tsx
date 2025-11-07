/**
 * SkipToContent Component - Accessibility skip link
 */

import styles from './SkipToContent.module.css';

export const SkipToContent = () => {
  return (
    <a href="#main-content" className={styles.skipLink}>
      Перейти до основного вмісту
    </a>
  );
};
