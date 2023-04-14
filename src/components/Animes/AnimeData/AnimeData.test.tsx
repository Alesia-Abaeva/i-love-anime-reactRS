import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useFetchIDAnimeQuery } from '../../../service/AnimeService';
import { renderWithProvider } from 'utils/test-util';
import { describe, it, Mock, vi } from 'vitest';
import { AnimeData } from './AnimeData';
import { AnimeDataLoading } from './AnimeDataLoading';

// vi.mock('../../../service/AnimeService', async () => {
//   const mod = await vi.importActual<typeof import('../../../service/AnimeService')>(
//     '../../../service/AnimeService'
//   );
//   return {
//     ...mod,
//     useFetchIDAnimeQuery: () => ({ data: undefined, isLoading: false }),
//   };
// });

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

  it('Renders Anime Data', () => {
    (useFetchIDAnimeQuery as Mock).mockImplementation(() => ({ isLoading: true, data: undefined }));

    const { queryByText } = render(<AnimeData id={'lll'} />);
    const element = queryByText(/Loading.../i);
    expect(element).toBeInTheDocument;
  });

  it('Renders Anime Data', () => {
    (useFetchIDAnimeQuery as Mock).mockImplementation(() => ({
      isLoading: false,
      data: { genres: [{ name: 'horror' }] },
    }));

    const { queryByText } = render(<AnimeData id={'lll'} />);
    const element = queryByText(/horror/i);

    // TODO: протестировать каждое поле

    expect(element).toBeInTheDocument;
  });
});
