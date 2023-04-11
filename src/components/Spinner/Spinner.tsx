import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner_container}>
      <div className={styles.loading}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};
