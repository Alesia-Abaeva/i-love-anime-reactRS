import { FieldError } from 'react-hook-form';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  validate?: FieldError;
  errorMessage: string;
}

// TODO: переделать компонент - принимаем строчку
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ validate, errorMessage }) => {
  return (
    <span className={`${styles.error_title} ${validate ? styles.error_active : ''}`}>
      {validate && validate.message}
    </span>
  );
};
