import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Search } from './Search';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  it('Renders placeholder text', () => {
    const value = 'test value';
    const onChangeInput = vi.fn();
    const handleClick = vi.fn();

    render(<Search value={value} onSearchChange={onChangeInput} onKeyDown={handleClick} />);
    expect(screen.getByPlaceholderText('Search in the anime...'));
  });

  it('Renders handleSearchChange', async () => {
    const value = 'test value';
    const onChangeInput = vi.fn();
    const handleClick = vi.fn();

    render(<Search value={value} onSearchChange={onChangeInput} onKeyDown={handleClick} />);
    const inputSearch = screen.getByTestId('search');
    await userEvent.type(inputSearch, 'banana');
    expect(onChangeInput).toBeCalledTimes('banana'.length);
  });
});
