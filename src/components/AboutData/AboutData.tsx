import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './AboutData.css';

export class AboutComponent extends Component {
  render(): ReactNode {
    return (
      <div className="main_about">
        <h2>Alesia-Abaeva </h2>
        <Link to="https://github.com/Alesia-Abaeva" className="about_link">
          GitHub
        </Link>
        <h1>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</h1>
      </div>
    );
  }
}
