/**
 * Student Service - Mock data
 */

import type { Student } from '../types';

const MOCK_STUDENT: Student = {
  id: 'STU001',
  firstName: 'Марія',
  lastName: 'Коваленко',
  fullName: 'Марія Коваленко',
  photo: undefined, // Will add avatar later
  group: 'ІТ-21',
  course: 3,
  faculty: 'Факультет інформатики',
  stats: {
    averageGrade: 4.8,
    creditsEarned: 48,
    creditsTotal: 60,
    absences: 2,
    debts: 0,
  },
};

export const studentService = {
  async getStudent(): Promise<Student> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_STUDENT;
  },
};
