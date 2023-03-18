/* eslint-disable react/prefer-stateless-function */
import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/NavBar/NavBar';
import { FormPage } from './pages/FormPage';

export class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/forms" element={<FormPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}
