/**
 * Formatting utility functions
 */

/**
 * Format date to Ukrainian locale
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format time to HH:mm
 */
export function formatTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleTimeString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Format relative time (e.g., "2 години тому")
 */
export function formatRelativeTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return 'Щойно';
  if (diffMins < 60) return `${diffMins} хв тому`;
  if (diffHours < 24) return `${diffHours} год тому`;
  if (diffDays === 1) return 'Вчора';
  if (diffDays < 7) return `${diffDays} дн тому`;
  
  return formatDate(date);
}

/**
 * Format grade percentage
 */
export function formatPercentage(value: number, max: number = 100): string {
  const percentage = (value / max) * 100;
  return `${Math.round(percentage)}%`;
}

/**
 * Format student name (capitalize first letters)
 */
export function formatStudentName(firstName: string, lastName: string): string {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return `${capitalize(firstName)} ${capitalize(lastName)}`;
}
