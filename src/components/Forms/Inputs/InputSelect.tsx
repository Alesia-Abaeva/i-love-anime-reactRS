import { selectOptions } from '../../../const/select-options';
import { Component, createRef, RefObject } from 'react';
import styles from './Input.module.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export class InputSelect extends Component<InputProps, InputState> {
  SelectInput: RefObject<HTMLSelectElement>;

  constructor(props: InputProps) {
    super(props);
    this.SelectInput = createRef();

    this.state = {
      value: '',
    };
  }

  handlerChange() {
    this.props.onChange(this.SelectInput.current?.value ?? '');
    this.setState({ value: this.SelectInput.current?.value as string });
  }

  render() {
    return (
      <div className={styles.item_input}>
        <label htmlFor="input_file" className={styles.input_title}>
          Choose a type flag
        </label>
        <select
          className={`${styles.input_select} ${!this.props.validate ? styles.error : ''}`}
          onChange={() => this.handlerChange()}
          ref={this.SelectInput}
        >
          {selectOptions.map((options, index) => {
            return (
              <option value={options} key={index}>
                {options}
              </option>
            );
          })}
        </select>

        <ErrorMessage validate={this.props.validate} errorMessage="select values" />
      </div>
    );
  }
}
