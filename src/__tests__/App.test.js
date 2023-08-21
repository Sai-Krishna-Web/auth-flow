import { render, screen } from '@testing-library/react';
import App from '../App.js';

test('renders learn react link', () => {
  render(<App />);
  const formHeading = screen.getByText(/Registration/i);
  expect(formHeading).toBeInTheDocument();
});
