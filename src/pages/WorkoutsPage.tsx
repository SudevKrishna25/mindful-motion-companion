
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import WorkoutCard from "@/components/workouts/WorkoutCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const WorkoutsPage = () => {
  // Mock data
  const workouts = [
    {
      id: 1,
      title: "Morning Run",
      type: "Cardio",
      duration: 30,
      date: "Apr 8, 2025",
      calories: 300
    },
    {
      id: 2,
      title: "Upper Body Strength",
      type: "Strength",
      duration: 45,
      date: "Apr 7, 2025",
      calories: 250
    },
    {
      id: 3,
      title: "Yoga Flow",
      type: "Flexibility",
      duration: 60,
      date: "Apr 6, 2025",
      calories: 180
    },
    {
      id: 4,
      title: "HIIT Session",
      type: "Cardio",
      duration: 25,
      date: "Apr 5, 2025",
      calories: 320
    }
  ];

  return (
    <>
      <PageContainer>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Workouts</h1>
          <Button>
            <Plus size={18} className="mr-2" />
            Add Workout
          </Button>
        </div>

        <div className="mb-6">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            <Button variant="outline" className="rounded-full">All</Button>
            <Button variant="outline" className="rounded-full">Cardio</Button>
            <Button variant="outline" className="rounded-full">Strength</Button>
            <Button variant="outline" className="rounded-full">Flexibility</Button>
            <Button variant="outline" className="rounded-full">HIIT</Button>
          </div>
        </div>

        <div>
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              title={workout.title}
              type={workout.type}
              duration={workout.duration}
              date={workout.date}
              calories={workout.calories}
            />
          ))}
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default WorkoutsPage;
