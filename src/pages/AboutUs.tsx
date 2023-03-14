import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

export class AboutUs extends Component {
  render(): ReactNode {
    return (
      <div className="main_about">
        <h1>Здесь должна быть информация о нас</h1>
        <Link to="/">На главную</Link>
      </div>
    );
  }
}
