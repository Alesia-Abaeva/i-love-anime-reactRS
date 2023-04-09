import { TITLE } from '../const/page-title';
import { Link } from 'react-router-dom';
import styles from './Pages.module.scss';
import { Page404 } from '../components/404/404';

export const NotFound = () => {
  return (
    <>
      <div className={styles.canvas_page}>
        <Page404 />
      </div>
    </>

    // <div className={styles.not_found_page}>
    //   <h2>{TITLE[404]}</h2>
    //   <Link to="/" className={styles.main_link}>
    //     main
    //   </Link>
    // </div>
  );
};
