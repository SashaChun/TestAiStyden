/**
 * Icon Component - SVG wrapper
 */

import styles from './Icon.module.css';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = ({ name, size = 24, color = 'currentColor', className = '' }: IconProps) => {
  // For now, return a placeholder
  // Icons will be added from Figma in T035
  return (
    <span
      className={`${styles.icon} ${className}`}
      style={{
        width: size,
        height: size,
        color: color,
      }}
      role="img"
      aria-label={name}
    >
      {/* SVG icon will be rendered here based on name */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill={color} opacity="0.1" />
      </svg>
    </span>
  );
};
