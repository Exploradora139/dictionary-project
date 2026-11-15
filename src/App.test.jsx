import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coded by Dora Lopez', () => {
  render(<App />);
  const footerElement = screen.getByText(/Coded by Dora Lopez/i);
  expect(footerElement).toBeInTheDocument();
});
