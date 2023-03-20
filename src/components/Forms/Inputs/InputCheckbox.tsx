import { Component, createRef, RefObject } from 'react';
import styles from './Input.module.scss';

interface InputCheckboxProps {
  onChange: (value: string) => void;
  validate?: boolean;
}

interface InputCheckboxState {
  value: string;
}

export class InputCheckbox extends Component<InputCheckboxProps, InputCheckboxState> {
  titleInput: RefObject<HTMLInputElement>;

  constructor(props: InputCheckboxProps) {
    super(props);
    this.titleInput = createRef();

    this.state = {
      value: '',
    };
  }

  handlerChange() {
    const value = this.state.value === 'on' ? 'off' : 'on';
    this.props.onChange(value);
    this.setState({ value: value });
  }

  render() {
    return (
      <div className={styles.item_input}>
        <input
          type="checkbox"
          className={styles.input_check}
          ref={this.titleInput}
          onChange={() => this.handlerChange()}
          id="input_check"
        />
        <label htmlFor="input_check" className={styles.label_check}>
          Show you name
        </label>

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
