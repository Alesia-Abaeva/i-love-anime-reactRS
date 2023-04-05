import styles from './AnimeItem.module.scss';

interface AnimeItemProps {
  data: AnimeData;
  open: () => void;
}

export const AnimeItem: React.FC<AnimeItemProps> = ({ data, open }) => {
  return (
    <div className={styles.country_item} onClick={open}>
      <div className={styles.item_img}>
        <img
          src={`https://shikimori.one${data.image.preview}`}
          alt={data.name}
          className={styles.img}
        />
      </div>
      <h3 className={styles.item_name}>{data.name}</h3>
      <p>{data.score}</p>
      {/* TODO: отображать рейтинг определенным цветом */}

      <p>{data.aired_on}</p>
      {/* TODO: обрезать дату до года */}

      {/* <p className={styles.item_data}>Region: {data.released_on}</p>
      <p className={styles.item_data}>Area: {data.score} sq.m</p>
      <p className={styles.item_data}>Population: {data.episodes}</p> */}
    </div>
  );
};
