import { Card, Forms, Modal } from '../components';
import React from 'react';
import styles from './Pages.module.scss';
import { TITLE } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { formValueSelector } from '../store/selectors/form';
import { setCards } from '../store/reducers/FormSlice';

export const FormPage = () => {
  const [cards, setCards] = React.useState<NewCard[]>([]);
  const [modal, setModal] = React.useState(false);


  const formState1 = useAppSelector(formValueSelector);
  const dispatch = useAppDispatch();

  const addCard = (newCard: NewCard) => dispatch(setCards(newCard));

  const showModal = (isShow: boolean) => {
    setModal(isShow);

    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  return (
    <div className={styles.form_page}>
      <div className={styles.form_page_cnt}>
        <h2>{TITLE.form}</h2>
        <Forms addCard={addCard} showModal={showModal} />
      </div>
      <Card data={formState1.cards} />
      {modal && <Modal onClose={() => showModal(false)} title="Hoooray data send!" />}
    </div>
  );
};
