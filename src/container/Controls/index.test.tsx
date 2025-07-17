import { fireEvent, render, screen } from '@testing-library/react';
import { Controls } from '.';

describe('Controls', () => {
  const buttonHandler = jest.fn();

  it('render component', () => {
    render(<Controls buttonHandler={buttonHandler} />);
    const button = screen.getByText('Search');
    const input = screen.getByRole('textbox');

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('input change', () => {
    render(<Controls buttonHandler={buttonHandler} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'naruto' },
    });

    expect(input).toHaveValue('naruto');
  });

  it('button click', () => {
    render(<Controls buttonHandler={buttonHandler} />);
    const button = screen.getByText('Search');

    fireEvent.click(button);

    expect(buttonHandler).toHaveBeenCalledTimes(1);
  });
});
