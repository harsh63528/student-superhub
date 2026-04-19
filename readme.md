# Student Superhub

Student Superhub is a productivity platform built for students. It combines an AI-powered chat assistant, file conversion tools, note-taking, and a set of study utilities in one web application.

## Features

- **AI Chat**: Ask questions and get instant study support
- **File Converter**: Convert supported files between formats
- **Notes**: Create, edit, and organize study notes
- **Tools**: Useful student utilities and helpers
- **Recent Activity**: Review recent actions and usage history

## Tech Stack

### Frontend

- React 18
- Vite
- CSS3
- ESLint

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Email service support

## Installation

### Prerequisites

- Node.js 16 or higher
- MongoDB installed and running
- npm or yarn

### Setup

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd student-superhub
   ```

2. Install server dependencies

   ```bash
   cd server
   npm install
   ```

3. Install client dependencies

   ```bash
   cd ../client
   npm install
   ```

4. Create the environment file for the server

   ```bash
   cd ../server
   copy NUL .env
   ```

5. Configure `server/.env`

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/student-superhub
   JWT_SECRET=your_jwt_secret
   SenderEmail=your_email@gmail.com
   SenderPassword=your_email_password
   ```

6. Start MongoDB

   Make sure MongoDB is running before starting the server.

7. Start the application

   **Server:**

   ```bash
   cd server
   npm run dev
   ```

   **Client:**

   ```bash
   cd client
   npm run dev
   ```

8. Open the application

   ```text
   http://localhost:5173
   ```

## Project Structure

```
student-superhub/
├── client/                  # Frontend React application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── app.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── assets/         # Media and images
│   │   ├── component/      # Shared UI components
│   │   │   ├── 404.jsx
│   │   │   ├── carosuel/
│   │   │   ├── navbar/
│   │   │   └── recentActivity/
│   │   ├── data/           # Static data sources
│   │   └── modules/        # Feature modules
│   │       ├── ai chat/
│   │       ├── file converter/
│   │       ├── home/
│   │       ├── notes/
│   │       └── tools/
│   └── package.json
├── server/                  # Backend Node.js application
│   ├── index.js
│   ├── package.json
│   └── src/
│       ├── server.js
│       ├── config/         # Database configuration
│       ├── models/         # MongoDB models
│       ├── modules/        # API modules
│       │   ├── notes/
│       │   └── user/
│       ├── services/       # External services
│       └── utility/        # Helper utilities
└── readme.md
```

## API Endpoints

### User

- `POST /api/users/register` - Register a new account
- `GET /api/users/verify/:token` - Verify a new user's email
- `POST /api/users/login` - Log in with email/password
- `GET /api/users/profile` - Retrieve the authenticated user profile
- `POST /api/users/logout` - Log out the current user

### Notes

- `GET /api/notes` - Retrieve notes
- `POST /api/notes` - Create a note
- `PUT /api/notes/:id` - Update a note by ID
- `DELETE /api/notes/:id` - Delete a note by ID

## Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature/YourFeature`)
3. Commit your changes
4. Push to your branch
5. Open a pull request

## License

This project is licensed under the MIT License.

## Support

If you need help, open an issue in this repository.
