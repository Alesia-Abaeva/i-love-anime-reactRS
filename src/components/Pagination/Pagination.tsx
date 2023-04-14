import { DIRECTION } from '../../const/direction-button';
import styles from './Pagination.module.scss';

interface PaginationProps {
  onClickChange: (direction: string) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ onClickChange }) => {
  return (
    <div className={styles.pagination_cnt}>
      <button data-testid={DIRECTION.PREV} onClick={() => onClickChange(DIRECTION.PREV)}>
        {DIRECTION.PREV}
      </button>
      <button data-testid={DIRECTION.NEXT} onClick={() => onClickChange(DIRECTION.NEXT)}>
        {DIRECTION.NEXT}
      </button>
    </div>
  );
};
