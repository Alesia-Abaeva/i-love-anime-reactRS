import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';
import { errorMessageTitile, FormKeys, titleForms } from '../../../const';
import React from 'react';

export const InputCheckbox: React.FC<InputProps> = ({ validate, onChange }) => {
  const refCheked: React.MutableRefObject<HTMLInputElement | null> = React.useRef(null);

  const handlerChange = () => {
    const isCheck = refCheked.current?.checked ? 'on' : 'off';
    onChange(isCheck);
  };

  return (
    <div className={styles.item_input}>
      <input
        type="checkbox"
        className={`${styles.input_check} ${!validate ? styles.error : ''}`}
        onClick={() => handlerChange()}
        id={FormKeys.CHECK}
        ref={refCheked}
        data-testid={FormKeys.CHECK}
      />
      <label htmlFor={FormKeys.CHECK} className={(styles.label_check, styles.input_title)}>
        {titleForms.check}
      </label>

      <ErrorMessage validate={validate} errorMessage={errorMessageTitile.check} />
    </div>
  );
};
