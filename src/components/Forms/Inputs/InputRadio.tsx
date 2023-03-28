import styles from './Input.module.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { errorMessageTitile, FormKeys, titleForms } from '../../../const';
import React from 'react';

export const InputRadio: React.FC<InputProps> = ({ validate, onChange }) => {
  const radioYesRef: React.MutableRefObject<HTMLInputElement | null> = React.useRef(null);
  const radioNoRef: React.MutableRefObject<HTMLInputElement | null> = React.useRef(null);

  const handlerChange = () => {
    const selectRadio = radioYesRef.current?.checked
      ? radioYesRef.current?.value
      : radioNoRef.current?.value;

    onChange(selectRadio ?? '');
  };

  return (
    <div className={styles.item_input}>
      <h3 className={styles.input_title}>{titleForms.radio}</h3>
      <div className={styles.radio_container}>
        <input
          type="radio"
          className={styles.input_radio}
          onClick={() => handlerChange()}
          id={FormKeys.RADIO}
          name="group-1"
          value="yes"
          ref={radioYesRef}
        />
        <label htmlFor={FormKeys.RADIO}>yes</label>

        <input
          type="radio"
          className={styles.input_radio}
          onClick={() => handlerChange()}
          id="radio-no"
          name="group-1"
          value="no"
          ref={radioNoRef}
          data-testid={FormKeys.RADIO}
        />
        <label htmlFor="radio-no">no</label>
      </div>

      <ErrorMessage validate={validate} errorMessage={errorMessageTitile.radio} />
    </div>
  );
};
