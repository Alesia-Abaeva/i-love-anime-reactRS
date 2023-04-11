import React from 'react';
import { defaultValueApi, getCurrentPage, getStoredSearch, setLocalStorage } from '../utils';
import { useHttp } from './use-http';
import { useMount } from './use-mount';
import { useUnmount } from './use-unmount';

export const useHome = () => {
  const [search, setSearch] = React.useState(getStoredSearch);
  const [page, setPages] = React.useState(1);
  const { loading, error, data: animes, request } = useHttp<AnimeData[]>([]);

  const getCountries = async (page: number, search?: string) => {
    request(defaultValueApi(page, search));
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      getCountries(page, search);
    }
  };

  const handlerChangePage = (direction: string) => {
    const current = getCurrentPage(direction, page, animes as AnimeData[]);
    if (current) {
      getCountries(current);
      setPages(current);
    }
  };

  useMount(() => {
    getCountries(page, search);
  });

  useUnmount(() => setLocalStorage(search));

  return { animes, loading, error, search, handleSearchChange, handlerChangePage, handleClick };
};
