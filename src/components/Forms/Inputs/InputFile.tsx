import { Component, createRef, RefObject } from 'react';
import styles from './Input.module.scss';

interface InputFileProps {
  onChange: (value: string) => void;
  validate?: boolean;
}

interface InputFileState {
  value: string;
  validate: boolean;
  error: boolean;
}

export class InputFile extends Component<InputFileProps, InputFileState> {
  fileInput: RefObject<HTMLInputElement>;

  constructor(props: InputFileState) {
    super(props);
    this.fileInput = createRef();

    this.state = {
      value: '',
      validate: false,
      error: false,
    };
  }

  handlerChange() {
    console.log(this.fileInput.current?.value);
    this.props.onChange(this.fileInput.current?.value ?? '');
    this.setState({ value: this.fileInput.current?.value as string });
  }

  render() {
    return (
      <div className={styles.item_input}>
        <label htmlFor="input_date">Upload file</label>
        <input
          type="file"
          className={(styles.input_text, styles.input_file)}
          ref={this.fileInput}
          onChange={() => this.handlerChange()}
          id="input_date"
        />
        {
          <span
            className={`${styles.error_title} ${!this.props.validate ? styles.error_active : ''}`}
          >
            {!this.props.validate && 'press valide date'}
          </span>
        }
      </div>
    );
  }
}
