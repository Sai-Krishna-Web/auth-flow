import {
    registerUser,
    validateUserData,
    verifyEmail,
    logIn
} from '../services/login.service';

test('User registration data is validated', () => {
    const invalidData = { email: '', password: 'weak' };
    const validData = { email: 'test@example.com', password: 'SecureP@ssw0rd', firstName:'Jhon',lastName:'Doe' };
  
    expect(validateUserData(invalidData)).toBeFalsy();
    expect(validateUserData(validData)).toBeTruthy();
  });


test('User registration', () => {
    const userData = { email: 'test@example.com', password: 'SecureP@ssw0rd', firstName:'Jhon',lastName:'Doe' };
    const user = registerUser(userData)
  
    expect(user.status).toBe('verification_pending');
  });

  test('User Email verification', () => {
    const data = { id: '12345', token: 'jwttokenn'};
    const user = verifyEmail(data.id,data.token);
    const invalidUser = verifyEmail(data.id,'');
  
    expect(user.status).toBe('verified');
    expect(invalidUser.error).toBe('expired or invalid token');
  });

  test('User Login', () => {
    const userData = { email: 'test@example.com', password: 'SecureP@ssw0rd' };
    const user = logIn(userData)
  
    expect(user.status).toBe('verified');
    expect(user.token).toBe('JWT token');
  });