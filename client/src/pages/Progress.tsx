import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Flame, Calendar, BookOpen, Volume2 } from "lucide-react";

const Progress = () => {
  const stats = {
    currentLevel: 1,
    lessonsCompleted: 7,
    totalLessons: 100,
    flashcardsReviewed: 156,
    currentStreak: 5,
    longestStreak: 12,
    hoursLearned: 8.5,
    achievements: [
      { name: "First Steps", icon: "👋", unlocked: true },
      { name: "Streak Master", icon: "🔥", unlocked: true },
      { name: "Conversation Ready", icon: "💬", unlocked: false },
      { name: "Level Champion", icon: "🏆", unlocked: false },
    ],
  };

  const recentActivity = [
    {
      date: "Today",
      lessons: ["Lesson 7: Daily Routines", "Flashcards Review"],
      points: 150,
    },
    {
      date: "Yesterday",
      lessons: ["Lesson 6: Talking About Food"],
      points: 100,
    },
    {
      date: "2 days ago",
      lessons: ["Lesson 5: Making Plans", "Flashcards Review"],
      points: 120,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Progress</h1>
          <p className="text-muted-foreground text-lg">
            Track your learning journey and celebrate your achievements
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <Badge variant="secondary">Level {stats.currentLevel}</Badge>
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">
              {stats.lessonsCompleted}
            </p>
            <p className="text-sm text-muted-foreground">
              Lessons Completed
            </p>
            <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary-light"
                style={{
                  width: `${(stats.lessonsCompleted / stats.totalLessons) * 100}%`,
                }}
              />
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <Flame className="h-8 w-8 text-accent" />
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">
              {stats.currentStreak}
            </p>
            <p className="text-sm text-muted-foreground">
              Day Streak
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Longest: {stats.longestStreak} days
            </p>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="h-8 w-8 text-secondary" />
              <span className="text-2xl">📚</span>
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">
              {stats.flashcardsReviewed}
            </p>
            <p className="text-sm text-muted-foreground">
              Flashcards Reviewed
            </p>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="h-8 w-8 text-primary" />
              <span className="text-2xl">⏱️</span>
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">
              {stats.hoursLearned}
            </p>
            <p className="text-sm text-muted-foreground">
              Hours Learned
            </p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="p-6 shadow-card">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Recent Activity
            </h2>

            <div className="space-y-4">
              {recentActivity.map((day, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/30 rounded-lg border border-border"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-medium text-foreground">{day.date}</p>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      +{day.points} pts
                    </Badge>
                  </div>
                  <ul className="space-y-1">
                    {day.lessons.map((lesson, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-secondary">✓</span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6 shadow-card">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Achievements
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {stats.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border text-center transition-all ${
                    achievement.unlocked
                      ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-sm"
                      : "bg-muted/30 border-border opacity-50"
                  }`}
                >
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <p className="text-sm font-medium text-foreground">
                    {achievement.name}
                  </p>
                  {!achievement.unlocked && (
                    <p className="text-xs text-muted-foreground mt-1">Locked</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
              <p className="text-sm text-center text-muted-foreground">
                🎯 Complete Level 1 to unlock{" "}
                <span className="font-medium text-accent">Conversation Ready</span>
              </p>
            </div>
          </Card>
        </div>

        {/* Learning Insights */}
        <Card className="mt-6 p-6 shadow-card">
          <h2 className="text-2xl font-semibold mb-4">This Week's Learning</h2>

          <div className="grid md:grid-cols-7 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
              const isActive = index < 5; // Mock data
              const intensity = isActive ? Math.random() * 100 : 0;

              return (
                <div key={day} className="text-center">
                  <div
                    className={`h-24 rounded-lg mb-2 transition-all ${
                      isActive
                        ? "bg-gradient-to-t from-primary to-primary-light"
                        : "bg-muted"
                    }`}
                    style={{ opacity: isActive ? 0.3 + intensity / 150 : 0.2 }}
                  />
                  <p className="text-xs text-muted-foreground">{day}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
