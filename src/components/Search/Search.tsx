import { Component, ReactNode } from 'react';
import img from '../../assets/search.svg';
import style from './Search.module.scss';

interface SearchProps {
  value: string;
  onSearchChange: (value: string) => void;
}

export class Search extends Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div className={style.form_container}>
        <form className={style.search_form}>
          <input
            type="text"
            placeholder={'Search in the country...'}
            className={style.search__input}
            onChange={(event) => this.props.onSearchChange(event.target.value)}
            value={this.props.value}
          />
          <img src={img} alt="img" className={style.search__img} />
        </form>
      </div>
    );
  }
}
