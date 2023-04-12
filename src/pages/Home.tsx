import styles from './Pages.module.scss';
import { useModal } from '../hooks';
import { AnimeData, Animes, ErrorMessage, Modal, Pagination, Search, Spinner } from '../components';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSearch, setAnime } from '../store/reducers/SearchSlice';
import { getCurrentPage } from '../utils';
import { useFetchAllAnimeQuery } from '../service/AnimeService';
import { searchValueSelector } from '../store/selectors/search';

export const Home = () => {
  const search = useAppSelector(searchValueSelector);

  // ====
  const [enterSearch, setEnterSearch] = React.useState(search);
  // TODO: delete this?

  console.log(enterSearch);
  const dispatch = useAppDispatch();

  const [page, setPages] = React.useState(1);

  const { data: animes, error, isLoading } = useFetchAllAnimeQuery({ page, search: enterSearch });

  const { openModal, closeModal, modal } = useModal();
  const [clickedData, setClickedData] = React.useState<null | string>(null);

  const handleSearchChange = (value: string) => dispatch(setSearch(value));

  const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setEnterSearch(search);
      dispatch(setAnime(animes as AnimeData[]));
    }
  };

  const handlerChangePage = (direction: string) => {
    const current = getCurrentPage(direction, page, animes as AnimeData[]);
    current && setPages(current);
  };

  const handlerClickedData = (id?: string) => {
    openModal();
    setClickedData(id as string);
  };

  // ==============

  return (
    <main className={styles.home_page}>
      <Search value={search} onSearchChange={handleSearchChange} handleClick={handleClick} />

      {isLoading && <Spinner />}
      {error && <ErrorMessage errorMessage={'ошибочка'} />}
      <Animes data={animes} open={handlerClickedData} loading={isLoading} />
      {!isLoading && !error && animes && <Pagination onClickChange={handlerChangePage} />}

      {modal && (
        <Modal onClose={closeModal} title={'ANIME'}>
          <AnimeData id={clickedData} />
        </Modal>
      )}
    </main>
  );
};
