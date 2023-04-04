import styles from './Input.module.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FormKeys, selectOptions, titleForms } from '../../../const';

export const InputSelect: React.FC<InputProps> = ({ validate, register }) => {
  return (
    <div className={styles.item_input}>
      <label htmlFor={FormKeys.SELECT} className={styles.input_title}>
        {titleForms.select}
      </label>
      <select
        className={`${styles.input_select} ${validate ? styles.error : ''}`}
        id={FormKeys.SELECT}
        data-testid={FormKeys.SELECT}
        {...register}
      >
        {selectOptions.map((options, index) => {
          return (
            <option value={options} key={index}>
              {options}
            </option>
          );
        })}
      </select>

      <ErrorMessage validate={validate} />
    </div>
  );
};
