# Student Superhub

A comprehensive productivity platform designed for students, featuring AI chat, file conversion tools, note-taking, and more.

## Features

- **AI Chat**: Interactive AI-powered chat assistant for learning and problem-solving
- **File Converter**: Convert files between different formats
- **Notes**: Organize and manage your study notes
- **Tools**: Collection of useful student tools
- **Recent Activity**: Track your recent interactions and activities

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
- Email Services

## Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd student-superhub
   ```

2. **Install server dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   - Create `.env` file in server directory
   - Add required environment variables (MongoDB URI, JWT secret, email config, etc.)

5. **Start MongoDB**
   Make sure MongoDB is running on your system

6. **Start the development servers**

   **Server:**

   ```bash
   cd server
   npm start
   ```

   **Client:**

   ```bash
   cd client
   npm run dev
   ```

7. **Access the application**
   Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
student-superhub/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── navbar/    # Navigation component
│   │   │   ├── carousel/  # Image carousel
│   │   │   └── recentActivity/ # Activity tracker
│   │   ├── modules/       # Feature modules
│   │   │   ├── ai-chat/   # AI chat functionality
│   │   │   ├── file-converter/ # File conversion tools
│   │   │   ├── home/      # Home page
│   │   │   ├── notes/     # Note-taking feature
│   │   │   └── tools/     # Additional tools
│   │   └── data/          # Data management
│   └── package.json
├── server/                 # Backend Node.js application
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── models/        # MongoDB models
│   │   ├── modules/       # API modules
│   │   ├── services/      # External services (email, etc.)
│   │   └── utility/       # Helper utilities
│   └── package.json
└── README.md
```

## API Endpoints

### User Management

- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Notes

- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@studentsuperhub.com or create an issue in this repository.
