import { errorMessageTitile, FormKeys, titleForms } from '../../../const';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import styles from './Input.module.scss';

export const InputText: React.FC<InputProps> = ({ validate, onChange }) => {
  return (
    <div className={styles.item_input}>
      <label className={styles.input_title} htmlFor={FormKeys.TITLE}>
        {titleForms.title}
      </label>
      <input
        type="text"
        className={`${styles.input_text} ${!validate ? styles.error : ''}`}
        onChange={(event) => onChange(event.target.value)}
        id={FormKeys.TITLE}
        data-testid={FormKeys.TITLE}
      />
      <ErrorMessage validate={validate} errorMessage={errorMessageTitile.title} />
    </div>
  );
};
