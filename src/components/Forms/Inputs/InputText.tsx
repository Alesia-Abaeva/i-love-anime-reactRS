import { Component, createRef, RefObject } from 'react';
import styles from './Input.module.scss';

export class InputText extends Component<InputProps, InputState> {
  titleInput: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.titleInput = createRef();

    this.state = {
      value: '',
    };
  }

  handlerChange() {
    this.props.onChange(this.titleInput.current?.value ?? '');
    this.setState({ value: this.titleInput.current?.value as string });
  }

  render() {
    return (
      <div className={styles.item_input}>
        <label htmlFor="title_input">Title</label>
        <input
          type="text"
          className={styles.input_text}
          ref={this.titleInput}
          onChange={() => this.handlerChange()}
          id="title_input"
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
