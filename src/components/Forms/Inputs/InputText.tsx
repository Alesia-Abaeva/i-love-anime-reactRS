import { FormKeys, titleForms } from '../../../const';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';

export const InputText: React.FC<InputProps> = ({ validate, register }) => {
  return (
    <div className={styles.item_input}>
      <label className={styles.input_title} htmlFor={FormKeys.TITLE}>
        {titleForms.title}
      </label>
      <input
        {...register}
        type="text"
        className={`${styles.input_text} ${validate ? styles.error : ''}`}
        id={FormKeys.TITLE}
        data-testid={FormKeys.TITLE}
      />
      <ErrorMessage validate={validate} />
    </div>
  );
};
