import axios, { AxiosError } from 'axios';
import React from 'react';
import { defaultValueApi, getCurrentPage, getStoredSearch, setLocalStorage } from '../utils';
import { useMount } from './use-mount';
import { useUnmount } from './use-unmount';

export const useHome = () => {
  const [search, setSearch] = React.useState(getStoredSearch);
  const [animes, setAnimes] = React.useState<Animes[]>([]);
  const [page, setPages] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const getCountries = async (page: number, search?: string) => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<Animes[]>(defaultValueApi(page, search));
      setAnimes([...response.data]);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    getCountries(page, value);
  };

  const handlerChangePage = (direction: string) => {
    const current = getCurrentPage(direction, page, animes);
    current && getCountries(current);
    current && setPages(current);
  };

  useMount(() => {
    getCountries(page, search);
  });

  useUnmount(() => setLocalStorage(search));

  return { animes, loading, error, search, handleSearchChange, handlerChangePage };
};
