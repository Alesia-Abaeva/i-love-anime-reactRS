import { Forms } from '../components/Forms/Forms';
import { Card } from '../components/Card/Card';
import React from 'react';
import { Modal } from '../components/Modal/Modal';
import styles from './Pages.module.scss';

export const FormPage = () => {
  const [cards, setCards] = React.useState<NewCard[]>([]);
  const [modal, setModal] = React.useState<boolean>(false);

  const addCard = (newCard: NewCard) => setCards([...cards, newCard]);

  const showModal = (isShow: boolean) => {
    setModal(isShow);

    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  return (
    <div className={`${styles.main_container} ${styles.form_page}`}>
      <div>
        <h2>Add another flag</h2>
        <Forms addCard={addCard} showModal={showModal} />
      </div>
      <Card data={cards} />
      {modal && <Modal onClose={() => showModal(false)} title="Hoooray data send!" />}
      {/* TODO: заменить константой */}
    </div>
  );
};
