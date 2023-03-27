import { CardItem } from './CardItem/CardItem';
import styles from './Card.module.scss';

interface CardProps {
  data: NewCard[];
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className={styles.flag_container}>
      {data.map((card) => (
        <CardItem key={card.title} {...card} />
      ))}
    </div>
  );
};
