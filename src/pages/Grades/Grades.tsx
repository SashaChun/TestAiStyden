/**
 * Grades Page - Full grades view with statistics
 */

import { useState, useMemo } from 'react';
import { GradesTable } from '../../components/features/GradesTable';
import { CircularProgress } from '../../components/ui/CircularProgress';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useGrades } from '../../hooks/useGrades';
import styles from './Grades.module.css';

type FilterType = 'all' | 'high' | 'medium' | 'low';

export const Grades = () => {
  const { grades, isLoading } = useGrades();
  const [filter, setFilter] = useState<FilterType>('all');

  // Calculate statistics
  const statistics = useMemo(() => {
    if (grades.length === 0) return null;

    const scores = grades.map(g => (g.score / g.maxScore) * 100);
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);
    const totalCredits = grades.reduce((sum, g) => sum + g.credits, 0);

    return {
      average: Math.round(average),
      highest: Math.round(highest),
      lowest: Math.round(lowest),
      totalSubjects: grades.length,
      totalCredits,
    };
  }, [grades]);

  // Filter grades
  const filteredGrades = useMemo(() => {
    if (filter === 'all') return grades;
    
    return grades.filter(grade => {
      const percentage = (grade.score / grade.maxScore) * 100;
      if (filter === 'high') return percentage >= 90;
      if (filter === 'medium') return percentage >= 75 && percentage < 90;
      if (filter === 'low') return percentage < 75;
      return true;
    });
  }, [grades, filter]);

  if (isLoading) {
    return <LoadingSpinner size="lg" text="Завантаження оцінок..." />;
  }

  return (
    <div className={styles.page}>
      {/* Statistics Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statContent}>
            <CircularProgress value={statistics?.average || 0} size={80} />
            <div className={styles.statInfo}>
              <h3 className={styles.statLabel}>Середній бал</h3>
              <p className={styles.statValue}>{statistics?.average}%</p>
            </div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>📚</div>
          <div className={styles.statInfo}>
            <h3 className={styles.statLabel}>Всього предметів</h3>
            <p className={styles.statValue}>{statistics?.totalSubjects}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>⭐</div>
          <div className={styles.statInfo}>
            <h3 className={styles.statLabel}>Найвища оцінка</h3>
            <p className={styles.statValue}>{statistics?.highest}%</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🎓</div>
          <div className={styles.statInfo}>
            <h3 className={styles.statLabel}>Кредити</h3>
            <p className={styles.statValue}>{statistics?.totalCredits}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <h3 className={styles.filtersTitle}>Фільтр:</h3>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            Всі ({grades.length})
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'high' ? styles.active : ''}`}
            onClick={() => setFilter('high')}
          >
            Відмінно (90%+)
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'medium' ? styles.active : ''}`}
            onClick={() => setFilter('medium')}
          >
            Добре (75-89%)
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'low' ? styles.active : ''}`}
            onClick={() => setFilter('low')}
          >
            Задовільно (&lt;75%)
          </button>
        </div>
      </div>

      {/* Grades Table */}
      <div className={styles.tableSection}>
        <h2 className={styles.sectionTitle}>
          Оцінки {filter !== 'all' && `(${filteredGrades.length})`}
        </h2>
        {filteredGrades.length > 0 ? (
          <GradesTable grades={filteredGrades} />
        ) : (
          <div className={styles.empty}>
            <p>Немає оцінок за обраним фільтром</p>
          </div>
        )}
      </div>
    </div>
  );
};
