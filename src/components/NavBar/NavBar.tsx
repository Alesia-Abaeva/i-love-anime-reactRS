import { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItems';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-logo">React Project</h1>
        {/* <div className="menu-icon"></div> */}

        <ul>
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
