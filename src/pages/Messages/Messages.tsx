/**
 * Messages Page - Full messages view with filters and search
 */

import { useState, useMemo } from 'react';
import { MessageCard } from '../../components/ui/MessageCard';
import { Badge } from '../../components/ui/Badge';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useMessages } from '../../hooks/useMessages';
import styles from './Messages.module.css';

type FilterType = 'all' | 'unread' | 'read';

export const Messages = () => {
  const { messages, unreadCount, markAsRead, isLoading } = useMessages();
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and search messages
  const filteredMessages = useMemo(() => {
    let result = messages;

    // Apply filter
    if (filter === 'unread') {
      result = result.filter(m => !m.isRead);
    } else if (filter === 'read') {
      result = result.filter(m => m.isRead);
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        m =>
          m.subject.toLowerCase().includes(query) ||
          m.sender.toLowerCase().includes(query) ||
          m.content.toLowerCase().includes(query)
      );
    }

    return result;
  }, [messages, filter, searchQuery]);

  const handleMessageClick = (messageId: string) => {
    markAsRead(messageId);
  };

  if (isLoading) {
    return <LoadingSpinner size="lg" text="Завантаження повідомлень..." />;
  }

  return (
    <div className={styles.page}>
      {/* Header with stats */}
      <div className={styles.header}>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Всього:</span>
            <span className={styles.statValue}>{messages.length}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Непрочитані:</span>
            <Badge count={unreadCount} variant="danger" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className={styles.controls}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Пошук по повідомленнях..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        
        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            Всі ({messages.length})
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'unread' ? styles.active : ''}`}
            onClick={() => setFilter('unread')}
          >
            Непрочитані ({unreadCount})
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'read' ? styles.active : ''}`}
            onClick={() => setFilter('read')}
          >
            Прочитані ({messages.length - unreadCount})
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className={styles.messagesList}>
        {filteredMessages.length > 0 ? (
          filteredMessages.map(message => (
            <MessageCard
              key={message.id}
              message={message}
              onClick={() => handleMessageClick(message.id)}
            />
          ))
        ) : (
          <div className={styles.empty}>
            <p>
              {searchQuery
                ? 'Повідомлень за запитом не знайдено'
                : filter === 'unread'
                ? 'Немає непрочитаних повідомлень'
                : filter === 'read'
                ? 'Немає прочитаних повідомлень'
                : 'Повідомлень немає'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
