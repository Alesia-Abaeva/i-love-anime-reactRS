import styles from './CountryItem.module.scss';

interface CountriesItemProps {
  data: CountriesData;
}

export const CountryItem: React.FC<CountriesItemProps> = ({ data }) => {
  return (
    <div className={styles.country_item}>
      <div className={styles.item_img}>
        <img src={data.flags.png} alt={data.name.common} className={styles.img} />
      </div>
      <h3 className={styles.item_name}>{data.name.official}</h3>
      <p className={styles.item_data}>Region: {data.region}</p>
      <p className={styles.item_data}>Area: {data.area} sq.m</p>
      <p className={styles.item_data}>Population: {data.population}</p>
    </div>
  );
};
