/**
 * CircularProgress Component - For displaying grades
 */

import styles from './CircularProgress.module.css';

export interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
  className?: string;
}

export const CircularProgress = ({
  value,
  max = 100,
  size = 48,
  strokeWidth = 4,
  showValue = true,
  className = '',
}: CircularProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  // Color based on percentage
  const getColor = (percent: number): string => {
    if (percent >= 90) return 'var(--color-green-500)';
    if (percent >= 75) return 'var(--color-blue-500)';
    if (percent >= 60) return 'var(--color-orange-500)';
    return 'var(--color-red-500)';
  };

  const color = getColor(percentage);

  return (
    <div className={`${styles.container} ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className={styles.svg}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-gray-200)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={styles.progress}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      {showValue && (
        <div className={styles.value} style={{ fontSize: size * 0.3 }}>
          {Math.round(value)}
        </div>
      )}
    </div>
  );
};
