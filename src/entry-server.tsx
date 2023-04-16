import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { StaticHandlerContext, StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import './index.scss';

const store = setupStore();

export function render(url: string, context: StaticHandlerContext) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );
  return { html };
}
