import styles from './Pages.module.scss';
import { useHttp, useModal, useMount, useUnmount } from '../hooks';
import { AnimeData, Animes, ErrorMessage, Modal, Pagination, Search, Spinner } from '../components';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { searchSlice } from '../store/reducers/SearchSlice';
import { defaultValueApi, getCurrentPage, setLocalStorage } from '../utils';

export const Home = () => {
  const { search } = useAppSelector((state) => state.searchReducer);
  const { setSearch } = searchSlice.actions;
  const dispatch = useAppDispatch();

  const [page, setPages] = React.useState(1);
  const { openModal, closeModal, modal } = useModal();
  const [clickedData, setClickedData] = React.useState<null | string>(null);
  const { loading, error, data: animes, request } = useHttp<AnimeData[]>([]);

  const getCountries = async (page: number, search?: string) => {
    request(defaultValueApi(page, search));
  };

  const handleSearchChange = (value: string) => dispatch(setSearch(value));

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

  const handlerClickedData = (id?: string) => {
    openModal();
    setClickedData(id as string);
  };

  // ==============

  return (
    <main className={styles.home_page}>
      <Search value={search} onSearchChange={handleSearchChange} handleClick={handleClick} />

      {loading && <Spinner />}
      {error && <ErrorMessage errorMessage={error} />}
      <Animes data={animes} open={handlerClickedData} loading={loading} />
      {!loading && !error && !animes && <Pagination onClickChange={handlerChangePage} />}

      {modal && (
        <Modal onClose={closeModal} title={'ANIME'}>
          <AnimeData id={clickedData} />
        </Modal>
      )}
    </main>
  );
};
