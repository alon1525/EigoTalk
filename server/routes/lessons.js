import express from 'express';

const router = express.Router();

// GET /api/lessons/levels - Get all levels
router.get('/levels', (req, res) => {
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

// GET /api/lessons/:levelId - Get lessons for a specific level
router.get('/:levelId', (req, res) => {
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
        description: "Learn basic greetings and introductions"
      },
      {
        id: 2,
        level: 1,
        lessonNumber: 2,
        title: "Numbers & Time",
        totalSteps: 3,
        description: "Master numbers and telling time"
      }
    ]
  };
  
  const levelLessons = lessons[levelId] || [];
  res.json(levelLessons);
});

export default router;
