import { Component } from 'react';

interface CardItemProps {
  data: NewCard;
}

export class CardItem extends Component<CardItemProps> {
  constructor(props: CardItemProps) {
    super(props);
  }

  render() {
    return (
      <div className="country-item">
        <div className="item_img">
          <img src={this.props.data.img as string} alt={this.props.data.name} className="img" />
        </div>
        <h3 className="item_name">{this.props.data.name}</h3>
        <p className="item_data">Region: {this.props.data.lastname}</p>
        <p className="item_data">Area: {this.props.data.country} sq.m</p>
        <p className="item_data">Population: {this.props.data.date}</p>
      </div>
    );
  }
}
