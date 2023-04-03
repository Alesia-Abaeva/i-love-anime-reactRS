import { DIRECTION } from '../../const/direction-button';
import styles from './Pagination.module.scss';

interface PaginationProps {
  onClickChange: (direction: string) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ onClickChange }) => {
  return (
    <div className={styles.pagination_cnt}>
      <button onClick={() => onClickChange(DIRECTION.PREV)}>prev</button>
      <button onClick={() => onClickChange(DIRECTION.NEXT)}>next</button>
    </div>
  );
};
