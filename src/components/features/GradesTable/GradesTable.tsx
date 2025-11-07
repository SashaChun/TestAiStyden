/**
 * GradesTable Component - Grades table with circular indicators
 * User Story 5 (US5) - Перегляд поточних оцінок
 */

import { CircularProgress } from '../../ui/CircularProgress';
import type { Grade } from '../../../types';
import styles from './GradesTable.module.css';

export interface GradesTableProps {
  grades: Grade[];
  className?: string;
}

export const GradesTable = ({ grades, className = '' }: GradesTableProps) => {
  return (
    <div className={`${styles.tableWrapper} ${className}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Предмет</th>
            <th>Викладач</th>
            <th>Оцінка</th>
            <th>Кредити</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(grade => (
            <tr key={grade.id} className={styles.row}>
              <td className={styles.subject}>{grade.subject}</td>
              <td className={styles.teacher}>{grade.teacher}</td>
              <td className={styles.grade}>
                <CircularProgress value={grade.score} max={grade.maxScore} size={48} />
              </td>
              <td className={styles.credits}>{grade.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
