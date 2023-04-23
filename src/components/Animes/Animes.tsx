import React from 'react';
import styles from './Animes.module.scss';
import { AnimeItem } from './AnimeItem/AnimeItem';
import { REQUEST_ERROR, TITLE } from '../../const';

interface AnimesProps {
  open: (id?: number) => void;
  loading: boolean;
  data?: AnimeData[];
}

export const Animes: React.FC<AnimesProps> = ({ data, open, loading }) => {
  return (
    <div>
      {!loading && (
        <h2 className={styles.countries_title}>
          {!data?.length ? REQUEST_ERROR.NOT_FOUND : TITLE.main}
        </h2>
      )}
      <div className={styles.countries_container}>
        {data?.map((anime) => (
          <AnimeItem data={anime} key={anime.id} open={open} />
        ))}
      </div>
    </div>
  );
};
