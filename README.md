# Express Authentication Application

This project is a basic Express.js application demonstrating user authentication using cookies. It includes routes for user signup, login, logout, and a secured page that requires authentication.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

## Setup

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    node index.js
    ```

4. Open your browser and navigate to `http://localhost:4041`.

## Direct Links to Pages

| Page          | URL            | Description                              |
|---------------|----------------|------------------------------------------|
| [Signup Page](https://cookiesauth.onrender.com/signUpPage)   | `/signUpPage`  | Displays the signup form                 |
| [Login Page](https://cookiesauth.onrender.com/logInPage)    | `/logInPage`   | Displays the login form                  |
| [Logout Page](https://cookiesauth.onrender.com/logOutPage)    | `/logOutPage`  | Displays the logout confirmation          |
| [Secured Page](https://cookiesauth.onrender.com/signup)   | `/secured_page` | Displays a secured page for logged-in users |

## Endpoints

### API Endpoints

- **Signup**
  - **URL:** `/signup`
  - **Method:** `POST`
  - **Description:** Registers a new user.
  - **Request Body:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
  - **Responses:**
    - `201 Created`: User signed up successfully.
    - `409 Conflict`: User already exists.

- **Login**
  - **URL:** `/login`
  - **Method:** `POST`
  - **Description:** Logs in a user and sets authentication cookies.
  - **Request Body:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
  - **Responses:**
    - `302 Found`: Redirects to the secured page.
    - `401 Unauthorized`: Invalid credentials.

- **Logout**
  - **URL:** `/logout`
  - **Method:** `POST`
  - **Description:** Logs out a user by clearing authentication cookies.
  - **Responses:**
    - `200 OK`: User logged out successfully.

## Middleware

- **isAuthenticated**
  - **Description:** Checks if the user is authenticated by verifying the presence of `auth` and `username` cookies.
  - **Usage:** Applied to the `/secured_page` route to protect it.

## Directory Structure

Here’s the structure of the project:
project-root/<br>
│<br>
├── view/<br>
│ ├── signup.ejs<br>
│ ├── login.ejs<br>
│ ├── logout.ejs<br>
│ └── securedPage.ejs<br>
│<br>
├── index.js<br>
└── package.json<br>
