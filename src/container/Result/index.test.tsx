import { render, screen } from '@testing-library/react';
import { Result } from '.';

describe('Result', () => {
  it('render component', () => {
    render(<Result isLoading={false} isError={false} result={['naruto']} />);

    expect(screen.getByText('naruto')).toBeInTheDocument();
  });
});
