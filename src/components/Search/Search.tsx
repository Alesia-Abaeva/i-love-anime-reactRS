import img from '../../assets/icon/search.svg';
import style from './Search.module.scss';

export interface SearchProps {
  value: string;
  onSearchChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onSearchChange, onKeyDown }) => {
  return (
    <div className={style.form_container}>
      <form className={style.search_form}>
        <input
          data-testid={'search'}
          type="text"
          placeholder={'Search in the anime...'}
          className={style.search__input}
          onChange={(event) => onSearchChange(event.target.value)}
          onKeyDown={(event) => onKeyDown(event)}
          value={value}
        />
        <img src={img} alt="img" className={style.search__img} />
      </form>
    </div>
  );
};
