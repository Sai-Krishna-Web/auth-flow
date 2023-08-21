# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# High-Level Requirement

**Objective:** User should be able to sign up, verify their email, register a Time-based One-Time Password (TOTP), login, and logout.

## Major Components

- User Registration
- Email Verification
- TOTP Setup
- Login
- Logout
- Error Handling Scenarios

## Flow Chart Diagram
![Flow Chart Diagram](https://drive.google.com/file/d/1q5oTDGuMtV3YDGhKd0hKy4T0PCxyn274/view?usp=drive_link)

## Detailed Technical Specifications

### User Registration

- Users will access a sign-up page through a web or mobile interface.
- They will provide their email address, password, and other required registration information.
- The system will perform validation on the provided information (e.g., email format, password complexity) and generate error messages accordingly.
- Passwords will be securely hashed and salted before storing in the database.
- If the provided email address is not already in use, a verification token will be generated and sent to the provided email.
- A record for the user will be created in the database with a "verification pending" status.

### Email Verification

- The email sent to the user will contain a unique verification link embedded with the verification token.
- Clicking the link will redirect the user to a verification page.
- The system will verify the token and update the user's status to "verified" in the database.
- Users attempting to log in before verifying their email will be notified to complete verification.

### TOTP Setup

- After email verification, users can log in and access their account settings.
- In the account settings, users can choose to enable TOTP for added security.
- They will be presented with a QR code containing the TOTP configuration details.
- Users can use a TOTP-compatible app (e.g., Google Authenticator) to scan the QR code and generate time-based codes.
- The TOTP configuration (secret key, algorithm) will be securely stored in the database linked to the user's account.

### Login

- On the login page, users will provide their verified email and password.
- The system will validate the provided credentials against the database records.
- If the credentials are valid, the user will be prompted for the TOTP code.
- Users will retrieve the current TOTP code from their TOTP app and enter it.
- The entered TOTP code will be validated against the stored TOTP configuration.
- Upon successful verification, the user will be logged in and granted access to their account.

### Logout

- Users will have the option to log out from their account.
- Logging out will invalidate the session and require users to re-enter credentials to log in again.

### Error Handling and Scenarios

- If a user enters incorrect credentials or TOTP codes, appropriate error messages will be displayed.
- In case of a forgotten password, a password reset mechanism will be implemented using email verification.
- In the event of a TOTP configuration error or loss of the TOTP device, a recovery mechanism will be provided, which could involve using backup codes or contacting support.

### Security Considerations

- All user data, including email addresses, passwords, and TOTP secrets, will be stored securely and encrypted in the database.
- HTTPS will be enforced for all interactions with the system to ensure data confidentiality.
- Adequate rate limiting and brute-force protection will be implemented on the login and verification endpoints.
- TOTP secret keys will be stored securely, and TOTP code generation will follow the industry-standard time-synchronization guidelines.

By adhering to these detailed technical specifications, the system will seamlessly offer a secure and user-centric pathway for individuals to engage in account creation, validate their email addresses, establish a Time-Based One-Time Password (TOTP) mechanism, and seamlessly access their accounts.


# TDD Setup

## Major Components:
- Unit Testing
- Integration Testing
- E2E Testing

## Unit Testing
Unit testing in React involves testing individual components or functions in isolation to ensure they behave as expected. The goal is to verify that each unit of your application works correctly and produces the desired output.

**Libraries:** React Testing Library, Enzyme, Jest

## Integration Testing
Integration testing involves testing the interactions between different components, modules, or services within your application to ensure they work together as expected. This type of testing helps catch issues that arise when different parts of the application are combined.

**Libraries:** Jasmine, Jest, Mocha

## End-to-End (E2E) Testing
End-to-end testing involves testing your application's complete flow, simulating real user interactions across different components, services, and layers. E2E tests help identify issues that might occur when multiple parts of the application work together in a real-world scenario.

**Libraries:** Cypress, Puppeteer, TestCafe

### React Testing Library:
**Pros:**
- User-Centric Testing: React Testing Library encourages testing components from the user's perspective.
- Accessibility Testing: Emphasizes testing accessibility for all users, including those with disabilities.
- Resilient Tests: Tends to be more resilient to changes in component implementation.
- Minimal Abstraction: Provides a minimalistic API for readable and maintainable test code.
- Officially Recommended: Endorsed by the React team, suitable for applications following best practices.
- Integration with Jest and Others: Integrates well with popular testing frameworks, such as Jest.

**Cons:**
- Shallow Rendering: Lacks support for shallow rendering like Enzyme, potentially making testing of nested components harder.
- Limited Component Manipulation: May be less suitable for advanced scenarios involving direct component state manipulation.

### Enzyme:
**Pros:**
- Shallow Rendering: Supports shallow rendering to isolate components for focused testing.
- Component Lifecycle Control: Tools for simulating component lifecycle methods, useful for specific behaviors.
- Advanced Component Manipulation: Allows direct manipulation of component states and props, aiding certain testing scenarios.
- Component Type Specific Methods: Provides tailored methods for different component types.

**Cons:**
- Implementation Dependency: Tests can become tightly coupled to component implementation details.
- Complexity: Rich API can lead to more intricate test code, especially for deeply nested components.
- Less Emphasis on User Behavior: Focuses less on testing from the user's perspective compared to React Testing Library.

### Jest:
**Pros:**
- Tailored for React: Developed for React applications, widely adopted in the React ecosystem.
- Comprehensive Features: Includes assertion libraries, mocking capabilities, and a test runner.
- Snapshot Testing: Facilitates tracking changes in UI components over time.
- Asynchronous Testing: Strong support for asynchronous testing using async/await and Promises.
- Code Coverage Reporting: Built-in code coverage reporting for better insights.
- Beginner-Friendly: Offers an intuitive API and clear error messages, suitable for newcomers.
- Integration with React Testing Library: Supports user-centric testing of React components.

**Cons:**
- Non-React Configuration: Additional setup might be required for non-React projects.
- Performance: Can be slower, especially for larger test suites.
- Customizability: Might be less customizable compared to some other frameworks.

### Jasmine:
**Pros:**
- General-Purpose: Easy-to-set-up general-purpose testing framework.
- Built-in Assertion Library: Self-contained with its own assertion library.
- Asynchronous Testing: Supports asynchronous testing with a built-in mechanism.
- Readable Syntax: Uses clear syntax resembling natural language.
- Versatility: Works well for both front-end and back-end JavaScript testing.

**Cons:**
- Lack of Mocking: Lacks built-in mocking capabilities, requiring additional libraries.
- Performance: Might be less performant for larger test suites due to synchronous nature.
- Configuration Complexity: Setup might be less straightforward compared to some other frameworks.

### Mocha:
**Pros:**
- High Flexibility: Modular framework, allowing choice of assertion and mocking libraries.
- Plugin Support: Wide range of plugins and integrations for different testing needs.
- Asynchronous Testing: Supports asynchronous testing with callbacks, Promises, or async/await.
- Reporting and Error Messages: Provides detailed test reporting and clear error messages.
- Versatility: Can be used for both front-end and back-end JavaScript testing.

**Cons:**
- Configuration: Additional configuration needed for assertion and mocking libraries.
- Dependency Management: Modularity might lead to managing more dependencies.
- Initial Setup Complexity: Initial setup might be slightly more complex for newcomers.

## Conclusion:
- Jest and React Testing Library are excellent for testing React applications, particularly React components.
- Cypress is widely popular for E2E testing due to its powerful simulation capabilities.
- By using React Testing Library and Jest for Unit Testing TDD, and Cypress for E2E Testing TDD, comprehensive test coverage can be achieved.
- Integration tests pinpoint issues within components or modules, while E2E tests identify issues when the entire application functions together.

