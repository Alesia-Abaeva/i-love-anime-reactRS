import { Component, createRef, RefObject } from 'react';
import styles from './Input.module.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export class InputRadio extends Component<InputProps, InputState> {
  yesRadio: RefObject<HTMLInputElement>;
  noRadio: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.noRadio = createRef();
    this.yesRadio = createRef();

    this.state = {
      value: '',
    };
  }

  handlerChange() {
    const selectRadio = this.yesRadio.current?.checked
      ? this.yesRadio.current?.value
      : this.noRadio.current?.value;

    this.props.onChange(selectRadio ?? '');
    this.setState({ value: selectRadio as string });
  }

  render() {
    return (
      <div className={styles.item_input}>
        <h3 className={styles.input_title}>Is the official flag</h3>
        <div className={styles.radio_container}>
          <input
            type="radio"
            className={styles.input_radio}
            onChange={() => this.handlerChange()}
            id="radio"
            name="group-1"
            value="yes"
            ref={this.yesRadio}
            checked={this.state.value == 'yes' ? true : false}
          />
          <label htmlFor="radio">yes</label>

          <input
            type="radio"
            className={styles.input_radio}
            onChange={() => this.handlerChange()}
            id="radio-no"
            name="group-1"
            value="no"
            ref={this.noRadio}
            checked={this.state.value == 'no' ? true : false}
          />
          <label htmlFor="radio-no">no</label>
        </div>

        <ErrorMessage validate={this.props.validate} errorMessage="you should agree whith at" />
      </div>
    );
  }
}
