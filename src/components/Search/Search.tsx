import img from '../../assets/search.svg';
import style from './Search.module.scss';

interface SearchProps {
  value: string;
  onSearchChange: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onSearchChange }) => {
  return (
    <div className={style.form_container}>
      <form className={style.search_form}>
        <input
          type="text"
          placeholder={'Search in the country...'}
          className={style.search__input}
          onChange={(event) => onSearchChange(event.target.value)}
          value={value}
        />
        <img src={img} alt="img" className={style.search__img} />
      </form>
    </div>
  );
};
