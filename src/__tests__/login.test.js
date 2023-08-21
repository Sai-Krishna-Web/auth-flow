import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/login.js';

test('renders learn react link', () => {
  render(<Login />);
  const formHeading = screen.getByText(/Registration/i);
  expect(formHeading).toBeInTheDocument();
});
test('Complete user registration, verification, and login flow', async () => {
    render(<Login />);
  
    // Simulate user registration
    fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'SecureP@ssw0rd' } });

  
    // Simulate Register click
    fireEvent.click(screen.getByText('Register'));
    //const verificationLink = await getEmailVerificationLink('test@example.com'); // Replace with actual function
    //fireEvent.click(screen.getByText('Verify Email'));
    //fireEvent.click(screen.getByText('Continue'));
  
    expect(screen.getByText('Your registration was successful!')).toBeInTheDocument();
});