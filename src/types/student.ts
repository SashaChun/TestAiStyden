/**
 * Student type definitions
 */

export interface StudentStats {
  averageGrade: number;
  creditsEarned: number;
  creditsTotal: number;
  absences: number;
  debts: number;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  photo?: string;
  group: string;
  course: number;
  faculty: string;
  stats: StudentStats;
}
