import { Link } from 'react-router-dom';
import styles from './AboutData.module.scss';

export const AboutData = () => {
  return (
    <div className={styles.main_about}>
      <h3>Alesia-Abaeva</h3>
      <Link to="https://github.com/Alesia-Abaeva" className={styles.about_link}>
        GitHub
      </Link>
      <h2>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</h2>
    </div>
  );
};
