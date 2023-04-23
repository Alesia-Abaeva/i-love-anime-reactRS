import { ANIME_API } from '../../../const';
import styles from './AnimeItem.module.scss';

interface AnimeItemProps {
  data: AnimeData;
  open: (id?: number) => void;
}

export const AnimeItem: React.FC<AnimeItemProps> = ({ data, open }) => {
  return (
    <div className={styles.country_item} onClick={() => open(data.id)}>
      <div className={styles.item_img}>
        <img src={`${ANIME_API}${data.image.original}`} alt={data.name} className={styles.img} />
      </div>
      <h3 className={styles.item_name}>{data.name}</h3>

      <div className={styles.item_description}>
        <p>{data.score}</p>
        <p>{data.aired_on?.slice(0, 4)}</p>
      </div>
    </div>
  );
};
