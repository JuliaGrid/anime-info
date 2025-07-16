import { render, screen } from '@testing-library/react';
import App from './App';

describe('Greeting', () => {
  it('renders the name passed in props', () => {
    render(<App />);
    expect(screen.getByText('Anime')).toBeInTheDocument();
  });
});
