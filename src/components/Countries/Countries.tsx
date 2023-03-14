import React, { Component } from 'react';
import { CountryItem } from './CountryItem/CountryItem';
import './Countries.css';

interface CountriesProps {
  data: CountriesData[];
}

export class Countries extends Component<CountriesProps> {
  constructor(props: CountriesProps) {
    super(props);
  }

  render() {
    return (
      <div className="countries_container">
        {this.props.data.map((country, index) => (
          <CountryItem data={country} key={index} />
        ))}
      </div>
    );
  }
}
