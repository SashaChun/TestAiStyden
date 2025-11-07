/**
 * Schedule type definitions
 */

export type ClassFormat = 'online' | 'offline';

export interface ScheduleItem {
  id: string;
  subject: string;
  teacher: string;
  room: string;
  startTime: string;
  endTime: string;
  format: ClassFormat;
  zoomLink?: string;
  date: string;
}
