import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1>Кажется этой страницы не существует ( ´•︵•` )</h1>
        <Link to="/">На главную</Link>
      </div>
    );
  }
}
