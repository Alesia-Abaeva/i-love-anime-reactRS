import { titleForms } from '../../../const/title-forms';
import { Component } from 'react';
import styles from './CardItem.module.scss';

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
      <div className={styles.flag_item}>
        <div className={`${styles.flag_img}  ${styles.img_wrapper}`}>
          <img
            src={this.props.data.file as string}
            alt={this.props.data.title}
            className={styles.img_flag}
          />
        </div>
        <h3 className={styles.item_name}>
          <span>Title:</span> {this.props.data.title}
        </h3>
        <p className={styles.item_data}>
          <span>Data creation:</span>
          {this.props.data.date}
        </p>
        <p className={styles.item_data}>
          <span>{titleForms.select}:</span> {this.props.data.select}
        </p>
        <p className={styles.item_data}>
          <span> {titleForms.radio}:</span>
          {this.props.data.radio}
        </p>
      </div>
    );
  }
}
