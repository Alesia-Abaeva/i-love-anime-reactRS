import img from '../../assets/icon/search.svg';
import style from './Search.module.scss';

interface SearchProps {
  value: string;
  onSearchChange: (value: string) => void;
  handleClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onSearchChange, handleClick }) => {
  return (
    <div className={style.form_container}>
      <form className={style.search_form}>
        <input
          type="text"
          placeholder={'Search in the anime...'}
          className={style.search__input}
          onChange={(event) => onSearchChange(event.target.value)}
          onKeyDown={(event) => handleClick(event)}
          value={value}
        />
        <img src={img} alt="img" className={style.search__img} />
      </form>
    </div>
  );
};
