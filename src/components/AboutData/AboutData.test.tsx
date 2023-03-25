import { render } from '@testing-library/react';
import React from 'react';
import { describe, it, vi } from 'vitest';
import { AboutData } from './AboutData';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  Link: ({
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

describe('AboutData', () => {
  it('Check contains text', () => {
    const { getByText } = render(<AboutData />);
    const element = getByText(/GitHub/i);
    expect(element).toBeInTheDocument;
  });
});
