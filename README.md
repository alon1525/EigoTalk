# My English Friend

A fullstack English learning application built with React, TypeScript, TailwindCSS, and Express.js. This app helps Japanese learners improve their English through real conversations, interactive lessons, and spaced repetition flashcards.

## 🚀 Features

- **6 Progressive Levels**: From beginner greetings to fluent conversation
- **Interactive Lessons**: Real dialogues with native pronunciation
- **Smart Flashcards**: Spaced repetition system for vocabulary retention
- **Progress Tracking**: Monitor your learning journey and achievements
- **Modern UI**: Beautiful, responsive design with TailwindCSS
- **TypeScript**: Full type safety across the entire application

## 🏗️ Project Structure

```
my-english-friend/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── assets/        # Static assets
│   ├── public/            # Public assets
│   └── package.json       # Frontend dependencies
├── server/                # Express.js backend
│   ├── routes/            # API route handlers
│   ├── controllers/       # Business logic
│   ├── models/            # Data models
│   ├── middleware/        # Custom middleware
│   ├── config/            # Configuration files
│   └── package.json       # Backend dependencies
└── package.json           # Root package.json with scripts
```

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for styling
- **Radix UI** for accessible components
- **React Router** for navigation
- **TanStack Query** for data fetching
- **Lucide React** for icons

### Backend
- **Express.js** with ES modules
- **CORS** for cross-origin requests
- **Helmet** for security
- **Morgan** for logging
- **dotenv** for environment variables

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd my-english-friend
   npm run install:all
   ```

2. **Set up environment variables:**
   ```bash
   cd server
   cp env.example .env
   # Edit .env with your configuration
   ```

3. **Start development servers:**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start them separately:
   npm run client:dev    # Frontend on http://localhost:8080
   npm run server:dev    # Backend on http://localhost:3001
   ```

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run client:dev` - Start only the React frontend
- `npm run server:dev` - Start only the Express backend
- `npm run client:build` - Build the React app for production
- `npm run server:start` - Start the production server
- `npm run install:all` - Install dependencies for all packages

## 📚 API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Lessons
- `GET /api/levels` - Get all learning levels
- `GET /api/lessons/:levelId` - Get lessons for a specific level
- `GET /api/lesson/:lessonId` - Get a specific lesson

### Progress
- `GET /api/progress` - Get user progress data
- `POST /api/progress/lesson` - Update lesson completion
- `POST /api/progress/level` - Update level completion

### Flashcards
- `GET /api/flashcards` - Get all flashcards
- `POST /api/flashcards` - Create a new flashcard
- `PUT /api/flashcards/:id` - Update a flashcard
- `DELETE /api/flashcards/:id` - Delete a flashcard

## 🎯 Learning Levels

1. **Foundations** - Greetings & Introductions
2. **Daily Life** - Shopping & Directions  
3. **Conversation Flow** - Describing & Reacting
4. **Expression** - Opinions & Ideas
5. **Natural Flow** - Idioms & Casual Talk
6. **Mastery** - Cultural Nuance

## 🔧 Development

### Frontend Development
The React app uses Vite for fast development with hot module replacement. All components are built with TypeScript and styled with TailwindCSS.

### Backend Development
The Express server provides a RESTful API with proper error handling, CORS configuration, and security middleware.

### Adding New Features
1. Create components in `client/src/components/`
2. Add pages in `client/src/pages/`
3. Create API routes in `server/routes/`
4. Add business logic in `server/controllers/`

## 📦 Production Deployment

1. **Build the frontend:**
   ```bash
   npm run client:build
   ```

2. **Start the production server:**
   ```bash
   npm run server:start
   ```

3. **Environment Variables:**
   - `PORT` - Server port (default: 3001)
   - `CLIENT_URL` - Frontend URL for CORS
   - `NODE_ENV` - Environment (development/production)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with modern web technologies
- UI components from Radix UI
- Icons from Lucide React
- Styling with TailwindCSS