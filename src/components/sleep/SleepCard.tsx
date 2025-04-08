
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Star } from "lucide-react";

interface SleepCardProps {
  date: string;
  hours: number;
  quality: number; // 1-5 scale
}

const SleepCard = ({ date, hours, quality }: SleepCardProps) => {
  // Render quality stars
  const renderQualityStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i < quality ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{date}</h3>
            <div className="flex items-center mt-1 text-gray-500">
              <Moon size={16} className="mr-1" />
              <span className="text-sm">{hours} hours</span>
            </div>
          </div>
          <div className="flex">{renderQualityStars()}</div>
        </div>
        
        <div className="mt-3 pt-3 border-t">
          <div className="text-sm text-gray-500">
            {quality >= 4 
              ? "Great sleep! You met your sleep goal."
              : quality >= 3 
                ? "Average sleep. Try to improve your sleep routine."
                : "Poor sleep. Consider adjusting your bedtime routine."
            }
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SleepCard;
