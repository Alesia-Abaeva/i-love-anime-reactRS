import { Component, createRef, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FormKeys } from '../Forms';
import styles from './Input.module.scss';

export class InputText extends Component<InputProps, InputState> {
  titleInput: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.titleInput = createRef();
  }

  handlerChange() {
    this.props.onChange(this.titleInput.current?.value ?? '');
  }

  render() {
    return (
      <div className={styles.item_input}>
        <label className={styles.input_title} htmlFor={FormKeys.TITLE}>
          Enter the name of the flag
        </label>
        <input
          type="text"
          className={`${styles.input_text} ${!this.props.validate ? styles.error : ''}`}
          ref={this.titleInput}
          onChange={() => this.handlerChange()}
          id={FormKeys.TITLE}
        />
        <ErrorMessage validate={this.props.validate} errorMessage="Error press valid data" />
      </div>
    );
  }
}
