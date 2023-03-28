import styles from './Input.module.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { errorMessageTitile, FormKeys, selectOptions, titleForms } from '../../../const';

export const InputSelect: React.FC<InputProps> = ({ validate, onChange }) => {
  return (
    <div className={styles.item_input}>
      <label htmlFor={FormKeys.SELECT} className={styles.input_title}>
        {titleForms.select}
      </label>
      <select
        className={`${styles.input_select} ${!validate ? styles.error : ''}`}
        onChange={(event) => onChange(event.target.value)}
        id={FormKeys.SELECT}
        data-testid={FormKeys.SELECT}
      >
        {selectOptions.map((options, index) => {
          return (
            <option value={options} key={index}>
              {options}
            </option>
          );
        })}
      </select>

      <ErrorMessage validate={validate} errorMessage={errorMessageTitile.select} />
    </div>
  );
};
