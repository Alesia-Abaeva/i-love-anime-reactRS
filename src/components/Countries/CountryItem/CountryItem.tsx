import styles from './CountryItem.module.scss';

interface CountriesItemProps {
  data: Animes;
}

export const CountryItem: React.FC<CountriesItemProps> = ({ data }) => {
  return (
    <div className={styles.country_item}>
      <div className={styles.item_img}>
        <img
          src={`https://shikimori.one${data.image.preview}`}
          alt={data.name}
          className={styles.img}
        />
      </div>
      <h3 className={styles.item_name}>{data.name}</h3>
      <p className={styles.item_data}>Region: {data.released_on}</p>
      <p className={styles.item_data}>Area: {data.score} sq.m</p>
      <p className={styles.item_data}>Population: {data.episodes}</p>
    </div>
  );
};
