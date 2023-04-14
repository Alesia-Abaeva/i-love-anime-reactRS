import HTMLReactParser from 'html-react-parser';
import { useFetchIDAnimeQuery } from '../../../service/AnimeService';
import { AnimeDataLoading } from './AnimeDataLoading';
import styles from './AnimeData.module.scss';
import { ANIME_API } from '../../../const';

interface AnimeDataProps {
  id: string | number | null;
}

export const AnimeData: React.FC<AnimeDataProps> = ({ id }) => {
  const { data, isLoading } = useFetchIDAnimeQuery(id as string);

  if (isLoading || !data) {
    return (
      <>
        <AnimeDataLoading />
      </>
    );
  }

  return (
    <>
      <div className={`${styles.anime_data_cnt}`}>
        <div className={styles.left_side}>
          <div className={styles.img_cnt}>
            <img
              src={`${ANIME_API}${data?.image?.original}`}
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
            <span> Aired on: </span>
            {data?.aired_on?.slice(0, 4)}
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
    </>
  );
};
