import React from 'react';
import styles from './AnimeData.module.scss';

export const AnimeDataLoading: React.FC = () => {
  return (
    <div className={`${styles.anime_data_cnt} ${styles.anime_loading}`}>
      <div className={styles.left_side}>
        <div className={styles.img_cnt}></div>
      </div>

      <div className={styles.right_side}>
        <h3 className={styles.anime_name}>Loading...</h3>
      </div>
    </div>
  );
};
