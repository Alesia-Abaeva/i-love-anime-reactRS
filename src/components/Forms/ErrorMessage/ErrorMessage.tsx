import { FieldError } from 'react-hook-form';
import { randomImg } from '../../../utils';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  validate?: FieldError;
  errorMessage?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ validate, errorMessage }) => {
  const backStyle = {
    backgroundImage: `url('${randomImg()}')`,
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
