/**
 * Dashboard Page - Main dashboard with all features
 * Combines User Stories 1, 2, 4, 5
 */

import { StatsGrid } from '../../components/features/StatsGrid';
import { ScheduleSection } from '../../components/features/ScheduleSection';
import { MessagesWidget } from '../../components/features/MessagesWidget';
import { GradesTable } from '../../components/features/GradesTable';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useStudentData } from '../../hooks/useStudentData';
import { useSchedule } from '../../hooks/useSchedule';
import { useMessages } from '../../hooks/useMessages';
import { useGrades } from '../../hooks/useGrades';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  const { student, isLoading: studentLoading } = useStudentData();
  const { items: scheduleItems, isLoading: scheduleLoading } = useSchedule();
  const { messages, unreadCount, markAsRead, isLoading: messagesLoading } = useMessages();
  const { grades, isLoading: gradesLoading } = useGrades();

  if (studentLoading) {
    return <LoadingSpinner size="lg" text="Завантаження даних студента..." />;
  }

  if (!student) {
    return <div className={styles.error}>Помилка завантаження даних студента</div>;
  }

  return (
    <div className={styles.dashboard}>
      {/* Statistics Cards - User Story 1 */}
      <section className={styles.section}>
        <StatsGrid stats={student.stats} />
      </section>

      {/* Two Column Layout */}
      <div className={styles.twoColumn}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Schedule Section - User Story 2 */}
          <section className={styles.section}>
            {scheduleLoading ? (
              <LoadingSpinner text="Завантаження розкладу..." />
            ) : (
              <ScheduleSection
                items={scheduleItems}
                onViewAll={() => console.log('View all schedule')}
              />
            )}
          </section>

          {/* Grades Table - User Story 5 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Поточні оцінки</h2>
            {gradesLoading ? (
              <LoadingSpinner text="Завантаження оцінок..." />
            ) : (
              <GradesTable grades={grades} />
            )}
          </section>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Messages Widget - User Story 4 */}
          <section className={styles.section}>
            {messagesLoading ? (
              <LoadingSpinner text="Завантаження повідомлень..." />
            ) : (
              <MessagesWidget
                messages={messages.slice(0, 5)}
                unreadCount={unreadCount}
                onMessageClick={markAsRead}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
