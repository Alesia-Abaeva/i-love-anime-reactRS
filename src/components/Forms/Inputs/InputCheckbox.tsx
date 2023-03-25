import { FormKeys } from '../../../const/validate-form-keys';
import { Component, createRef, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';

export class InputCheckbox extends Component<InputProps, InputState> {
  checkboxInput: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.checkboxInput = createRef();
  }

  handlerChange() {
    const isCheck = this.checkboxInput.current?.checked ? 'on' : 'off';
    this.props.onChange(isCheck);
  }

  render() {
    return (
      <div className={styles.item_input}>
        <input
          type="checkbox"
          className={`${styles.input_check} ${!this.props.validate ? styles.error : ''}`}
          ref={this.checkboxInput}
          onClick={() => this.handlerChange()}
          id={FormKeys.CHECK}
          data-testid={FormKeys.CHECK}
        />
        <label htmlFor={FormKeys.CHECK} className={(styles.label_check, styles.input_title)}>
          I consent to my personal data
        </label>

        <ErrorMessage
          validate={this.props.validate}
          errorMessage="oooops you need to agree with the claims"
        />
      </div>
    );
  }
}
