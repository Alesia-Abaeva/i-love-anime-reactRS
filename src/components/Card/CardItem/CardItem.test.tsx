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
    const { getByText } = render(<CardItem key={1} {...data} />);
    const element = getByText(/Sports flags/i);
    expect(element).toBeInTheDocument;
  });
  it('check date', () => {
    const { getByText } = render(<CardItem key={1} {...data} />);
    const element = getByText(/2023-24-03/i);
    expect(element).toBeInTheDocument;
  });
});
