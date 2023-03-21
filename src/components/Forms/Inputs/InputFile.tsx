import { Component, createRef, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';

export class InputFile extends Component<InputProps, InputState> {
  fileInput: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.fileInput = createRef();

    this.state = {
      value: '',
    };
  }

  handlerChange() {
    this.props.onChange(this.fileInput.current?.value ?? '');
    this.setState({ value: this.fileInput.current?.value as string });
  }

  render() {
    return (
      <div className={styles.item_input}>
        <label htmlFor="input_file" className={styles.input_title}>
          Upload flag
        </label>
        <input
          type="file"
          className={`${styles.input_text} ${styles.input_file} ${
            !this.props.validate ? styles.error : ''
          }`}
          ref={this.fileInput}
          accept={'.jpg, .jpeg, .png'}
          onChange={() => this.handlerChange()}
          id="input_file"
        />

        <ErrorMessage validate={this.props.validate} errorMessage="download picture" />
      </div>
    );
  }
}
