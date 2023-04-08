import { NavLink } from 'react-router-dom';
import { MenuItem } from '../../const/menu-items';
import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbar_logo}>
        I<span>❤</span>
        Anime
      </h1>

      <ul className={styles.navbar_lists}>
        {MenuItem.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive ? `${styles[item.cName]} ${styles.active}` : styles[item.cName]
                }
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
