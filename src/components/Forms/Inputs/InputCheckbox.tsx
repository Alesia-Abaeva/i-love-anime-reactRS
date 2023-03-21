import { Component, createRef, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';

export class InputCheckbox extends Component<InputProps, InputState> {
  checkboxInput: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.checkboxInput = createRef();

    this.state = {
      value: '',
    };
  }

  handlerChange() {
    const isCheck = this.checkboxInput.current?.checked ? 'on' : 'off';
    this.props.onChange(isCheck);
    this.setState({ value: isCheck });

    console.log(isCheck);
  }

  render() {
    return (
      <div className={styles.item_input}>
        <input
          type="checkbox"
          className={styles.input_check}
          ref={this.checkboxInput}
          onChange={() => this.handlerChange()}
          id="input_check"
        />
        <label htmlFor="input_check" className={(styles.label_check, styles.input_title)}>
          Show you name
        </label>

        <ErrorMessage validate={this.props.validate} errorMessage="Error press valid data" />
      </div>
    );
  }
}
