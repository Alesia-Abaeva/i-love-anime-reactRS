import React from 'react';

import styles from './Anines.module.scss';
import { AnineItem } from './AnimeItem/AnineItem';

interface AnimesProps {
  data: Animes[];
}

export const Animes: React.FC<AnimesProps> = ({ data }) => {
  return (
    <div>
      <h2 className={styles.countries_title}>Animes</h2>
      <div className={styles.countries_container}>
        {data.map((anime) => (
          <AnineItem data={anime} key={anime.name} />
        ))}
      </div>
    </div>
  );
};
