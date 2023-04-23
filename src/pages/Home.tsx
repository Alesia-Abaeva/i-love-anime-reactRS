import styles from './Pages.module.scss';
import { useModal } from '../hooks';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSearch } from '../store/reducers/SearchSlice';
import { getCurrentPage } from '../utils';
import { useFetchAllAnimeQuery } from '../service/AnimeService';
import { searchValueSelector } from '../store/selectors/search';
import { REQUEST_ERROR } from '../const';
import { AnimeData, Animes, ErrorMessage, Modal, Pagination, Search, Spinner } from '../components';

export const Home: React.FC = () => {
  const [clickedData, setClickedData] = React.useState<null | number>(null);
  const [page, setPages] = React.useState(1);
  const { openModal, closeModal, modal } = useModal();

  const search = useAppSelector(searchValueSelector);
  const dispatch = useAppDispatch();
  const { data: animes, error, isLoading } = useFetchAllAnimeQuery({ page, search });

  const [enterSearch, setEnterSearch] = React.useState(search);

  const handleSearchChange = (value: string) => setEnterSearch(value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(setSearch((e.target as HTMLInputElement).value));
    }
  };

  const handlerChangePage = (direction: string) => {
    const current = getCurrentPage(direction, page, animes as AnimeData[]);
    current && setPages(current);
  };

  const handlerClickedData = (id?: number) => {
    if (!id) {
      return null;
    }

    openModal();
    setClickedData(id);
  };

  return (
    <main className={styles.home_page}>
      <Search value={enterSearch} onSearchChange={handleSearchChange} onKeyDown={handleKeyDown} />

      {isLoading && <Spinner />}
      <Animes data={animes} open={handlerClickedData} loading={isLoading} />
      {error && <ErrorMessage errorMessage={REQUEST_ERROR.SERVER_ERR} />}
      {!isLoading && !error && !!animes?.length && <Pagination onClickChange={handlerChangePage} />}

      {modal && clickedData && (
        <Modal onClose={closeModal} title="ANIME">
          <AnimeData id={clickedData} />
        </Modal>
      )}
    </main>
  );
};
