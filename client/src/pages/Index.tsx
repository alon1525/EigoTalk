import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import heroImage from "@/assets/hero-image.jpg";
import { MessageCircle, Volume2, BookOpen, TrendingUp, Award, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-20" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Speak English
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Naturally & Confidently
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Most Japanese learners study for years but can't speak comfortably. 
                EigoTalk teaches through real conversations, phrases, and context — 
                helping you sound natural and actually enjoy practicing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/levels">
                  <Button size="lg" className="gradient-accent hover:opacity-90 transition-opacity">
                    Start Learning Free
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Take Placement Test
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-hero opacity-30 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="People learning English through conversation"
                className="relative rounded-3xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn English the Natural Way
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No textbook grammar drills. No random sentences. 
            Just practical, spoken English you'll actually use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: MessageCircle,
              title: "Real Conversations",
              description: "Learn through dialogues from daily life — ordering food, small talk, expressing opinions naturally.",
            },
            {
              icon: Volume2,
              title: "Native Pronunciation",
              description: "Listen to natural speech patterns and practice speaking with instant feedback.",
            },
            {
              icon: BookOpen,
              title: "Context Over Grammar",
              description: "Grammar explained only when needed. Focus on how people really talk.",
            },
            {
              icon: TrendingUp,
              title: "6 Progressive Levels",
              description: "Start from greetings to fluent conversation. Advance at your own pace.",
            },
            {
              icon: Award,
              title: "Smart Flashcards",
              description: "Save any phrase instantly. Review with spaced repetition to remember forever.",
            },
            {
              icon: Users,
              title: "AI Practice Partner",
              description: "Role-play real scenarios with AI. Practice ordering coffee or asking directions.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-soft transition-all duration-300 border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Level Preview Section */}
      <section className="gradient-card py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Journey to Fluency
            </h2>
            <p className="text-muted-foreground text-lg">
              Six carefully crafted levels from beginner to fluent speaker
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { level: 1, title: "Foundations", subtitle: "Greetings & Introductions" },
              { level: 2, title: "Daily Life", subtitle: "Shopping & Directions" },
              { level: 3, title: "Conversation", subtitle: "Describing & Reacting" },
              { level: 4, title: "Expression", subtitle: "Opinions & Ideas" },
              { level: 5, title: "Natural Flow", subtitle: "Idioms & Casual Talk" },
              { level: 6, title: "Mastery", subtitle: "Cultural Nuance" },
            ].map((level, index) => (
              <Card
                key={level.level}
                className="p-6 text-center shadow-card hover:shadow-soft transition-all duration-300 border-primary/20 hover:border-primary/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light mx-auto mb-3 flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {level.level}
                </div>
                <h3 className="font-semibold text-lg mb-1">{level.title}</h3>
                <p className="text-sm text-muted-foreground">{level.subtitle}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/levels">
              <Button size="lg" className="gradient-accent hover:opacity-90 transition-opacity">
                Explore All Levels
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="gradient-hero p-12 text-center shadow-soft border-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Speak English Naturally?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Japanese learners who are finally speaking confidently. 
            Start your journey today — completely free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/levels">
              <Button size="lg" variant="secondary" className="bg-card hover:bg-card/90">
                Start Learning Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-card/80 backdrop-blur-sm border-primary/30 text-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover:border-primary-foreground transition-all">
              Take Placement Test
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
