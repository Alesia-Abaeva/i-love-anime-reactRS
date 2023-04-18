import { render, screen } from '@testing-library/react';
import { DIRECTION } from '../../const';
import { vi } from 'vitest';
import { Pagination } from './Pagination';
import userEvent from '@testing-library/user-event';

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

  it('Clicked next button', async () => {
    const onClickChange = vi.fn();
    render(<Pagination onClickChange={onClickChange} />);
    const button = screen.getByTestId(DIRECTION.NEXT);
    await userEvent.click(button);

    expect(onClickChange).toBeCalledTimes(1);
  });

  it('Clicked prev button', async () => {
    const onClickChange = vi.fn();
    render(<Pagination onClickChange={onClickChange} />);
    const button = screen.getByTestId(DIRECTION.PREV);
    await userEvent.click(button);

    expect(onClickChange).toBeCalledTimes(1);
  });
});
