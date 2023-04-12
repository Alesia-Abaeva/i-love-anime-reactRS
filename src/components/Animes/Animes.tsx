import React from 'react';

import styles from './Anines.module.scss';
import { AnimeItem } from './AnimeItem/AnimeItem';
import { TITLE } from '../../const/page-title';

interface AnimesProps {
  data: AnimeData[] | undefined;
  open: () => void;
  loading: boolean;
}

export const Animes: React.FC<AnimesProps> = ({ data, open, loading }) => {
  return (
    <div>
      {!loading && (
        <h2 className={styles.countries_title}>{data?.length === 0 ? 'not found' : TITLE.main}</h2>
      )}
      <div className={styles.countries_container}>
        {data?.map((anime) => (
          <AnimeItem data={anime} key={anime.id} open={open} />
        ))}
      </div>
    </div>
  );
};
