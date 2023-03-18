import { Component, createRef, RefObject } from 'react';
import './Input.css';

interface InputTextProps {
  isValidate: (value: boolean) => void;
  onChange: (value: string) => void;
  validate?: boolean;
}

interface InputTextState {
  value: string;
  validate: boolean;
  error: boolean;
}

export class InputText extends Component<InputTextProps, InputTextState> {
  titleInput: RefObject<HTMLInputElement>;

  constructor(props: InputTextProps) {
    super(props);
    this.titleInput = createRef();

    this.state = {
      value: '',
      validate: false,
      error: false,
    };
  }

  handlerChange() {
    this.props.onChange(this.titleInput.current?.value ?? '');
    this.setState({ value: this.titleInput.current?.value as string });
    // this.validate();
  }

  validate() {
    const text = this.titleInput.current?.value;

    if (!text?.trim().length || text?.trim().length < 2) {
      this.setState({ validate: false });
      this.props.isValidate(false);
    } else {
      this.setState({ validate: true });
      this.props.isValidate(true);
    }

    console.log(this.state);
  }

  render() {
    return (
      <div className="item_input">
        <label htmlFor="">Title</label>
        <input
          type="text"
          className="input_text"
          ref={this.titleInput}
          onChange={() => this.handlerChange()}
        />
        {this.props.validate ? <span>Super</span> : <span>Error press valid data</span>}
      </div>
    );
  }
}
