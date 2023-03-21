import { Forms } from '../components/Forms/Forms';
import { Card } from '../components/Card/Card';
import { Component, ReactNode } from 'react';
import './Pages.module.scss';

interface FormState {
  cards: NewCard[];
}

export class FormPage extends Component<object, FormState> {
  constructor(props: object) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  addCard(newCard: NewCard) {
    this.setState((prev) => {
      return { ...prev, cards: [...prev.cards, newCard] };
    });
  }

  render(): ReactNode {
    return (
      <div className="main_form container">
        <Forms addCard={this.addCard.bind(this)} />
        <Card data={this.state.cards} />
      </div>
    );
  }
}
