# Authentication System

A simple client-side Authentication System built using **HTML, CSS, and JavaScript**. 
This project allows users to register, log in, and access a protected dashboard page using browser Local Storage.

## Features

* User Registration
* User Login
* Password Validation

  * Minimum 8 characters
  * At least 1 numeric digit
* Duplicate Username/Email Detection
* Secure Login Validation
* Protected Dashboard Page
* Logout Functionality
* Error Handling for Invalid Credentials

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser Local Storage

## Project Structure

Authentication-System/

├── index.html          # Login Page

├── register.html       # Registration Page

├── dashboard.html      # Protected Dashboard

├── style.css           # Styling

└── script.js           # Authentication Logic

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Launch `register.html` in your browser.
4. Create a new account.
5. Log in using the registered credentials.
6. Access the protected dashboard.

## Validation Rules

### Registration

* Username must be unique.
* Email must be unique.
* Password must:

  * Be at least 8 characters long.
  * Contain at least one number.

### Login

* Users can log in using either:

  * Username
  * Email
* Incorrect credentials display a generic error message:

  * "Invalid username/email or password."

## Protected Route

The dashboard page can only be accessed after successful login. If a user is not authenticated, they are redirected to the login page.


## Future Improvements

* Password hashing
* Backend integration (Node.js, Express, MongoDB)
* Session management
* JWT Authentication
* Forgot Password functionality
* Email verification
* Strong password requirements

## Disclaimer

This project stores user information in Local Storage and is intended for educational and learning purposes only. It should not be used in production environments where secure authentication is required.

## Author

Piyush Raj

Built as a Front-End Authentication System using HTML, CSS, and JavaScript.
