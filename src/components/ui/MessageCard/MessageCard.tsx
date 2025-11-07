/**
 * MessageCard Component - Message preview card
 * Used in User Story 4 (US4)
 */

import type { Message } from '../../../types';
import styles from './MessageCard.module.css';

export interface MessageCardProps {
  message: Message;
  onClick?: () => void;
}

export const MessageCard = ({ message, onClick }: MessageCardProps) => {
  const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 1) {
      const diffMins = Math.floor(diffMs / (1000 * 60));
      return `${diffMins} хв тому`;
    } else if (diffHours < 24) {
      return `${diffHours} год тому`;
    } else if (diffDays === 1) {
      return 'Вчора';
    } else if (diffDays < 7) {
      return `${diffDays} дн тому`;
    } else {
      return date.toLocaleDateString('uk-UA');
    }
  };

  return (
    <div
      className={`${styles.card} ${!message.isRead ? styles.unread : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.content}>
        <p className={styles.subject}>{message.subject}</p>
        <p className={styles.sender}>{message.sender}</p>
        <p className={styles.timestamp}>{formatTimestamp(message.timestamp)}</p>
      </div>
      {!message.isRead && <div className={styles.indicator} />}
    </div>
  );
};
