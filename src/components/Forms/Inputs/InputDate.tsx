import { Component, createRef, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';

export class InputDate extends Component<InputProps, InputState> {
  dateInput: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
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

        <ErrorMessage validate={this.props.validate} errorMessage="press valide date" />
      </div>
    );
  }
}
