import { Search } from '../components/Search/Search';
import { Component, ReactNode } from 'react';

export class Home extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1>Hello World</h1>
        <Search />
      </div>
    );
  }
}
