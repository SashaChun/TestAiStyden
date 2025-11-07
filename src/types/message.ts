/**
 * Message type definitions
 */

export interface Message {
  id: string;
  subject: string;
  sender: string;
  timestamp: string;
  isRead: boolean;
  content: string;
}
