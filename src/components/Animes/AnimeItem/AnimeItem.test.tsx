import { render } from '@testing-library/react';
import { AnimeItem } from './AnimeItem';
import { describe, it, vi } from 'vitest';

describe('Render data countries', () => {
  const open = vi.fn();
  const data: AnimeData = {
    id: 1234,
    name: 'Name',
    russian: 'ru',
    image: {
      original: 'url',
      preview: 'url',
      x96: 'url',
      x48: 'url',
    },
    url: 'url',
    kind: 'url',
    score: 'url',
    status: 'url',
    episodes: 1,
    episodes_aired: 2,
    aired_on: 'url',
    released_on: 'url',
  };
  it('Renders about data', () => {
    const { getByText } = render(<AnimeItem data={data} key={1} open={open} />);
    const element = getByText(/Name/i);
    expect(element).toBeInTheDocument;
  });
});
