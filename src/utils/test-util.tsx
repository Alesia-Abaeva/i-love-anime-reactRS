import React from 'react';
import { Provider } from 'react-redux';

import { AppState, RootState, setupStore } from '../store/store';
import type { PreloadedState } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppState;
}

export * from '@testing-library/react';

export function renderWithProvider(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  const Wrapper = ({ children }: React.PropsWithChildren<object>): JSX.Element => (
    <Provider store={store}>{children}</Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

/**
 * renderWithProvider(<Element />, {preloadedState: {search: initialSearch}})
 */
