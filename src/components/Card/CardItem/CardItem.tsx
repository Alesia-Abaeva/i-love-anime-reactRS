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
        <h3 className={styles.flag_name}>
          <span>Title:</span> {this.props.data.title}
        </h3>
        <p className={styles.flag_data}>
          <span>Descriptions:</span>
          <span className={styles.item_descr}>{this.props.data.descriprion}</span>
        </p>
        <p className={styles.flag_data}>
          <span>Data creation:</span>
          <span className={styles.item_descr}> {this.props.data.date}</span>
        </p>
        <p className={styles.flag_data}>
          <span>{titleForms.select}:</span>
          <span className={styles.flag_descr}> {this.props.data.select}</span>
        </p>
        <p className={styles.flag_data}>
          <span> {titleForms.radio}:</span>
          <span className={styles.item_descr}>{this.props.data.radio}</span>
        </p>
      </div>
    );
  }
}
