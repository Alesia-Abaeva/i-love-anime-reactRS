import { Component, DOMAttributes } from 'react';
import style from './Button.module.scss';

export class Button extends Component<Pick<DOMAttributes<HTMLButtonElement>, 'onClick'>> {
  render() {
    return (
      <>
        <button
          className={style.button_form}
          onClick={this.props.onClick?.bind(this)}
          type="submit"
        >
          Send
        </button>
      </>
    );
  }
}
