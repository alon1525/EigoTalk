import express from 'express';

const router = express.Router();

// GET /api/progress - Get user progress
router.get('/', (req, res) => {
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
    ],
    levelProgress: {
      1: { completed: 3, total: 15, percentage: 20 },
      2: { completed: 0, total: 18, percentage: 0 },
      3: { completed: 0, total: 20, percentage: 0 },
      4: { completed: 0, total: 16, percentage: 0 },
      5: { completed: 0, total: 17, percentage: 0 },
      6: { completed: 0, total: 14, percentage: 0 },
    }
  };
  
  res.json(progress);
});

// POST /api/progress/lesson - Update lesson completion
router.post('/lesson', (req, res) => {
  const { lessonId, levelId, completed } = req.body;
  
  // In a real app, this would update the database
  const result = {
    lessonId,
    levelId,
    completed,
    timestamp: new Date().toISOString(),
    message: `Lesson ${lessonId} marked as ${completed ? 'completed' : 'incomplete'}`
  };
  
  res.json(result);
});

// POST /api/progress/level - Update level completion
router.post('/level', (req, res) => {
  const { levelId, completed } = req.body;
  
  // In a real app, this would update the database
  const result = {
    levelId,
    completed,
    timestamp: new Date().toISOString(),
    message: `Level ${levelId} marked as ${completed ? 'completed' : 'incomplete'}`
  };
  
  res.json(result);
});

export default router;
