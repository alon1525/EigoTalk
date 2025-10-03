import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <MessageCircle className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            EigoTalk
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/levels"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/levels") ? "text-primary" : "text-foreground"
            }`}
          >
            Levels
          </Link>
          <Link
            to="/flashcards"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/flashcards") ? "text-primary" : "text-foreground"
            }`}
          >
            Flashcards
          </Link>
          <Link
            to="/progress"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/progress") ? "text-primary" : "text-foreground"
            }`}
          >
            Progress
          </Link>
        </nav>

        <Button size="sm" className="gradient-accent hover:opacity-90 transition-opacity">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
