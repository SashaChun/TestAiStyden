/**
 * Schedule Service - Mock data
 */

import type { ScheduleItem } from '../types';

const MOCK_SCHEDULE: ScheduleItem[] = [
  {
    id: 'SCH001',
    subject: 'Програмування',
    teacher: 'Проф. Петренко А.В.',
    room: 'Аудиторія 305',
    startTime: '09:00',
    endTime: '10:30',
    format: 'online',
    zoomLink: 'https://zoom.us/j/123456789',
    date: new Date().toISOString().split('T')[0], // Today
  },
  {
    id: 'SCH002',
    subject: 'Математичний аналіз',
    teacher: 'Доц. Коваленко І.М.',
    room: 'Аудиторія 210',
    startTime: '10:45',
    endTime: '12:15',
    format: 'offline',
    date: new Date().toISOString().split('T')[0],
  },
  {
    id: 'SCH003',
    subject: 'Англійська мова',
    teacher: 'Викл. Сміт Дж.',
    room: 'Аудиторія 115',
    startTime: '14:00',
    endTime: '15:30',
    format: 'offline',
    date: new Date().toISOString().split('T')[0],
  },
];

export const scheduleService = {
  async getScheduleForDate(date: string): Promise<ScheduleItem[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter by date
    return MOCK_SCHEDULE.filter(item => item.date === date);
  },

  async getTodaySchedule(): Promise<ScheduleItem[]> {
    const today = new Date().toISOString().split('T')[0];
    return this.getScheduleForDate(today);
  },
};
