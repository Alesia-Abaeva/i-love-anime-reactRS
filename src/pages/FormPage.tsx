import { Forms } from '../components/Forms/Forms';
import { Card } from '../components/Card/Card';
import { Component, ReactNode } from 'react';
import { Modal } from '../components/Modal/Modal';
import styles from './Pages.module.scss';

interface FormState {
  cards: NewCard[];
  modal: boolean;
}

export class FormPage extends Component<object, FormState> {
  constructor(props: object) {
    super(props);

    this.state = {
      cards: [],
      modal: false,
    };
  }

  addCard(newCard: NewCard) {
    this.setState((prev) => {
      return { ...prev, cards: [...prev.cards, newCard] };
    });
  }

  showModal(isShow: boolean) {
    this.setState({ modal: isShow });

    setTimeout(() => {
      this.setState({ modal: false });
    }, 2000);
  }

  render(): ReactNode {
    return (
      <div className={`${styles.main_container} ${styles.form_page}`}>
        <div>
          <h2>Add another flag</h2>
          <Forms addCard={this.addCard.bind(this)} showModal={this.showModal.bind(this)} />
        </div>
        <Card data={this.state.cards} />
        {this.state.modal && <Modal onClose={() => this.showModal(false)} />}
      </div>
    );
  }
}
