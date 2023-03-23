import { Component, MouseEventHandler } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

interface ButtonState {
  isDisabled: boolean;
}

export class Button extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }

  render() {
    return (
      <>
        <button
          className={style.button_form}
          onClick={this.props.onClick?.bind(this)}
          type="submit"
          disabled={this.props.disabled}
        >
          Send
        </button>
      </>
    );
  }
}
