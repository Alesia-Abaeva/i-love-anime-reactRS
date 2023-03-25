import { Component, createRef, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FormKeys } from '../../../const/validate-form-keys';
import styles from './Input.module.scss';

export class InputFile extends Component<InputProps, InputState> {
  fileInput: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.fileInput = createRef();
  }

  handlerChange() {
    const files = URL.createObjectURL(this.fileInput.current?.files?.[0] as Blob);
    this.props.onChange(files ?? '');
  }

  render() {
    return (
      <div className={styles.item_input}>
        <label htmlFor={FormKeys.FILE} className={styles.input_title}>
          Upload flag
        </label>
        <input
          type="file"
          className={`${styles.input_text} ${styles.input_file} ${
            !this.props.validate ? styles.error : ''
          }`}
          ref={this.fileInput}
          accept={'.jpg,.jpeg,.png'}
          onChange={() => this.handlerChange()}
          id={FormKeys.FILE}
          data-testid={FormKeys.FILE}
        />

        <ErrorMessage validate={this.props.validate} errorMessage="upload the image" />
      </div>
    );
  }
}
