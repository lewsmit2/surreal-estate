import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

test('renders learn react link', () => {
  render(<App />, {wrapper: BrowserRouter});
  const linkElement = screen.getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});
