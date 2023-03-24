import { Component, createRef, memo, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FormKeys } from '../Forms';
import styles from './Input.module.scss';

class TextAreaComponent extends Component<InputProps, InputState> {
  titleInput: RefObject<HTMLTextAreaElement>;

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
        <label className={styles.input_title} htmlFor={FormKeys.DECSRIPTIONS}>
          Enter the description of the flag
        </label>
        <textarea
          className={`${styles.input_text} ${styles.text_area} ${
            !this.props.validate ? styles.error : ''
          }`}
          ref={this.titleInput}
          onChange={() => this.handlerChange()}
          id={FormKeys.DECSRIPTIONS}
          data-testid={FormKeys.DECSRIPTIONS}
        />
        <ErrorMessage validate={this.props.validate} errorMessage="Error press valid data" />
      </div>
    );
  }
}

export const TextArea = memo(TextAreaComponent);
