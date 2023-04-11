import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  NavLink: ({
    to,
    className,
    children,
  }: {
    to: string;
    className: string;
    children: React.ReactNode;
  }) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
}));

describe('NavBar', () => {
  it('Renders navbar title', () => {
    render(<NavBar />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('I❤Anime');
  });
});
