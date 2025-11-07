/**
 * useNavigation Hook - Handle navigation state
 */

import { useState, useCallback } from 'react';

interface UseNavigationReturn {
  activeRoute: string;
  navigate: (path: string) => void;
}

export function useNavigation(initialRoute = '/'): UseNavigationReturn {
  const [activeRoute, setActiveRoute] = useState(initialRoute);

  const navigate = useCallback((path: string) => {
    setActiveRoute(path);
    // In a real app, this would use React Router
    // For now, just update state
  }, []);

  return {
    activeRoute,
    navigate,
  };
}
