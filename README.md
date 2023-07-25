# JWT_Auth_App

## Introduction

Welcome to the GitHub repository for JWT-Auth-App, a full-stack web application developed using the PERN stack (PostgreSQL, Express.js, React.js, Node.js). This project focuses on secure user registration and login using JWT (JSON Web Tokens) and the bcrypt library for data hashing. Additionally, the application implements a "Remember Me" functionality by generating a JWT-Token that is saved in the user's local storage. The front-end is designed using React.js, React Hooks, React Router, and Tailwind CSS to deliver a pleasant and smooth user experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Secure Registration and Login:** User data is securely hashed using the bcrypt library for enhanced security.
- **JSON Web Tokens (JWT):** JWT tokens are generated for authenticated users, providing a secure way to handle user sessions.
- **"Remember Me" Functionality:** JWT-Token is saved in the user's local storage for persistent login sessions.
- **PERN Stack:** PostgreSQL for the database, Express.js and Node.js for the backend, and React.js for the frontend.
- **React Hooks and Router:** Utilizes React Hooks for state management and React Router for smooth navigation between components.
- **Tailwind CSS:** Enhances the user interface with modern and responsive styling.

## Technologies Used

- PostgreSQL
- Express.js
- React.js
- Node.js
- Postman (for API testing)
- Heroku (for deployment)

## Installation

To set up the project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory using the terminal or command prompt.
3. Install the required dependencies for both the server and client using the following command:

```bash
npm install
```

## Usage

To run the application locally, follow these steps:

1. Start the backend server:

```bash
npm run server
```

1. Start the React development server for the frontend:

```bash
npm run client
```

The application will be accessible in your browser at http://localhost:3000.

## Deployment

The JWT-Auth-App is deployed on Heroku. Any changes pushed to the main branch will trigger an automatic deployment to the live environment. (Heroku stopped its free tier, hence the deployment has been deprecated)


## Contributing

We welcome contributions to enhance the JWT-Auth-App. If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request.


## License

The content of this project is licensed under the GNU license. Feel free to reuse and modify the code, but please provide attribution.
