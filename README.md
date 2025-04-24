# Utawala Football Registration

A platform for players to register for Utawala's premier football programs.

## Overview

This project provides a user-friendly interface for individuals to sign up for Utawala Football's various programs. It includes:

* A welcoming homepage with clear calls to action.
* A detailed player profile page where users can view and edit their information.
* Basic form handling for updating player details.
* Simple data management using a JSON Server backend (for development/mock API).
* User feedback through Toastify notifications.
* Navigation between different sections using React Router.
* Informational pages for licensing and privacy policy.

## Technologies Used

* **Frontend:**
    * React
    * React Router DOM (for navigation)
    * Tailwind CSS (for styling)
    * React Toastify (for notifications)
* **Backend (Development/Mock):**
    * JSON Server

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd <YOUR_PROJECT_DIRECTORY>
    ```
    *(Replace `<YOUR_REPOSITORY_URL>` and `<YOUR_PROJECT_DIRECTORY>` with your actual repository details)*

2.  **Install frontend dependencies:**
    ```bash
    cd frontend
    npm install
    # or
    yarn install
    ```

3.  **Start the frontend development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will typically run the frontend on `http://localhost:3000`.

4.  **Install backend dependencies (JSON Server):**
    ```bash
    cd backend
    npm install
    # or
    yarn install
    ```

5.  **Start the backend server (JSON Server):**
    ```bash
    npm run start
    # or
    yarn start
    ```
    This will typically run the backend on `http://localhost:3001`. Ensure your frontend is configured to fetch data from this address.

## Project Structure

uta-football-registration/
├── frontend/
│   ├── public/
│   │   └── ...
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── Footer.js
│   │   │   ├── Home.js
│   │   │   ├── LicensingPage.js
│   │   │   ├── PlayerProfile.js
│   │   │   └── PrivacyPolicyPage.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   ├── package-lock.json
│   └── ...
├── backend/
│   ├── db.json
│   ├── package.json
│   └── package-lock.json
├── README.md
└── ...


## Usage

* Navigate to the homepage (`/`) to see the welcome message and call-to-action buttons.
* Click "Register Now" to go to the registration page (you'll need to implement this route and component, typically at `/register`).
* Click "About" to learn more about Utawala Football (you'll need to implement this route and component, typically at `/about`).
* Player profiles can be accessed via `/players/:id`, where `:id` is the unique identifier of a player.
* The licensing information is available at `/licensing`.
* The privacy policy can be found at `/privacy-policy`.

## Backend (JSON Server)

The backend uses JSON Server to simulate a REST API. The `db.json` file contains the data. You can interact with it using standard HTTP methods (GET, POST, PUT, DELETE) on the `/players` endpoint.

## Deployment

The frontend can be deployed to platforms like Netlify, Vercel, or GitHub Pages.

The backend (JSON Server) can be deployed to platforms like Render. Refer to the Render documentation for detailed deployment instructions, remembering to set the build command to `npm install` (or `yarn install`) and the start command to `npm start.js'.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate (if you add testing).

## License

*

## Authors and Acknowledgement

[Brian Tallam]

[Youtube was a great help]

## Project Status

 (Active maintenance)*

---