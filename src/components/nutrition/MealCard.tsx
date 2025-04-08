
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MealCardProps {
  title: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  time: string;
}

const MealCard = ({ title, calories, protein, carbs, fat, time }: MealCardProps) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="text-sm text-gray-500">{time}</div>
          </div>
          <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
            {calories} kcal
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="text-xs text-gray-500">Protein</div>
            <div className="font-medium text-sm">{protein}g</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Carbs</div>
            <div className="font-medium text-sm">{carbs}g</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Fat</div>
            <div className="font-medium text-sm">{fat}g</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MealCard;
