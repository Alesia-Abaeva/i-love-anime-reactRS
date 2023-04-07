import HTMLReactParser from 'html-react-parser';
import { useMount, useHttp } from '../../../hooks';
import { idRequest } from '../../../utils';
import styles from './AnimeData.module.scss';

interface AnimeDataProps {
  id: string | number | null;
}

export const AnimeData: React.FC<AnimeDataProps> = ({ id }) => {
  const { loading, error, data, request } = useHttp<AnimeIdData>();

  // const { name, image } = data as AnimeIdData;

  console.log(data, id);

  useMount(() => {
    request(idRequest(id as string));
  });

  return (
    <div className={styles.anime_data_cnt}>
      <div className={styles.left_side}>
        <div className={styles.img_cnt}>
          <img
            src={`https://shikimori.one${data?.image?.original}`}
            alt={data?.name}
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.right_side}>
        <h3 className={styles.anime_name}>{data?.name}</h3>

        <p className={styles.anime_text}>
          <span> Status:</span> {data?.status}
        </p>
        <p className={styles.anime_text}>
          <span> Aired on:</span>
          {data?.aired_on}
        </p>
        <p className={styles.anime_text}>
          <span> Duration: </span>
          {data?.duration} min.
        </p>
        <p className={styles.anime_text}>
          <span> Genres:</span>

          {data?.genres.map((genres) => genres.name + ' ')}
        </p>
        <p className={styles.anime_name_ru}>
          <span>Name_ru:</span> {data?.russian}
        </p>

        {HTMLReactParser(`${data?.description_html}`)}
      </div>
    </div>
  );
};
