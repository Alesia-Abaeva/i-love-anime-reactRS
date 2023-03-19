import React, { Component } from 'react';
import { CountryItem } from './CountryItem/CountryItem';
import styles from './Countries.module.scss';

interface CountriesProps {
  data: CountriesData[];
}

export class Countries extends Component<CountriesProps> {
  constructor(props: CountriesProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className={styles.countries_title}>Countries</h2>
        <div className={styles.countries_container}>
          {this.props.data.map((country, index) => (
            <CountryItem data={country} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
