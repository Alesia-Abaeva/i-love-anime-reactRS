import { Component, ReactNode } from 'react';
import { NavBar } from '../components/NavBar/NavBar';

export class Home extends Component {
  render(): ReactNode {
    return (
      <div>
        <NavBar />
        <h1>Hello World</h1>
      </div>
    );
  }
}
