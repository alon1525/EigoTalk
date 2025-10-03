import { Lock, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LevelCardProps {
  level: number;
  title: string;
  description: string;
  lessonsCount: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  progress: number;
}

const LevelCard = ({
  level,
  title,
  description,
  lessonsCount,
  isUnlocked,
  isCompleted,
  progress,
}: LevelCardProps) => {
  return (
    <Card className="relative overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 border-border bg-card">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge
              variant="secondary"
              className="mb-2 bg-primary/10 text-primary border-primary/20"
            >
              Level {level}
            </Badge>
            <h3 className="text-xl font-semibold text-card-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          {isCompleted && (
            <CheckCircle2 className="h-6 w-6 text-secondary" />
          )}
          {!isUnlocked && <Lock className="h-6 w-6 text-muted-foreground" />}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{lessonsCount} lessons</span>
            <span className="text-primary font-medium">{progress}%</span>
          </div>

          {isUnlocked && (
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          <Button
            className="w-full mt-4"
            variant={isUnlocked ? "default" : "secondary"}
            disabled={!isUnlocked}
          >
            {isUnlocked ? (isCompleted ? "Review" : "Continue") : "Locked"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LevelCard;
