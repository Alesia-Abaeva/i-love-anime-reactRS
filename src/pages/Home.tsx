import React from 'react';
import axios from 'axios';
import { LOCAL_STORAGE_KEYS } from '../const/local-storage';
import { Search } from '../components/Search/Search';
import { Countries } from '../components/Countries/Countries';
import { useMount, useUnmount } from '../hooks';
import { getStoredSearch } from '../utils/get-local';

export const Home = () => {
  const [search, setSearch] = React.useState(getStoredSearch);
  const [countries, setCountries] = React.useState<CountriesData[]>([]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const getCountries = async () => {
    try {
      const response = await axios.get<CountriesData[]>('https://restcountries.com/v3.1/all');
      setCountries([...countries, ...response.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const filterCountries = () => {
    return countries.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    });
  };

  useMount(() => {
    getCountries();
  });

  const setLocalStorage = () =>
    localStorage.setItem(LOCAL_STORAGE_KEYS.INPUT_VALUE, JSON.stringify(search));

  useUnmount(() => setLocalStorage());

  return (
    <div>
      <Search value={search} onSearchChange={handleSearchChange} />
      <Countries data={filterCountries()} />
    </div>
  );
};
