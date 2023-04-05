import { Search } from '../components/Search/Search';
import { Pagination } from '../components/Pagination/Pagination';
import { Spinner } from '../components/Spinner/Spinner';
import { ErrorMessage } from '../components/Forms/ErrorMessage/ErrorMessage';
import styles from './Pages.module.scss';
import { Animes } from '../components/Animes/Animes';
import { Modal } from '../components/Modal/Modal';
import { useHome, useModal } from '../hooks';

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
