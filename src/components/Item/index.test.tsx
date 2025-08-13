import { render, screen } from '@testing-library/react';
import { Item } from '.';
import { animeMock } from '../../__tests__/__mocks__/anime';

describe('Item', () => {
  it('render component', () => {
    render(<Item animeItem={animeMock} />);
    expect(screen.getByText('Naruto')).toBeInTheDocument();
  });
});
