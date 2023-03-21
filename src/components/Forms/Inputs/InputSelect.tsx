import { selectOptions } from '../../../const/select-options';
import { Component, createRef, RefObject } from 'react';
import styles from './Input.module.scss';

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
        <label htmlFor="input_file">Select options</label>
        <select
          className={styles.input_text}
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

        {
          <span
            className={`${styles.error_title} ${!this.props.validate ? styles.error_active : ''}`}
          >
            {!this.props.validate && 'choose options'}
          </span>
        }
      </div>
    );
  }
}
