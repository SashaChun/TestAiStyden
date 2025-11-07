/**
 * useMessages Hook - Fetch messages with unread count
 */

import { useState, useEffect } from 'react';
import { messageService } from '../services/messageService';
import type { Message } from '../types';

interface UseMessagesReturn {
  messages: Message[];
  unreadCount: number;
  isLoading: boolean;
  error: Error | null;
  markAsRead: (messageId: string) => Promise<void>;
  refetch: () => void;
}

export function useMessages(): UseMessagesReturn {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await messageService.getMessages();
      setMessages(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch messages'));
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      await messageService.markAsRead(messageId);
      // Update local state
      setMessages(prev =>
        prev.map(msg => (msg.id === messageId ? { ...msg, isRead: true } : msg))
      );
    } catch (err) {
      console.error('Failed to mark message as read:', err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const unreadCount = messages.filter(msg => !msg.isRead).length;

  return {
    messages,
    unreadCount,
    isLoading,
    error,
    markAsRead,
    refetch: fetchMessages,
  };
}
