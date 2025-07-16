import { render, screen } from '@testing-library/react';
import { Loader } from '.';

describe('Loader', () => {
  it('render component', () => {
    render(<Loader />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
});
