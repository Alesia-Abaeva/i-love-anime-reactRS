import React from 'react';

import styles from './Anines.module.scss';
import { AnineItem } from './AnimeItem/AnineItem';

interface AnimesProps {
  data: Animes[];
  open: () => void;
}

export const Animes: React.FC<AnimesProps> = ({ data, open }) => {
  return (
    <div>
      <h2 className={styles.countries_title}>Animes</h2>
      <div className={styles.countries_container}>
        {data.map((anime) => (
          <AnineItem data={anime} key={anime.id} open={open} />
        ))}
      </div>
    </div>
  );
};
