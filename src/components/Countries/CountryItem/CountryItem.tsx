import { Component } from 'react';
import styles from './CountryItem.module.scss';

interface CountriesItemProps {
  data: CountriesData;
}

export class CountryItem extends Component<CountriesItemProps> {
  constructor(props: CountriesItemProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.country_item}>
        <div className={styles.item_img}>
          <img
            src={this.props.data.flags.png}
            alt={this.props.data.name.common}
            className={styles.img}
          />
        </div>
        <h3 className={styles.item_name}>{this.props.data.name.official}</h3>
        <p className={styles.item_data}>Region: {this.props.data.region}</p>
        <p className={styles.item_data}>Area: {this.props.data.area} sq.m</p>
        <p className={styles.item_data}>Population: {this.props.data.population}</p>
      </div>
    );
  }
}
