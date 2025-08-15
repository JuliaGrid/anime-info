import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Main } from '.';
import { apiMock } from '../../__tests__/__mocks__/anime';
import { Api } from '../../../jikan-client/Api';

jest.mock('../../../jikan-client/Api');

function mockApi(isError = false) {
  let promiseAnswer = Promise.resolve({ data: [apiMock] });

  const getAnimeSearchMock = jest.fn().mockResolvedValue({
    json: () => promiseAnswer,
  });

  if (isError) {
    promiseAnswer = Promise.reject(new Error('Failed to fetch'));
  }

  (Api as jest.Mock).mockImplementation(() => ({
    anime: { getAnimeSearch: getAnimeSearchMock },
  }));

  return getAnimeSearchMock;
}

describe('Main', () => {
  it('render component', () => {
    render(<Main />);
    expect(screen.getByText('Anime')).toBeInTheDocument();
  });

  it('calls API and renders results', async () => {
    const getAnimeSearchMock = mockApi();

    render(<Main />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Naruto' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(getAnimeSearchMock).toHaveBeenCalledWith({ q: 'Naruto' });
      expect(screen.getByText('Naruto')).toBeInTheDocument();
    });
  });

  it('calls error API and renders error', async () => {
    const getAnimeSearchMock = mockApi(true);

    render(<Main />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Naruto' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(getAnimeSearchMock).toHaveBeenCalledWith({ q: 'Naruto' });
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });

  it('not calls API eith empty input', async () => {
    const getAnimeSearchMock = mockApi();

    render(<Main />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(getAnimeSearchMock).toHaveBeenCalledTimes(0);
    });
  });
});
