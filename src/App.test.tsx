import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';
import { renderWithProvider } from './utils';
import { TITLE } from './const';

describe('App', () => {
  it('Renders not found is invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(TITLE[404]);
  });

  it('Renders about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Alesia-Abaeva');
  });

  it('Renders main page', async () => {
    renderWithProvider(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const heading = await screen.findByRole('heading', {
      level: 2,
    });
    expect(heading).not.toHaveTextContent(TITLE.form);
  });
  it('Renders form page', () => {
    renderWithProvider(
      <MemoryRouter initialEntries={['/forms']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(TITLE.form);
  });
});
