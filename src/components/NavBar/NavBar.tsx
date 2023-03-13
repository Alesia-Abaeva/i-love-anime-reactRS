import { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItems';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar_logo">
          React Project <i className="logo"></i>
        </h1>

        <ul className="navbar_lists">
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
