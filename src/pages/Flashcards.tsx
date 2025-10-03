import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, RotateCw, CheckCircle2, X } from "lucide-react";

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flashcards = [
    {
      english: "Nice to meet you",
      japanese: "はじめまして",
      example: "Hi, I'm Sarah. Nice to meet you!",
      exampleJp: "こんにちは、サラです。はじめまして！",
      level: 1,
    },
    {
      english: "How are you?",
      japanese: "元気？ / 調子はどう？",
      example: "Hey! How are you today?",
      exampleJp: "やあ！今日はどう？",
      level: 1,
    },
    {
      english: "I'm good, thanks!",
      japanese: "元気だよ、ありがとう！",
      example: "I'm good, thanks! How about you?",
      exampleJp: "元気だよ、ありがとう！あなたは？",
      level: 1,
    },
  ];

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Your Flashcards</h1>
            <p className="text-muted-foreground text-lg">
              Review saved phrases with spaced repetition
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="p-4 text-center shadow-card">
              <p className="text-3xl font-bold text-primary">{flashcards.length}</p>
              <p className="text-sm text-muted-foreground">Total Cards</p>
            </Card>
            <Card className="p-4 text-center shadow-card">
              <p className="text-3xl font-bold text-secondary">12</p>
              <p className="text-sm text-muted-foreground">Mastered</p>
            </Card>
            <Card className="p-4 text-center shadow-card">
              <p className="text-3xl font-bold text-accent">5</p>
              <p className="text-sm text-muted-foreground">To Review</p>
            </Card>
          </div>

          {/* Flashcard */}
          <div className="relative mb-8">
            <div
              className={`relative w-full h-96 transition-transform duration-500 transform-gpu ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <Card
                className={`absolute inset-0 p-8 shadow-soft cursor-pointer flex flex-col items-center justify-center ${
                  isFlipped ? "invisible" : "visible"
                }`}
                onClick={() => setIsFlipped(true)}
              >
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <Button size="icon" variant="ghost">
                      <Volume2 className="h-5 w-5 text-primary" />
                    </Button>
                  </div>

                  <h2 className="text-4xl font-bold text-foreground">
                    {currentCard.english}
                  </h2>

                  <div className="text-muted-foreground">
                    <p className="italic mb-1">{currentCard.example}</p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Click to reveal translation
                  </p>
                </div>
              </Card>

              {/* Back */}
              <Card
                className={`absolute inset-0 p-8 shadow-soft cursor-pointer flex flex-col items-center justify-center ${
                  isFlipped ? "visible" : "invisible"
                }`}
                style={{ transform: "rotateY(180deg)" }}
                onClick={() => setIsFlipped(false)}
              >
                <div className="text-center space-y-6">
                  <h2 className="text-4xl font-bold text-primary">
                    {currentCard.japanese}
                  </h2>

                  <div className="space-y-2">
                    <p className="text-lg text-foreground">{currentCard.english}</p>
                    <div className="text-muted-foreground">
                      <p className="italic mb-1">{currentCard.exampleJp}</p>
                      <p className="text-sm">{currentCard.example}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Click to flip back
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" onClick={handlePrevious}>
              Previous
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {flashcards.length}
              </span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <RotateCw className="h-4 w-4" />
              </Button>
            </div>

            <Button variant="outline" onClick={handleNext}>
              Next
            </Button>
          </div>

          {/* Mastery Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="border-destructive/50 text-destructive hover:bg-destructive/10"
              onClick={handleNext}
            >
              <X className="h-4 w-4 mr-2" />
              Need More Practice
            </Button>
            <Button
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={handleNext}
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Got It!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
