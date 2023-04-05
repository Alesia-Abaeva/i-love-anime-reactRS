import styles from './Pages.module.scss';
import { useHome, useModal } from '../hooks';
import { Animes, ErrorMessage, Modal, Pagination, Search, Spinner } from '../components';

export const Home = () => {
  const { animes, loading, error, search, handleSearchChange, handlerChangePage } = useHome();
  const { openModal, closeModal, modal } = useModal();

  return (
    <main className={styles.home_page}>
      <Search value={search} onSearchChange={handleSearchChange} />

      {loading && <Spinner />}
      {error && <ErrorMessage errorMessage={error} />}

      <Animes data={animes} open={openModal} />
      <Pagination onClickChange={handlerChangePage} />

      {modal && <Modal onClose={closeModal} title={'ANIME'}></Modal>}
    </main>
  );
};
