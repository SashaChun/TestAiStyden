/**
 * Application routes
 */

export const ROUTES = {
  HOME: '/',
  SCHEDULE: '/schedule',
  GRADES: '/grades',
  GRADEBOOK: '/gradebook',
  MESSAGES: '/messages',
  PROFILE: '/profile',
  SETTINGS: '/settings',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
