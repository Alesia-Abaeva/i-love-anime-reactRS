/* eslint-disable react/prefer-stateless-function */
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Component } from 'react';

import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

// export function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export class WrappedApp extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <App />
//       </HashRouter>
//     );
//   }
// }

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
