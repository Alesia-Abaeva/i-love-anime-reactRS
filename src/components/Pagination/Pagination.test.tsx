import { render, screen } from '@testing-library/react';
import { DIRECTION } from '../../const';
import { vi } from 'vitest';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('Renders prev button', () => {
    const onClickChange = vi.fn();

    render(<Pagination onClickChange={onClickChange} />);
    expect(screen.getByTestId(DIRECTION.PREV)).toBeInTheDocument();
  });
  it('Renders next button', () => {
    const onClickChange = vi.fn();

    render(<Pagination onClickChange={onClickChange} />);
    expect(screen.getByTestId(DIRECTION.NEXT)).toBeInTheDocument();
  });
});
