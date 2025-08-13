import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Main } from '.';
import { apiMock } from '../../__tests__/__mocks__/anime';

describe('Main', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('render component', () => {
    render(<Main />);
    expect(screen.getByText('Anime')).toBeInTheDocument();
  });

  it('api', async () => {
    render(<Main />);

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({
        data: [apiMock],
      }),
    });

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'naruto' },
    });
    fireEvent.click(screen.getByText('Search'));

    expect(fetch).toHaveBeenCalledWith(
      'https://api.jikan.moe/v4/anime?q=naruto'
    );

    await waitFor(() => {
      expect(screen.getByText('Naruto')).toBeInTheDocument();
    });
  });
});

it('shows error on fetch failure', async () => {
  (fetch as jest.Mock).mockRejectedValueOnce(new Error('API failed'));

  render(<Main />);
  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'naruto' },
  });
  fireEvent.click(screen.getByText('Search'));

  await waitFor(() => {
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});

it('does not call fetch on empty input', () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    json: async () => ({
      data: [apiMock],
    }),
  });

  render(<Main />);

  fireEvent.click(screen.getByText('Search'));

  expect(fetch).toHaveBeenCalledTimes(0);
});
