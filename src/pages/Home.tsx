import React from 'react';
import axios, { AxiosError } from 'axios';
import { useMount, useUnmount } from '../hooks';
import { getStoredSearch, setLocalStorage } from '../utils/get-local';
import { Search } from '../components/Search/Search';
import { Animes } from '../components/Countries/Animes';
import { Pagination } from '../components/Pagination/Pagination';
import { defaultValueApi, getCurrentPage } from '../utils';
import { Spinner } from '../components/Spinner/Spinner';
import { ErrorMessage } from '../components/Forms/ErrorMessage/ErrorMessage';
import styles from './Pages.module.scss';

export const Home = () => {
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

  return (
    <div className={styles.home}>
      <Search value={search} onSearchChange={handleSearchChange} />
      {loading && <Spinner />}
      {error && <ErrorMessage errorMessage={error} />}

      <Animes data={animes} />
      <Pagination onClickChange={handlerChangePage} />
    </div>
  );
};
