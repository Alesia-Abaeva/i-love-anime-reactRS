import { Component, ReactNode } from 'react';
import img from '../../assets/search.svg';
import './Search.css';

export class Search extends Component {
  state = {
    inputValue: '',
  };

  render(): ReactNode {
    return (
      <div className="form_container">
        <form className="search_form">
          <input
            type="text"
            placeholder="Search in the country..."
            className="search__input"
            onChange={(event) => this.setState(event.target.value)}
          />
          <img src={img} alt="img" className="search__img" />
        </form>
      </div>
    );
  }
}
