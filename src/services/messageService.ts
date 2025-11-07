/**
 * Message Service - Mock data
 */

import type { Message } from '../types';

const MOCK_MESSAGES: Message[] = [
  {
    id: 'MSG001',
    subject: 'Зміна в розкладі',
    sender: 'Деканат',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    isRead: false,
    content: 'Заняття з математичного аналізу перенесено на 14:00',
  },
  {
    id: 'MSG002',
    subject: 'Нагадування про здачу курсової',
    sender: 'Проф. Петренко А.В.',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    isRead: false,
    content: 'Нагадую, що термін здачі курсової роботи - 15 листопада',
  },
  {
    id: 'MSG003',
    subject: 'Результати тестування',
    sender: 'Система',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    isRead: false,
    content: 'Ваші результати тестування з програмування доступні для перегляду',
  },
  {
    id: 'MSG004',
    subject: 'Запрошення на конференцію',
    sender: 'Студентська рада',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    isRead: true,
    content: 'Запрошуємо вас взяти участь у студентській науковій конференції',
  },
  {
    id: 'MSG005',
    subject: 'Оновлення розкладу екзаменів',
    sender: 'Деканат',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    isRead: true,
    content: 'Розклад екзаменаційної сесії оновлено. Перегляньте зміни.',
  },
];

export const messageService = {
  async getMessages(): Promise<Message[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_MESSAGES;
  },

  async getUnreadCount(): Promise<number> {
    const messages = await this.getMessages();
    return messages.filter(msg => !msg.isRead).length;
  },

  async markAsRead(messageId: string): Promise<void> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const message = MOCK_MESSAGES.find(msg => msg.id === messageId);
    if (message) {
      message.isRead = true;
    }
  },
};
