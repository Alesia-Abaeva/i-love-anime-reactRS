import { render, screen } from '@testing-library/react';
import { Page404 } from './404';

describe('page 404', () => {
  it('Renders 404', () => {
    render(<Page404 />);
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
  });
});
