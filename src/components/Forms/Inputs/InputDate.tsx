import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';
import { errorMessageTitile, FormKeys, titleForms } from '../../../const';

export const InputDate: React.FC<InputProps> = ({ validate, register }) => {
  return (
    <div className={styles.item_input}>
      <label htmlFor={FormKeys.DATE} className={styles.input_title}>
        {titleForms.date}
      </label>
      <input
        type="date"
        className={`${styles.input_text} ${validate ? styles.error : ''}`}
        {...register}
        id={FormKeys.DATE}
        data-testid={FormKeys.DATE}
      />

      <ErrorMessage validate={validate} errorMessage={errorMessageTitile.date} />
    </div>
  );
};
