import styles from './Input.module.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FormKeys, titleForms } from '../../../const';
import React from 'react';

export const InputRadio: React.FC<InputProps> = ({ validate, register }) => {
  return (
    <div className={`${styles.item_input} ${styles.input_colum}`}>
      <h3 className={styles.input_title}>{titleForms.radio}</h3>
      <div className={styles.radio_container}>
        <input
          type="radio"
          className={styles.input_radio}
          id={FormKeys.RADIO}
          name="group-1"
          value="yes"
          {...register}
        />
        <label htmlFor={FormKeys.RADIO}>yes</label>

        <input
          type="radio"
          className={styles.input_radio}
          id="radio-no"
          name="group-1"
          value="no"
          data-testid={FormKeys.RADIO}
          {...register}
        />
        <label htmlFor="radio-no">no</label>
      </div>

      <ErrorMessage validate={validate} />
    </div>
  );
};
