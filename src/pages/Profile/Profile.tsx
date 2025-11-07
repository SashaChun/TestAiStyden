/**
 * Profile Page - Student profile with information
 */

import { Avatar } from '../../components/ui/Avatar';
import { Button } from '../../components/ui/Button';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useStudentData } from '../../hooks/useStudentData';
import styles from './Profile.module.css';

export const Profile = () => {
  const { student, isLoading } = useStudentData();

  if (isLoading) {
    return <LoadingSpinner size="lg" text="Завантаження профілю..." />;
  }

  if (!student) {
    return <div className={styles.error}>Помилка завантаження профілю</div>;
  }

  return (
    <div className={styles.page}>
      {/* Profile Header */}
      <div className={styles.header}>
        <Avatar alt={student.fullName} size="xl" />
        <div className={styles.headerInfo}>
          <h1 className={styles.name}>{student.fullName}</h1>
          <p className={styles.email}>{student.group}, {student.course} курс</p>
        </div>
        <Button variant="primary">Редагувати профіль</Button>
      </div>

      {/* Profile Sections */}
      <div className={styles.sections}>
        {/* Personal Information */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Особиста інформація</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>ПІБ:</span>
              <span className={styles.infoValue}>{student.fullName}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Телефон:</span>
              <span className={styles.infoValue}>+380 XX XXX XX XX</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Дата народження:</span>
              <span className={styles.infoValue}>01.01.2000</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Адреса:</span>
              <span className={styles.infoValue}>м. Київ</span>
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Академічна інформація</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Факультет:</span>
              <span className={styles.infoValue}>{student.faculty}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Група:</span>
              <span className={styles.infoValue}>{student.group}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Студентський квиток:</span>
              <span className={styles.infoValue}>№ 123456</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Курс:</span>
              <span className={styles.infoValue}>{student.course}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Форма навчання:</span>
              <span className={styles.infoValue}>Денна</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Рік вступу:</span>
              <span className={styles.infoValue}>2021</span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Статистика</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{student.stats.averageGrade.toFixed(1)}</span>
              <span className={styles.statLabel}>Середній бал</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{student.stats.creditsEarned}/{student.stats.creditsTotal}</span>
              <span className={styles.statLabel}>Кредити</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{student.stats.absences}</span>
              <span className={styles.statLabel}>Пропуски</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{student.stats.debts}</span>
              <span className={styles.statLabel}>Заборгованості</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
