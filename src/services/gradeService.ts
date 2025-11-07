/**
 * Grade Service - Mock data
 */

import type { Grade } from '../types';

const MOCK_GRADES: Grade[] = [
  {
    id: 'GRD001',
    subject: 'Програмування',
    teacher: 'Проф. Петренко А.В.',
    score: 92,
    maxScore: 100,
    credits: 5,
  },
  {
    id: 'GRD002',
    subject: 'Математичний аналіз',
    teacher: 'Доц. Коваленко І.М.',
    score: 88,
    maxScore: 100,
    credits: 4,
  },
  {
    id: 'GRD003',
    subject: 'Англійська мова',
    teacher: 'Викл. Сміт Дж.',
    score: 95,
    maxScore: 100,
    credits: 3,
  },
  {
    id: 'GRD004',
    subject: 'Бази даних',
    teacher: 'Доц. Іваненко С.П.',
    score: 85,
    maxScore: 100,
    credits: 4,
  },
  {
    id: 'GRD005',
    subject: 'Веб-технології',
    teacher: 'Викл. Коваль Н.С.',
    score: 90,
    maxScore: 100,
    credits: 3,
  },
];

export const gradeService = {
  async getGrades(): Promise<Grade[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_GRADES;
  },

  async getGradeBySubject(subject: string): Promise<Grade | undefined> {
    const grades = await this.getGrades();
    return grades.find(grade => grade.subject === subject);
  },
};
