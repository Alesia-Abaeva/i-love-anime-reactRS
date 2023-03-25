import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('NavBar', () => {
  const onClose = vi.fn();
  it('Renders navbar title', () => {
    render(<Modal onClose={onClose} />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hoooray data send!');
  });
});
