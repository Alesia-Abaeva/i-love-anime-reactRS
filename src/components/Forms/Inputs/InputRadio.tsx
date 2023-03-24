import { Component, createRef, RefObject } from 'react';
import styles from './Input.module.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FormKeys } from '../Forms';

export class InputRadio extends Component<InputProps, InputState> {
  yesRadio: RefObject<HTMLInputElement>;
  noRadio: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.noRadio = createRef();
    this.yesRadio = createRef();
  }

  handlerChange() {
    const selectRadio = this.yesRadio.current?.checked
      ? this.yesRadio.current?.value
      : this.noRadio.current?.value;

    this.props.onChange(selectRadio ?? '');
  }

  render() {
    return (
      <div className={styles.item_input}>
        <h3 className={styles.input_title}>Is the official flag</h3>
        <div className={styles.radio_container}>
          <input
            type="radio"
            className={styles.input_radio}
            onClick={() => this.handlerChange()}
            id={FormKeys.RADIO}
            name="group-1"
            value="yes"
            ref={this.yesRadio}
          />
          <label htmlFor={FormKeys.RADIO}>yes</label>

          <input
            type="radio"
            className={styles.input_radio}
            onClick={() => this.handlerChange()}
            id="radio-no"
            name="group-1"
            value="no"
            ref={this.noRadio}
            data-testid={FormKeys.RADIO}
          />
          <label htmlFor="radio-no">no</label>
        </div>
        {/* TODO: при добавлении нового элемента не обновляет поле  */}

        <ErrorMessage validate={this.props.validate} errorMessage="you should agree whith at" />
      </div>
    );
  }
}
