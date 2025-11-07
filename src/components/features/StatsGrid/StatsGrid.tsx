/**
 * StatsGrid Component - Grid of 4 statistics cards
 * User Story 1 (US1) - Перегляд основної інформації та статистики
 */

import { StatCard } from '../../ui/StatCard';
import type { StudentStats } from '../../../types';
import styles from './StatsGrid.module.css';

export interface StatsGridProps {
  stats: StudentStats;
  className?: string;
}

export const StatsGrid = ({ stats, className = '' }: StatsGridProps) => {
  return (
    <div className={`${styles.grid} ${className}`}>
      <StatCard
        label="Середній бал"
        value={stats.averageGrade.toFixed(1)}
        icon="star"
        iconColor="green"
      />
      <StatCard
        label="Кредити"
        value={`${stats.creditsEarned}/${stats.creditsTotal}`}
        icon="book"
        iconColor="blue"
      />
      <StatCard
        label="Пропуски"
        value={stats.absences}
        icon="calendar"
        iconColor="orange"
      />
      <StatCard
        label="Заборгованості"
        value={stats.debts}
        icon="alert"
        iconColor="purple"
      />
    </div>
  );
};
