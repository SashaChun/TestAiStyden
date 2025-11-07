/**
 * Schedule Page - Full schedule view
 */

import { useState } from 'react';
import { ScheduleCard } from '../../components/ui/ScheduleCard';
import { Button } from '../../components/ui/Button';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useSchedule } from '../../hooks/useSchedule';
import { getDayOfWeek, getWeekStart, addDays, getTodayDate } from '../../utils/dateHelpers';
import styles from './Schedule.module.css';

const DAYS_OF_WEEK = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];

export const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const { items, isLoading } = useSchedule(selectedDate);

  // Generate week dates
  const weekStart = getWeekStart(selectedDate);
  const weekDates = Array.from({ length: 6 }, (_, i) => addDays(weekStart, i));

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  const handleToday = () => {
    setSelectedDate(getTodayDate());
  };

  const isToday = (date: Date) => {
    return date.toISOString().split('T')[0] === getTodayDate();
  };

  const isSelected = (date: Date) => {
    return date.toISOString().split('T')[0] === selectedDate;
  };

  return (
    <div className={styles.page}>
      {/* Week Navigation */}
      <div className={styles.weekNav}>
        <h2 className={styles.weekTitle}>Тиждень</h2>
        <Button variant="primary" size="sm" onClick={handleToday}>
          Сьогодні
        </Button>
      </div>

      {/* Days Tabs */}
      <div className={styles.daysTabs}>
        {weekDates.map((date, index) => (
          <button
            key={index}
            className={`${styles.dayTab} ${isSelected(date) ? styles.active : ''} ${
              isToday(date) ? styles.today : ''
            }`}
            onClick={() => handleDateSelect(date)}
          >
            <span className={styles.dayName}>{DAYS_OF_WEEK[index]}</span>
            <span className={styles.dayDate}>
              {date.getDate()}.{String(date.getMonth() + 1).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>

      {/* Schedule Content */}
      <div className={styles.content}>
        {isLoading ? (
          <LoadingSpinner text="Завантаження розкладу..." />
        ) : items.length > 0 ? (
          <div className={styles.scheduleList}>
            <h3 className={styles.dateTitle}>
              {getDayOfWeek(selectedDate)}, {new Date(selectedDate).toLocaleDateString('uk-UA')}
            </h3>
            {items.map(item => (
              <ScheduleCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>На цей день занять немає</p>
          </div>
        )}
      </div>
    </div>
  );
};
