import styles from './Pagination.module.scss';

export const Pagination =
  // : React.FC<AnineItemProps>
  () => {
    return (
      <div className={styles.pagination_cnt}>
        <button>prev</button>
        <button>next</button>
      </div>
    );
  };
