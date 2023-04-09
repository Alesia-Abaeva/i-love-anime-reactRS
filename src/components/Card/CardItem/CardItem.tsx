import { titleForms } from '../../../const/title-forms';
import styles from './CardItem.module.scss';

type CardItemProps = NewCard;

export const CardItem: React.FC<CardItemProps> = (props) => {
  return (
    <div className={styles.flag_item}>
      <div className={`${styles.flag_img}  ${styles.img_wrapper}`}>
        <img src={props.file as string} alt={props.title} className={styles.img_flag} />
      </div>
      <h3 className={styles.flag_name}>
        <span>Title:</span> {props.title}
      </h3>
      <p className={styles.flag_data}>
        <span>Descriptions:</span>
        <span className={styles.item_desc}>{props.description}</span>
      </p>
      <p className={styles.flag_data}>
        <span>Data creation:</span>
        <span className={styles.item_desc}> {props.date}</span>
      </p>
      <p className={styles.flag_data}>
        <span>{titleForms.select}:</span>
        <span className={styles.flag_desc}> {props.select}</span>
      </p>
      <p className={styles.flag_data}>
        <span> {titleForms.radio}:</span>
        <span className={styles.item_desc}>{props.radio}</span>
      </p>
    </div>
  );
};
