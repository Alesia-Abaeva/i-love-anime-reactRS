import { Component, DOMAttributes } from 'react';
import './Button.css';

export class Button extends Component<Pick<DOMAttributes<HTMLButtonElement>, 'onClick'>> {
  render() {
    return (
      <>
        <button className="button-form" onClick={this.props.onClick?.bind(this)} type="submit">
          Send
        </button>
      </>
    );
  }
}
