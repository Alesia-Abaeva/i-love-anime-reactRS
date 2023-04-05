import React from 'react';

import styles from './Anines.module.scss';
import { AnimeItem } from './AnimeItem/AnimeItem';

interface AnimesProps {
  data: AnimeData[];
  open: () => void;
}

export const Animes: React.FC<AnimesProps> = ({ data, open }) => {
  return (
    <div>
      <h2 className={styles.countries_title}>Animes</h2>
      <div className={styles.countries_container}>
        {data.map((anime) => (
          <AnimeItem data={anime} key={anime.id} open={open} />
        ))}
      </div>
    </div>
  );
};
