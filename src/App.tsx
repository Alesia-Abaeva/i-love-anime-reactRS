/* eslint-disable react/prefer-stateless-function */
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { FormPage } from './pages/FormPage';

export const App = () => {
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
};
