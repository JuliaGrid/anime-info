import { render, screen } from '@testing-library/react';
import { Item } from '.';

describe('Item', () => {
  it('render component', () => {
    render(<Item title="title" />);
    expect(screen.getByText('title')).toBeInTheDocument();
  });
});
