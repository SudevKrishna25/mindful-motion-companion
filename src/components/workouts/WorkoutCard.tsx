
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Clock, CalendarDays, Flame } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  type: string;
  duration: number;
  date: string;
  calories: number;
}

const WorkoutCard = ({ title, type, duration, date, calories }: WorkoutCardProps) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="flex items-center mt-1 text-gray-500">
              <Dumbbell size={16} className="mr-1" />
              <span className="text-sm">{type}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center text-gray-500">
              <Clock size={16} className="mr-1" />
              <span className="text-sm">{duration} min</span>
            </div>
            <div className="flex items-center mt-1 text-gray-500">
              <CalendarDays size={16} className="mr-1" />
              <span className="text-sm">{date}</span>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t flex justify-between items-center">
          <div className="flex items-center text-orange-500">
            <Flame size={18} className="mr-1" />
            <span className="font-medium">{calories} kcal</span>
          </div>
          <button className="text-primary text-sm">Details</button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
