/**
 * useSchedule Hook - Fetch schedule for a specific date
 */

import { useState, useEffect } from 'react';
import { scheduleService } from '../services/scheduleService';
import type { ScheduleItem } from '../types';

interface UseScheduleReturn {
  items: ScheduleItem[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useSchedule(date?: string): UseScheduleReturn {
  const [items, setItems] = useState<ScheduleItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchSchedule = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = date
        ? await scheduleService.getScheduleForDate(date)
        : await scheduleService.getTodaySchedule();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch schedule'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, [date]);

  return {
    items,
    isLoading,
    error,
    refetch: fetchSchedule,
  };
}
