import { useState } from "react";
import Header from "@/components/Header";
import LevelCard from "@/components/LevelCard";
import { Button } from "@/components/ui/button";

const Levels = () => {
  const [userLevel] = useState(1); // Would come from user data

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

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Learning Path</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Progress through 6 carefully designed levels from beginner to fluent speaker.
            Each level builds on the last with real conversations and practical exercises.
          </p>

          <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Your Current Level</p>
              <p className="text-2xl font-bold text-primary">Level {userLevel}</p>
            </div>
            <Button variant="outline">
              Take Placement Test
            </Button>
          </div>
        </div>

        {/* Levels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level) => (
            <LevelCard key={level.level} {...level} />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
          <h3 className="font-semibold text-lg mb-2">How It Works</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Complete all lessons in a level to unlock the advancement test</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Pass the test to unlock the next level and continue your journey</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Practice anytime with flashcards and AI conversation partners</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Levels;
