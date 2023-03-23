import { Component, createRef, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';

export class TextArea extends Component<InputProps, InputState> {
  titleInput: RefObject<HTMLTextAreaElement>;

  constructor(props: InputProps) {
    super(props);
    this.titleInput = createRef();

    this.state = {
      value: '',
    };
  }

  handlerChange() {
    this.props.onChange(this.titleInput.current?.value ?? '');
    this.setState({ value: this.titleInput.current?.value as string });
  }

  render() {
    return (
      <div className={styles.item_input}>
        <label className={styles.input_title} htmlFor="text_area">
          Enter the description of the flag
        </label>
        <textarea
          className={`${styles.input_text} ${styles.text_area} ${
            !this.props.validate ? styles.error : ''
          }`}
          ref={this.titleInput}
          onChange={() => this.handlerChange()}
          id="text_area"
        />
        <ErrorMessage validate={this.props.validate} errorMessage="Error press valid data" />
      </div>
    );
  }
}
