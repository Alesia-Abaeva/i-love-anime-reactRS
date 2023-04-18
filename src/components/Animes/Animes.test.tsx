import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { render, screen } from '@testing-library/react';
import { animeData, TITLE } from '../../const';
import { vi } from 'vitest';
import { Animes } from './Animes';

describe('Testing Animes Component', () => {
  const handleClick = vi.fn();
  const error = {
    status: 'FETCH_ERROR',
    data: undefined,
    error: 'error',
  } as FetchBaseQueryError;
  it('Renders Animes with undefined data', () => {
    render(<Animes open={handleClick} loading={false} error={error} data={undefined} />);
    expect(screen.queryByText(TITLE.main)).not.toBeInTheDocument();
  });

  it('Renders Animes with data', () => {
    render(<Animes open={handleClick} loading={false} error={undefined} data={animeData} />);
    expect(screen.queryByText(TITLE.main)).toBeInTheDocument();
  });
});
