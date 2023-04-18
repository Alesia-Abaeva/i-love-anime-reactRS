import { render } from '@testing-library/react';
import { useFetchIDAnimeQuery } from '../../../service/AnimeService';
import { describe, it, Mock, vi } from 'vitest';
import { AnimeData } from './AnimeData';
import { AnimeDataLoading } from './AnimeDataLoading';
import { animeIdData } from '../../../const';

vi.mock('../../../service/AnimeService', async () => {
  const mod = await vi.importActual<typeof import('../../../service/AnimeService')>(
    '../../../service/AnimeService'
  );
  return {
    ...mod,
    useFetchIDAnimeQuery: vi.fn(),
  };
});

describe('Render Anime data loading', () => {
  it('Renders loading', () => {
    const { getByText } = render(<AnimeDataLoading />);
    const element = getByText(/Loading.../i);
    expect(element).toBeInTheDocument;
  });

  it('Renders Anime Data - undefined', () => {
    (useFetchIDAnimeQuery as Mock).mockImplementation(() => ({ isLoading: true, data: undefined }));

    const { queryByText } = render(<AnimeData id={'lll'} />);
    const element = queryByText(/Loading.../i);
    expect(element).toBeInTheDocument;
  });

  it('Renders Anime Data', () => {
    (useFetchIDAnimeQuery as Mock).mockImplementation(() => ({
      isLoading: false,
      data: animeIdData,
    }));

    const { queryByText } = render(<AnimeData id={1535} />);

    expect(queryByText(/Thriller/i)).toBeInTheDocument;
    expect(queryByText(/Death Note/i)).toBeInTheDocument;
    expect(queryByText(/released/i)).toBeInTheDocument;
    expect(queryByText(/23/i)).toBeInTheDocument;
    expect(queryByText(/2006/i)).toBeInTheDocument;
    expect(queryByText(/Тетрадь смерти/i)).toBeInTheDocument;
  });

  it('Renders Anime Data - alt text img', () => {
    (useFetchIDAnimeQuery as Mock).mockImplementation(() => ({
      isLoading: false,
      data: animeIdData,
    }));

    const { getByAltText } = render(<AnimeData id={1535} />);
    const element = getByAltText('Death Note');
    expect(element).toBeInTheDocument;
  });
});
