import { Component } from 'react';

interface CardItemProps {
  data: NewCard;
}

export class CardItem extends Component<CardItemProps> {
  constructor(props: CardItemProps) {
    super(props);
  }

  // TODO: сверстать страничку
  render() {
    return (
      <div className="country-item">
        <div className="item_img">
          <img src={this.props.data.file as string} alt={this.props.data.title} className="img" />
        </div>
        <h3 className="item_name">{this.props.data.title}</h3>
        <p className="item_data">Region: {this.props.data.title}</p>
        <p className="item_data">Area: {this.props.data.title} sq.m</p>
        <p className="item_data">Population: {this.props.data.title}</p>
      </div>
    );
  }
}
