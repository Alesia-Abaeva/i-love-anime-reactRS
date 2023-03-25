import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Pages.module.scss';

export class NotFound extends Component {
  render(): ReactNode {
    return (
      <div className={styles.main_container}>
        <h2>Page not found ( ´•︵•` )</h2>
        <Link to="/" className={styles.main_link}>
          main
        </Link>
      </div>
    );
  }
}
