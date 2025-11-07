/**
 * useGrades Hook - Fetch student grades
 */

import { useState, useEffect } from 'react';
import { gradeService } from '../services/gradeService';
import type { Grade } from '../types';

interface UseGradesReturn {
  grades: Grade[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useGrades(): UseGradesReturn {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchGrades = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await gradeService.getGrades();
      setGrades(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch grades'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGrades();
  }, []);

  return {
    grades,
    isLoading,
    error,
    refetch: fetchGrades,
  };
}
