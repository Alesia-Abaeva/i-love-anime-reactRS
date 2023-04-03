import React from 'react';
import axios from 'axios';
import { useMount, useUnmount } from '../hooks';
import { getStoredSearch, setLocalStorage } from '../utils/get-local';
import { Search } from '../components/Search/Search';
import { Animes } from '../components/Countries/Animes';
import { Pagination } from '../components/Pagination/Pagination';
import { defaultValueApi, getCurrentPage } from '../utils';

export const Home = () => {
  const [search, setSearch] = React.useState(getStoredSearch);
  const [animes, setAnimes] = React.useState<Animes[]>([]);
  const [page, setPages] = React.useState(1);

  const getCountries = async (page: number, search?: string) => {
    try {
      const response = await axios.get<Animes[]>(defaultValueApi(page, search));
      setAnimes([...response.data]);
    } catch (e) {
      console.log(e);
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
    <div>
      <Search value={search} onSearchChange={handleSearchChange} />
      <Animes data={animes} />
      <Pagination onClickChange={handlerChangePage} />
    </div>
  );
};
