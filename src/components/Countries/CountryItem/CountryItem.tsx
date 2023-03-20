import { Component } from 'react';
import './CountryItem.css';

interface CountriesItemProps {
  data: CountriesData;
}

export class CountryItem extends Component<CountriesItemProps> {
  constructor(props: CountriesItemProps) {
    super(props);
  }

  render() {
    return (
      <div className="country-item">
        <div className="item_img">
          <img src={this.props.data.flags.png} alt={this.props.data.name.common} className="img" />
        </div>
        <h3 className="item_name">{this.props.data.name.official}</h3>
        <p className="item_data">Region: {this.props.data.region}</p>
        <p className="item_data">Area: {this.props.data.area} sq.m</p>
        <p className="item_data">Population: {this.props.data.population}</p>
      </div>
    );
  }
}
