import styles from './Pages.module.scss';
import { useHome, useModal } from '../hooks';
import { AnimeData, Animes, ErrorMessage, Modal, Pagination, Search, Spinner } from '../components';
import React from 'react';

export const Home = () => {
  const { animes, loading, error, search, handleSearchChange, handlerChangePage } = useHome();
  const { openModal, closeModal, modal } = useModal();
  const [clickedData, setClickedData] = React.useState<null | string>(null);

  const handlerClickedData = (id?: string) => {
    openModal();
    setClickedData(id as string);
  };

  return (
    <main className={styles.home_page}>
      <Search value={search} onSearchChange={handleSearchChange} />

      {loading && <Spinner />}
      {error && <ErrorMessage errorMessage={error} />}

      <Animes data={animes} open={handlerClickedData} />
      <Pagination onClickChange={handlerChangePage} />

      {modal && (
        <Modal onClose={closeModal} title={'ANIME'}>
          <AnimeData id={clickedData} />
        </Modal>
      )}
    </main>
  );
};
