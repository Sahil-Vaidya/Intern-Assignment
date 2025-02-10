# Event Management Platform

This is a full-stack event management platform where users can create, manage, and view events. It includes user authentication, real-time updates for attendees, and CRUD operations for events.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Authentication
- Register and log in with JWT-based authentication.
- Guest login for limited access.

### Event Management
- Create, update, and delete events.
- View upcoming and past events with filters.

### Real-Time Updates
- Real-time attendee count updates using WebSockets (Socket.IO).

### Responsive Design
- Works seamlessly on all devices.

## Technologies Used

### Frontend
- React.js
- Axios
- React Router DOM
- Socket.IO Client
- TailwindCSS or Material-UI (optional for styling)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Socket.IO
- JWT for Authentication
- Bcrypt for Password Hashing
## Setup Instructions

### Backend Setup

1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend root and add:
   ```sh
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the frontend root and add:
   ```sh
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start the frontend server:
   ```sh
   npm start
   ```

### Running the Application
Ensure both the backend and frontend servers are running:
```sh
# Run backend
cd backend && npm run dev

# Run frontend
cd frontend && npm start
```
## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make changes and commit.
4. Open a pull request.

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.
