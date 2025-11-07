/**
 * Avatar Component - User avatar with fallback to initials
 */

import styles from './Avatar.module.css';

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallbackText?: string;
  className?: string;
}

export const Avatar = ({
  src,
  alt,
  size = 'md',
  fallbackText,
  className = '',
}: AvatarProps) => {
  const classNames = [styles.avatar, styles[size], className].filter(Boolean).join(' ');

  // Get initials from alt text if no fallbackText provided
  const getInitials = (text: string): string => {
    const words = text.trim().split(' ');
    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }
    return text.substring(0, 2).toUpperCase();
  };

  const initials = fallbackText || getInitials(alt);

  return (
    <div className={classNames} role="img" aria-label={alt}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <span className={styles.initials}>{initials}</span>
      )}
    </div>
  );
};
