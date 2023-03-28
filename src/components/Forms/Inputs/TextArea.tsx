import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FormKeys } from '../../../const/validate-form-keys';
import styles from './Input.module.scss';
import { memo } from 'react';
import { titleForms } from 'const/title-forms';
import { errorMessageTitile } from 'const/error-message';

export const TextAreaComponent: React.FC<InputProps> = ({ validate, onChange }) => {
  return (
    <div className={styles.item_input}>
      <label className={styles.input_title} htmlFor={FormKeys.DECSRIPTIONS}>
        {titleForms.descriprion}
      </label>
      <textarea
        className={`${styles.input_text} ${styles.text_area} ${!validate ? styles.error : ''}`}
        onChange={(event) => onChange(event.target.value)}
        id={FormKeys.DECSRIPTIONS}
        data-testid={FormKeys.DECSRIPTIONS}
      />
      <ErrorMessage validate={validate} errorMessage={errorMessageTitile.descriprion} />
    </div>
  );
};

export const TextArea = memo(TextAreaComponent);
