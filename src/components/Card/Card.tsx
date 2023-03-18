import { Component, ReactNode } from 'react';
import { CardItem } from './CardItem/CardItem';

interface CardProps {
  data: NewCard[];
}

export class Card extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div className="countries_container">
        {this.props.data.map((data, index) => (
          <CardItem data={data} key={index} />
        ))}
      </div>
    );
  }
}
