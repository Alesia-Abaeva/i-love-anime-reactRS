import { Forms } from '../components/Forms/Forms';
import { Card } from '../components/Card/Card';
import { Component, ReactNode } from 'react';
import './Pages.css';

interface FormState {
  cards: NewCard[];
}

export class FormPage extends Component<object, FormState> {
  constructor(props: object) {
    super(props);

    this.state = {
      cards: [] as NewCard[],
    };
  }

  addCard(newCard: NewCard) {
    this.setState(({ cards: prev }) => {
      return { cards: [...prev, newCard] };
    });
  }

  render(): ReactNode {
    return (
      <div className="main_form container">
        <Forms addCard={this.addCard} />
        <Card data={this.state.cards} />
      </div>
    );
  }
}
