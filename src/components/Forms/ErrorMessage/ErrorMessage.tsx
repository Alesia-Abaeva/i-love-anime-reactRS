import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  validate: boolean | undefined;
  errorMessage: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ validate, errorMessage }) => {
  return (
    <span className={`${styles.error_title} ${!validate ? styles.error_active : ''}`}>
      {!validate && errorMessage}
    </span>
  );
};
