import { Search } from '../components/Search/Search';

import { Pagination } from '../components/Pagination/Pagination';
import { Spinner } from '../components/Spinner/Spinner';
import { ErrorMessage } from '../components/Forms/ErrorMessage/ErrorMessage';
import { useHome } from '../hooks/use-home';
import styles from './Pages.module.scss';
import { Animes } from '../components/Animes/Animes';

export const Home = () => {
  const { animes, loading, error, search, handleSearchChange, handlerChangePage } = useHome();

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
