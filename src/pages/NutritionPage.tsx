
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import MealCard from "@/components/nutrition/MealCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const NutritionPage = () => {
  // Mock data
  const meals = [
    {
      id: 1,
      title: "Breakfast",
      calories: 450,
      protein: 25,
      carbs: 50,
      fat: 15,
      time: "8:30 AM"
    },
    {
      id: 2,
      title: "Lunch",
      calories: 620,
      protein: 35,
      carbs: 65,
      fat: 20,
      time: "12:45 PM"
    },
    {
      id: 3,
      title: "Afternoon Snack",
      calories: 180,
      protein: 10,
      carbs: 20,
      fat: 7,
      time: "3:30 PM"
    },
    {
      id: 4,
      title: "Dinner",
      calories: 580,
      protein: 40,
      carbs: 45,
      fat: 22,
      time: "7:15 PM"
    }
  ];

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0);
  const totalCarbs = meals.reduce((sum, meal) => sum + meal.carbs, 0);
  const totalFat = meals.reduce((sum, meal) => sum + meal.fat, 0);

  return (
    <>
      <PageContainer>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Nutrition</h1>
          <Button>
            <Plus size={18} className="mr-2" />
            Add Meal
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-6 shadow-sm">
          <h2 className="font-medium mb-3">Today's Summary</h2>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <div className="text-sm text-gray-500">Calories</div>
              <div className="font-bold text-lg">{totalCalories}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Protein</div>
              <div className="font-bold text-lg">{totalProtein}g</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Carbs</div>
              <div className="font-bold text-lg">{totalCarbs}g</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Fat</div>
              <div className="font-bold text-lg">{totalFat}g</div>
            </div>
          </div>
        </div>

        <h2 className="font-medium mb-3">Today's Meals</h2>
        <div>
          {meals.map((meal) => (
            <MealCard
              key={meal.id}
              title={meal.title}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              time={meal.time}
            />
          ))}
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default NutritionPage;
