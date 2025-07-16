import { render, screen } from '@testing-library/react';
import { Error } from '.';

describe('Error', () => {
  it('render component', () => {
    render(<Error />);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
