
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock } from "lucide-react";

interface MeditationCardProps {
  title: string;
  type: string;
  duration: number;
  date: string;
}

const MeditationCard = ({ title, type, duration, date }: MeditationCardProps) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="flex items-center mt-1 text-gray-500">
              <Brain size={16} className="mr-1" />
              <span className="text-sm">{type}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center text-gray-500">
              <Clock size={16} className="mr-1" />
              <span className="text-sm">{duration} min</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">{date}</div>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              {type === "Focus" 
                ? "Improved concentration and clarity"
                : type === "Sleep" 
                  ? "Better sleep quality and relaxation"
                  : type === "Stress Relief" 
                    ? "Reduced anxiety and stress"
                    : "Enhanced mindfulness and awareness"
              }
            </div>
            <button className="text-primary text-sm">Details</button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MeditationCard;
