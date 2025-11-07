/**
 * Grade type definitions
 */

export interface Grade {
  id: string;
  subject: string;
  teacher: string;
  score: number;
  maxScore: number;
  credits: number;
}
