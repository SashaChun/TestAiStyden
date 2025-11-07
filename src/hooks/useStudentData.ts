/**
 * useStudentData Hook - Fetch and manage student data
 */

import { useState, useEffect } from 'react';
import { studentService } from '../services/studentService';
import type { Student } from '../types';

interface UseStudentDataReturn {
  student: Student | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useStudentData(): UseStudentDataReturn {
  const [student, setStudent] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchStudent = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await studentService.getStudent();
      setStudent(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch student data'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return {
    student,
    isLoading,
    error,
    refetch: fetchStudent,
  };
}
