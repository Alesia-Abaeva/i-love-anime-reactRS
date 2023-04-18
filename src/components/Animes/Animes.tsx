import React from 'react';
import styles from './Anines.module.scss';
import { AnimeItem } from './AnimeItem/AnimeItem';
import { REQUEST_ERROR, TITLE } from '../../const';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface AnimesProps {
  data: AnimeData[] | undefined;
  open: () => void;
  loading: boolean;
  error?: FetchBaseQueryError | SerializedError;
}

export const Animes: React.FC<AnimesProps> = ({ data, open, loading, error }) => {
  return (
    <div>
      {!loading && !error && (
        <h2 className={styles.countries_title}>
          {data?.length === 0 ? REQUEST_ERROR.NOT_FOUND : TITLE.main}
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
