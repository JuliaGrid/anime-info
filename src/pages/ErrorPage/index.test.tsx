import { render, screen } from '@testing-library/react';
import { ErrorPage } from '.';

describe('Result', () => {
  it('render component', () => {
    const error = new Error('Error from test');
    render(<ErrorPage error={error} />);

    expect(screen.getByText('Error from test')).toBeInTheDocument();
    expect(screen.getByText('Reload page')).toBeInTheDocument();
  });
});
