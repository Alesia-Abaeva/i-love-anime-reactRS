import { expect, vi } from 'vitest';
import { Home } from './Home';
import userEvent from '@testing-library/user-event';
import { getCurrentPage, renderWithProvider } from '../utils';
import { animeData, DIRECTION } from '../const';

vi.mock('../service/AnimeService', async () => {
  const actual = await vi.importActual<typeof import('../service/AnimeService')>(
    '../service/AnimeService'
  );
  return {
    ...actual,
    useFetchAllAnimeQuery: () => ({
      isLoading: false,
      data: animeData,
    }),
  };
});

vi.mock('../utils', async () => {
  const actual = await vi.importActual<typeof import('../utils')>('../utils');
  return {
    ...actual,
    getCurrentPage: vi.fn(),
  };
});

describe('Home page', () => {
  it('should change and store search value', async () => {
    const { queryByTestId, store } = renderWithProvider(<Home />);
    const search = queryByTestId('search') as HTMLInputElement;

    await userEvent.type(search, 'kimetsu');
    expect(search.value).toBe('kimetsu');

    await userEvent.type(search, '{enter}');
    expect(store.getState().searchReducer.search).toBe('kimetsu');
  });

  it('should change page', async () => {
    const { queryByTestId } = renderWithProvider(<Home />);
    const nextButton = queryByTestId(DIRECTION.NEXT) as HTMLButtonElement;

    await userEvent.click(nextButton);

    expect(getCurrentPage).toBeCalledTimes(1);
    expect(getCurrentPage).toBeCalledWith(DIRECTION.NEXT, 1, animeData);
  });
});
