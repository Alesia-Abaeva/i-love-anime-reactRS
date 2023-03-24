import { render } from '@testing-library/react';
import { CardItem } from './CardItem';
import { describe, it } from 'vitest';

describe('Render card items', () => {
  const data: NewCard = {
    title: 'this is test',
    date: '2023-24-03',
    file: '/image.png',
    select: 'Sports flags',
    check: 'on',
    radio: 'yes',
  };

  it('add items', () => {
    const { getByText } = render(<CardItem data={data} key={1} />);
    const element = getByText(/Sports flags/i);
    expect(element).toBeInTheDocument;
  });
});
