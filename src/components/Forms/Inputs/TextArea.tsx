import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FormKeys } from '../../../const/validate-form-keys';
import styles from './Input.module.scss';
import { memo } from 'react';

export const TextAreaComponent: React.FC<InputProps> = ({ validate, onChange }) => {
  return (
    <div className={styles.item_input}>
      <label className={styles.input_title} htmlFor={FormKeys.DECSRIPTIONS}>
        Enter the description of the flag
      </label>
      <textarea
        className={`${styles.input_text} ${styles.text_area} ${!validate ? styles.error : ''}`}
        onChange={(event) => onChange(event.target.value)}
        id={FormKeys.DECSRIPTIONS}
        data-testid={FormKeys.DECSRIPTIONS}
      />
      <ErrorMessage
        validate={validate}
        errorMessage="describe a little more (more than 10 characters)"
      />
    </div>
  );
};

export const TextArea = memo(TextAreaComponent);
