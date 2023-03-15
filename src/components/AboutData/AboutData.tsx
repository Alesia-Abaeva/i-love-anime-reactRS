import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './AboutData.css';

export class AboutData extends Component {
  render(): ReactNode {
    return (
      <div className="main_about">
        <h3>Alesia-Abaeva</h3>
        <Link to="https://github.com/Alesia-Abaeva" className="about_link">
          GitHub
        </Link>
        <h2>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</h2>
      </div>
    );
  }
}
