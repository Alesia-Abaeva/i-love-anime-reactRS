import { Component, createRef, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';

export class InputCheckbox extends Component<InputProps, InputState> {
  titleInput: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
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

        <ErrorMessage validate={this.props.validate} errorMessage="Error press valid data" />
      </div>
    );
  }
}
