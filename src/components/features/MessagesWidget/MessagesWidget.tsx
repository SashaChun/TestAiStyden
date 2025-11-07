/**
 * MessagesWidget Component - Messages list widget
 * User Story 4 (US4) - Перегляд непрочитаних повідомлень
 */

import { MessageCard } from '../../ui/MessageCard';
import { Badge } from '../../ui/Badge';
import type { Message } from '../../../types';
import styles from './MessagesWidget.module.css';

export interface MessagesWidgetProps {
  messages: Message[];
  unreadCount: number;
  onMessageClick?: (messageId: string) => void;
  className?: string;
}

export const MessagesWidget = ({
  messages,
  unreadCount,
  onMessageClick,
  className = '',
}: MessagesWidgetProps) => {
  return (
    <div className={`${styles.widget} ${className}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Повідомлення</h2>
        {unreadCount > 0 && (
          <Badge count={unreadCount} variant="danger" className={styles.badge} />
        )}
      </div>

      <div className={styles.content}>
        {messages.length > 0 ? (
          messages.map(message => (
            <MessageCard
              key={message.id}
              message={message}
              onClick={() => onMessageClick?.(message.id)}
            />
          ))
        ) : (
          <p className={styles.empty}>Немає повідомлень</p>
        )}
      </div>
    </div>
  );
};
