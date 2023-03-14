import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../../const/menu-items';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar_logo">
          React Countries Project <i className="logo"></i>
        </h1>

        <ul className="navbar_lists">
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url} className={item.cName}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
