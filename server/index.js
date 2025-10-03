import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:8080',
  credentials: true
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'My English Friend API is running',
    timestamp: new Date().toISOString()
  });
});

// Lesson routes
app.get('/api/levels', (req, res) => {
  const levels = [
    {
      level: 1,
      title: "Foundations",
      description: "Master greetings, pronunciation, and self-introduction",
      lessonsCount: 15,
      isUnlocked: true,
      isCompleted: false,
      progress: 45,
    },
    {
      level: 2,
      title: "Daily Life",
      description: "Navigate shopping, ordering food, and asking for directions",
      lessonsCount: 18,
      isUnlocked: false,
      isCompleted: false,
      progress: 0,
    },
    {
      level: 3,
      title: "Conversation Flow",
      description: "Learn to describe, react, and ask questions naturally",
      lessonsCount: 20,
      isUnlocked: false,
      isCompleted: false,
      progress: 0,
    },
    {
      level: 4,
      title: "Expression",
      description: "Express opinions and connect ideas smoothly",
      lessonsCount: 16,
      isUnlocked: false,
      isCompleted: false,
      progress: 0,
    },
    {
      level: 5,
      title: "Natural Flow",
      description: "Master casual talk, idioms, and everyday expressions",
      lessonsCount: 17,
      isUnlocked: false,
      isCompleted: false,
      progress: 0,
    },
    {
      level: 6,
      title: "Mastery",
      description: "Fluent conversation with cultural nuance and confidence",
      lessonsCount: 14,
      isUnlocked: false,
      isCompleted: false,
      progress: 0,
    },
  ];
  
  res.json(levels);
});

app.get('/api/lessons/:levelId', (req, res) => {
  const { levelId } = req.params;
  
  // Mock lesson data - in a real app, this would come from a database
  const lessons = {
    1: [
      {
        id: 1,
        level: 1,
        lessonNumber: 1,
        title: "Greetings & First Impressions",
        totalSteps: 4,
        steps: [
          {
            type: "dialogue",
            title: "Listen to the Conversation",
            subtitle: "Pay attention to pronunciation and natural flow",
            content: [
              { speaker: "Sarah", text: "Hi! Nice to meet you. I'm Sarah.", translation: "こんにちは！はじめまして。サラです。" },
              { speaker: "Yuki", text: "Nice to meet you too! I'm Yuki.", translation: "はじめまして！ユキです。" },
              { speaker: "Sarah", text: "How are you today?", translation: "今日はどう？" },
              { speaker: "Yuki", text: "I'm good, thanks! How about you?", translation: "元気だよ、ありがとう！あなたは？" },
            ],
          },
          {
            type: "explanation",
            title: "Key Phrases",
            subtitle: "Natural ways to greet and introduce yourself",
            phrases: [
              {
                english: "Nice to meet you",
                japanese: "はじめまして",
                note: "Use when meeting someone for the first time. Very common and polite.",
              },
              {
                english: "How are you?",
                japanese: "元気？ / 調子はどう？",
                note: "Casual greeting. Native speakers often say this without expecting a detailed answer.",
              },
              {
                english: "I'm good, thanks!",
                japanese: "元気だよ、ありがとう！",
                note: "Simple, friendly response. You can also say 'Great!' or 'Not bad!'",
              },
            ],
          },
        ]
      }
    ]
  };
  
  const levelLessons = lessons[levelId] || [];
  res.json(levelLessons);
});

app.get('/api/lesson/:lessonId', (req, res) => {
  const { lessonId } = req.params;
  
  // Mock single lesson data
  const lesson = {
    id: parseInt(lessonId),
    level: 1,
    lessonNumber: 1,
    title: "Greetings & First Impressions",
    totalSteps: 4,
    steps: [
      {
        type: "dialogue",
        title: "Listen to the Conversation",
        subtitle: "Pay attention to pronunciation and natural flow",
        content: [
          { speaker: "Sarah", text: "Hi! Nice to meet you. I'm Sarah.", translation: "こんにちは！はじめまして。サラです。" },
          { speaker: "Yuki", text: "Nice to meet you too! I'm Yuki.", translation: "はじめまして！ユキです。" },
          { speaker: "Sarah", text: "How are you today?", translation: "今日はどう？" },
          { speaker: "Yuki", text: "I'm good, thanks! How about you?", translation: "元気だよ、ありがとう！あなたは？" },
        ],
      },
      {
        type: "explanation",
        title: "Key Phrases",
        subtitle: "Natural ways to greet and introduce yourself",
        phrases: [
          {
            english: "Nice to meet you",
            japanese: "はじめまして",
            note: "Use when meeting someone for the first time. Very common and polite.",
          },
          {
            english: "How are you?",
            japanese: "元気？ / 調子はどう？",
            note: "Casual greeting. Native speakers often say this without expecting a detailed answer.",
          },
          {
            english: "I'm good, thanks!",
            japanese: "元気だよ、ありがとう！",
            note: "Simple, friendly response. You can also say 'Great!' or 'Not bad!'",
          },
        ],
      },
    ]
  };
  
  res.json(lesson);
});

// Progress tracking
app.get('/api/progress', (req, res) => {
  // Mock progress data
  const progress = {
    currentLevel: 1,
    totalLessonsCompleted: 3,
    totalLessons: 100,
    streak: 7,
    timeSpent: 120, // minutes
    achievements: [
      { id: 1, name: "First Steps", description: "Complete your first lesson", unlocked: true },
      { id: 2, name: "Week Warrior", description: "Study for 7 days in a row", unlocked: true },
      { id: 3, name: "Phrase Master", description: "Save 50 phrases to flashcards", unlocked: false },
    ]
  };
  
  res.json(progress);
});

// Flashcards
app.get('/api/flashcards', (req, res) => {
  const flashcards = [
    {
      id: 1,
      english: "Nice to meet you",
      japanese: "はじめまして",
      note: "Use when meeting someone for the first time. Very common and polite.",
      difficulty: "easy",
      lastReviewed: "2024-01-15T10:30:00Z",
      nextReview: "2024-01-16T10:30:00Z"
    },
    {
      id: 2,
      english: "How are you?",
      japanese: "元気？ / 調子はどう？",
      note: "Casual greeting. Native speakers often say this without expecting a detailed answer.",
      difficulty: "easy",
      lastReviewed: "2024-01-15T11:00:00Z",
      nextReview: "2024-01-16T11:00:00Z"
    }
  ];
  
  res.json(flashcards);
});

app.post('/api/flashcards', (req, res) => {
  const { english, japanese, note } = req.body;
  
  // In a real app, this would save to a database
  const newCard = {
    id: Date.now(),
    english,
    japanese,
    note,
    difficulty: "easy",
    lastReviewed: new Date().toISOString(),
    nextReview: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours from now
  };
  
  res.status(201).json(newCard);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 My English Friend API is ready!`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});

export default app;
