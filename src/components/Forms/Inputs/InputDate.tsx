import { Component, createRef, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FormKeys } from '../../../const/validate-form-keys';
import styles from './Input.module.scss';

export class InputDate extends Component<InputProps, InputState> {
  dateInput: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.dateInput = createRef();
  }

  handlerChange() {
    this.props.onChange(this.dateInput.current?.value ?? '');
  }

  render() {
    return (
      <div className={styles.item_input}>
        <label htmlFor={FormKeys.DATE} className={styles.input_title}>
          Flag creation date
        </label>
        <input
          type="date"
          className={`${styles.input_text} ${!this.props.validate ? styles.error : ''}`}
          ref={this.dateInput}
          onChange={() => this.handlerChange()}
          id={FormKeys.DATE}
          data-testid={FormKeys.DATE}
        />

        <ErrorMessage
          validate={this.props.validate}
          errorMessage="the flag could not be created in the future"
        />
      </div>
    );
  }
}
