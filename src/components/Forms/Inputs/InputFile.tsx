import { Component, createRef, RefObject } from 'react';
import styles from './Input.module.scss';

interface InputFileProps {
  onChange: (value: string) => void;
  validate?: boolean;
}

interface InputFileState {
  value: string;
}

export class InputFile extends Component<InputFileProps, InputFileState> {
  fileInput: RefObject<HTMLInputElement>;

  constructor(props: InputFileProps) {
    super(props);
    this.fileInput = createRef();

    this.state = {
      value: '',
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
        <label htmlFor="input_file">Upload file</label>
        <input
          type="file"
          className={(styles.input_text, styles.input_file)}
          ref={this.fileInput}
          accept={'.jpg, .jpeg, .png'}
          onChange={() => this.handlerChange()}
          id="input_file"
        />
        {
          <span
            className={`${styles.error_title} ${!this.props.validate ? styles.error_active : ''}`}
          >
            {!this.props.validate && 'download picture'}
          </span>
        }
      </div>
    );
  }
}
