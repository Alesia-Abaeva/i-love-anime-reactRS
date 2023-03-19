import { Component, createRef, RefObject } from 'react';
import styles from './Input.module.scss';

interface InputTextProps {
  onChange: (value: string) => void;
  validate?: boolean;
}

interface InputTextState {
  value: string;
  validate: boolean;
  error: boolean;
}

export class InputText extends Component<InputTextProps, InputTextState> {
  titleInput: RefObject<HTMLInputElement>;

  constructor(props: InputTextProps) {
    super(props);
    this.titleInput = createRef();

    this.state = {
      value: '',
      validate: false,
      error: false,
    };
  }

  handlerChange() {
    this.props.onChange(this.titleInput.current?.value ?? '');
    this.setState({ value: this.titleInput.current?.value as string });
  }

  render() {
    return (
      <div className={styles.item_input}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          className={styles.input_text}
          ref={this.titleInput}
          onChange={() => this.handlerChange()}
        />
        {
          <span
            className={`${styles.error_title} ${!this.props.validate ? styles.error_active : ''}`}
          >
            {!this.props.validate && 'Error press valid data'}
          </span>
        }
      </div>
    );
  }
}
