import { Component, createRef, RefObject } from 'react';
import styles from './Input.module.scss';

interface InputDateProps {
  onChange: (value: string) => void;
  validate?: boolean;
}

interface InputDateState {
  value: string;
}

export class InputDate extends Component<InputDateProps, InputDateState> {
  dateInput: RefObject<HTMLInputElement>;

  constructor(props: InputDateProps) {
    super(props);
    this.dateInput = createRef();

    this.state = {
      value: '',
    };
  }

  handlerChange() {
    this.props.onChange(this.dateInput.current?.value ?? '');
    this.setState({ value: this.dateInput.current?.value as string });
  }

  render() {
    return (
      <div className={styles.item_input}>
        <label htmlFor="input_date">Date</label>
        <input
          type="date"
          className={styles.input_text}
          ref={this.dateInput}
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
