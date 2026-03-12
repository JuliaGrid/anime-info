import { render, screen } from '@testing-library/react';
import { Result } from '.';
import { animeMock } from '../../__tests__/__mocks__/anime';

describe('Result', () => {
  it('render component', () => {
    render(<Result isLoading={false} isError={false} result={[animeMock]} />);

    expect(screen.getByText('Naruto')).toBeInTheDocument();
  });
});
