import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import './index.scss';

const store = setupStore();

export function render(url: string, options?: ReactDOMServer.RenderToPipeableStreamOptions) {
  const stream = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    options
  );
  return stream;
}
