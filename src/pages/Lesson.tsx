import { useState } from "react";
import Header from "@/components/Header";
import AudioPlayer from "@/components/AudioPlayer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, BookmarkPlus, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Lesson = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);

  const lesson = {
    level: 1,
    lessonNumber: 1,
    title: "Greetings & First Impressions",
    totalSteps: 4,
  };

  const steps = [
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
  ];

  const currentStepData = steps[currentStep];

  const handleSavePhrase = (phrase: string) => {
    toast({
      title: "Saved to Flashcards",
      description: `"${phrase}" added to your deck`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Lesson Header */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Level {lesson.level}
          </Button>

          <div className="flex items-center gap-3 mb-2">
            <Badge variant="secondary">
              Lesson {lesson.lessonNumber}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Level {lesson.level}
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>

          <div className="flex items-center gap-2">
            <div className="flex-1 bg-muted rounded-full h-2">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / lesson.totalSteps) * 100}%` }}
              />
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {currentStep + 1} of {lesson.totalSteps}
            </span>
          </div>
        </div>

        {/* Lesson Content */}
        <Card className="p-8 shadow-card mb-6">
          <h2 className="text-2xl font-semibold mb-2">{currentStepData.title}</h2>
          <p className="text-muted-foreground mb-6">{currentStepData.subtitle}</p>

          {currentStepData.type === "dialogue" && (
            <div className="space-y-4">
              <AudioPlayer text="Play full conversation" />

              <div className="space-y-4 mt-6">
                {currentStepData.content.map((line, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-primary">{line.speaker}</p>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8"
                          onClick={() => handleSavePhrase(line.text)}
                        >
                          <BookmarkPlus className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-lg mb-1">{line.text}</p>
                    <p className="text-sm text-muted-foreground">{line.translation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStepData.type === "explanation" && (
            <div className="space-y-6">
              {currentStepData.phrases?.map((phrase, index) => (
                <Card key={index} className="p-4 bg-muted/20 border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="text-lg font-semibold mb-1">{phrase.english}</p>
                      <p className="text-muted-foreground mb-2">{phrase.japanese}</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleSavePhrase(phrase.english)}
                    >
                      <BookmarkPlus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm bg-background/50 p-3 rounded-lg border border-border/50">
                    💡 {phrase.note}
                  </p>
                </Card>
              ))}
            </div>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          {currentStep < lesson.totalSteps - 1 ? (
            <Button onClick={() => setCurrentStep(currentStep + 1)}>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button className="gradient-accent">
              Complete Lesson
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
