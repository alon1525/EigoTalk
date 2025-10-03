import express from 'express';

const router = express.Router();

// GET /api/flashcards - Get all flashcards
router.get('/', (req, res) => {
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

// POST /api/flashcards - Create a new flashcard
router.post('/', (req, res) => {
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

// PUT /api/flashcards/:id - Update a flashcard
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { difficulty, lastReviewed } = req.body;
  
  // In a real app, this would update the database
  const updatedCard = {
    id: parseInt(id),
    difficulty: difficulty || "easy",
    lastReviewed: lastReviewed || new Date().toISOString(),
    nextReview: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  };
  
  res.json(updatedCard);
});

// DELETE /api/flashcards/:id - Delete a flashcard
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  // In a real app, this would delete from database
  res.json({ message: `Flashcard ${id} deleted successfully` });
});

export default router;
