import styles from './AnimeData.module.scss';

export const AnimeDataLoading = () => {
  return (
    <>
      <div className={`${styles.anime_data_cnt} ${styles.anime_loading}`}>
        <div className={styles.left_side}>
          <div className={styles.img_cnt}></div>
        </div>

        <div className={styles.right_side}>
          <h3 className={styles.anime_name}>Loading...</h3>
          <p className={styles.anime_text}></p>
          <p className={styles.anime_text}></p>
          <p className={styles.anime_text}></p>
          <p className={styles.anime_text}></p>
          <p className={styles.anime_name_ru}></p>
          <p className={styles.anime_descr}></p>
        </div>
      </div>
    </>
  );
};
