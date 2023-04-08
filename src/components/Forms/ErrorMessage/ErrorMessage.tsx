import { FieldError } from 'react-hook-form';
import { random_img } from '../../../utils/random-background';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  validate?: FieldError;
  errorMessage?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ validate, errorMessage }) => {
  const backStyle = {
    backgroundImage: `url('${random_img()}')`,
  };

  return (
    <>
      <span className={`${styles.error_title} ${validate ? styles.error_active : ''}`}>
        {validate && validate.message}
        {errorMessage}
      </span>
      {errorMessage && <div className={styles.error_img} style={backStyle}></div>}
    </>
  );
};
