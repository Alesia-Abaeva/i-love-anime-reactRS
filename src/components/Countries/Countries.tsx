import React from 'react';
import { CountryItem } from './CountryItem/CountryItem';
import styles from './Countries.module.scss';

interface CountriesProps {
  data: CountriesData[];
}

export const Countries: React.FC<CountriesProps> = ({ data }) => {
  return (
    <div>
      <h2 className={styles.countries_title}>Countries</h2>
      <div className={styles.countries_container}>
        {data.map((country) => (
          <CountryItem data={country} key={country.name.common} />
        ))}
      </div>
    </div>
  );
};
