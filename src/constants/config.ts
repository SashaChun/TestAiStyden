/**
 * Application configuration
 */

export const APP_CONFIG = {
  name: 'UniPortal',
  title: 'Студентський кабінет',
  version: '1.0.0',
  
  // API configuration (for future use)
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
    timeout: 30000,
  },
  
  // Feature flags
  features: {
    darkMode: false,
    notifications: true,
    offline: false,
  },
  
  // UI configuration
  ui: {
    sidebarCollapsible: true,
    defaultPageSize: 10,
    maxUploadSize: 5 * 1024 * 1024, // 5MB
  },
} as const;
