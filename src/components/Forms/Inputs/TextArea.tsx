import styles from './Input.module.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FormKeys, titleForms } from '../../../const';
import { memo } from 'react';

export const TextAreaComponent: React.FC<InputProps> = ({ validate, register }) => {
  return (
    <div className={styles.item_input}>
      <label className={styles.input_title} htmlFor={FormKeys.DESCRIPTIONS}>
        {titleForms.description}
      </label>
      <textarea
        className={`${styles.input_text} ${styles.text_area} ${validate ? styles.error : ''}`}
        id={FormKeys.DESCRIPTIONS}
        data-testid={FormKeys.DESCRIPTIONS}
        {...register}
      />
      <ErrorMessage validate={validate} />
    </div>
  );
};

export const TextArea = memo(TextAreaComponent);
