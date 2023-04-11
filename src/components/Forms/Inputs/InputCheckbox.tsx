import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';
import { FormKeys, titleForms } from '../../../const';
import React from 'react';

export const InputCheckbox: React.FC<InputProps> = ({ validate, register }) => {
  return (
    <div className={`${styles.item_input} ${styles.item_check}`}>
      <input
        {...register}
        type="checkbox"
        className={`${styles.input_check} ${validate ? styles.error : ''}`}
        id={FormKeys.CHECK}
        data-testid={FormKeys.CHECK}
      />
      <label htmlFor={FormKeys.CHECK} className={(styles.label_check, styles.input_title)}>
        {titleForms.check}
      </label>

      <ErrorMessage validate={validate} />
    </div>
  );
};
