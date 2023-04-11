import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { AnimeDataLoading } from './AnimeDataLoading';

describe('Render Anime data loading', () => {
  it('Renders loading', () => {
    const { getByText } = render(<AnimeDataLoading />);
    const element = getByText(/Loading.../i);
    expect(element).toBeInTheDocument;
  });
});
