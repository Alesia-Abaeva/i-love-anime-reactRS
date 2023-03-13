import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export class AboutUs extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1>Здесь должна быть информация о нас</h1>
        <Link to="/">На главную</Link>
      </div>
    );
  }
}
