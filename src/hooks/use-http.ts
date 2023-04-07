import axios, { AxiosError } from 'axios';
import React from 'react';

export const useHttp = <T>(initialData?: T) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);
  const [data, setData] = React.useState<T | undefined>(initialData);

  const request = React.useCallback(async (url: string) => {
    try {
      setError(null);
      setLoading(true);
      const response = await axios.get<T>(url);
      setData(response.data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = React.useCallback(() => setError(null), []);

  return { loading, error, data, request, clearError };
};
