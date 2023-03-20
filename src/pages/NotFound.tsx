import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

export class NotFound extends Component {
  render(): ReactNode {
    return (
      <div className="main_nfnd">
        <h2>Page not found ( ´•︵•` )</h2>
        <Link to="/" className="main_link">
          main
        </Link>
      </div>
    );
  }
}
