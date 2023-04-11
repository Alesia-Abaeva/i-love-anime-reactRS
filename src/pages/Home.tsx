import styles from './Pages.module.scss';
import { useHome, useModal } from '../hooks';
import { AnimeData, Animes, ErrorMessage, Modal, Pagination, Search, Spinner } from '../components';
import React from 'react';

export const Home = () => {
  const { animes, loading, error, search, handleSearchChange, handlerChangePage, handleClick } =
    useHome();
  const { openModal, closeModal, modal } = useModal();
  const [clickedData, setClickedData] = React.useState<null | string>(null);

  const handlerClickedData = (id?: string) => {
    openModal();
    setClickedData(id as string);
  };

  return (
    <main className={styles.home_page}>
      <Search value={search} onSearchChange={handleSearchChange} handleClick={handleClick} />

      {loading && <Spinner />}
      {error && <ErrorMessage errorMessage={error} />}
      {/* {!animes?.length && <ErrorMessage errorMessage="not found" />} */}

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
