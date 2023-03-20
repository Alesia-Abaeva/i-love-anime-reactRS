import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { showCurrentPage } from '../../utils/show-current-page';
import { MenuItem } from '../../const/menu-items';
import './NavBar.css';

interface NavBarState {
  currentPage: string;
}

export class NavBar extends Component<object, NavBarState> {
  constructor(props: object) {
    super(props);

    this.state = {
      currentPage: showCurrentPage(),
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange(event: HashChangeEvent) {
    this.setState({ currentPage: showCurrentPage(event.newURL) });
  }

  componentDidMount() {
    addEventListener('hashchange', this.handleLocationChange);
  }

  componentWillUnmount() {
    removeEventListener('hashchange', this.handleLocationChange);
  }

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
                <NavLink
                  to={item.url}
                  className={item.cName}
                  onClick={(event) =>
                    this.setState({
                      currentPage: (event.target as HTMLElement).textContent as string,
                    })
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <p className="navbar_current-page">Current Page: {this.state.currentPage}</p>
      </nav>
    );
  }
}
