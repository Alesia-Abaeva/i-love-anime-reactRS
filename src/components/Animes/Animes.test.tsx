import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { render, screen } from '@testing-library/react';
import { TITLE } from '../../const';
import { vi } from 'vitest';
import { Animes } from './Animes';

describe('Testing Animes Component', () => {
  const handleClick = vi.fn();
  const data: AnimeData[] = [
    {
      id: 123,
      name: 'Naruto',
      russian: 'ru',
      image: {
        original: 'Naruto',
        preview: 'Naruto',
        x96: 'Naruto',
        x48: 'Naruto',
      },
      url: 'Naruto',
      kind: 'Naruto',
      score: 'Naruto',
      status: 'Naruto',
      episodes: 34,
      episodes_aired: 1,
      aired_on: 'Naruto',
      released_on: 'Naruto',
    },
  ];
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
    render(<Animes open={handleClick} loading={false} error={undefined} data={data} />);
    expect(screen.queryByText(TITLE.main)).toBeInTheDocument();
  });
});
