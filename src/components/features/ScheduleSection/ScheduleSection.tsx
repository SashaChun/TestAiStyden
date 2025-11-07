/**
 * ScheduleSection Component - Today's schedule section
 * User Story 2 (US2) - Перегляд розкладу на поточний день
 */

import { ScheduleCard } from '../../ui/ScheduleCard';
import { Button } from '../../ui/Button';
import type { ScheduleItem } from '../../../types';
import styles from './ScheduleSection.module.css';

export interface ScheduleSectionProps {
  items: ScheduleItem[];
  onViewAll?: () => void;
  className?: string;
}

export const ScheduleSection = ({ items, onViewAll, className = '' }: ScheduleSectionProps) => {
  return (
    <div className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Розклад на сьогодні</h2>
        {onViewAll && (
          <Button variant="link" size="sm" onClick={onViewAll}>
            Переглянути все
          </Button>
        )}
      </div>

      <div className={styles.content}>
        {items.length > 0 ? (
          items.map(item => <ScheduleCard key={item.id} item={item} />)
        ) : (
          <p className={styles.empty}>Сьогодні занять немає</p>
        )}
      </div>
    </div>
  );
};
