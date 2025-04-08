
import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import ActivitySummary from "@/components/dashboard/ActivitySummary";
import StatCard from "@/components/dashboard/StatCard";
import { Dumbbell, Utensils, Moon, Brain } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  // Mock data
  const userData = {
    name: "Sudev Krishna",
    weeklyActivity: {
      workouts: 3,
      meals: 15,
      sleep: 5,
      meditation: 2,
      streakDays: 7
    },
    todayStats: {
      calories: 1450,
      steps: 6800,
      water: 1.5, // liters
      activeMinutes: 45
    }
  };

  return (
    <>
      <PageContainer>
        <WelcomeCard userName={userData.name} />
        
        <h2 className="text-xl font-bold mb-4">Today's Progress</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatCard 
            title="Calories" 
            value={`${userData.todayStats.calories} kcal`}
            icon={<Utensils size={20} />}
            onClick={() => navigate("/nutrition")}
          />
          <StatCard 
            title="Steps" 
            value={userData.todayStats.steps}
            icon={<Dumbbell size={20} />}
            onClick={() => navigate("/workouts")}
          />
          <StatCard 
            title="Water" 
            value={`${userData.todayStats.water}L`}
            icon={<Utensils size={20} />}
            onClick={() => navigate("/nutrition")}
          />
          <StatCard 
            title="Active Minutes" 
            value={userData.todayStats.activeMinutes}
            icon={<Dumbbell size={20} />}
            onClick={() => navigate("/workouts")}
          />
        </div>
        
        <ActivitySummary
          workouts={userData.weeklyActivity.workouts}
          meals={userData.weeklyActivity.meals}
          sleep={userData.weeklyActivity.sleep}
          meditation={userData.weeklyActivity.meditation}
          streakDays={userData.weeklyActivity.streakDays}
        />
        
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div 
            className="gradient-card p-4 rounded-xl cursor-pointer flex items-center"
            onClick={() => navigate("/workouts")}
          >
            <Dumbbell size={24} className="mr-3" />
            <div>
              <h3 className="font-semibold">Log Workout</h3>
              <p className="text-sm opacity-90">Track your activity</p>
            </div>
          </div>
          
          <div 
            className="gradient-card p-4 rounded-xl cursor-pointer flex items-center"
            onClick={() => navigate("/nutrition")}
          >
            <Utensils size={24} className="mr-3" />
            <div>
              <h3 className="font-semibold">Log Meal</h3>
              <p className="text-sm opacity-90">Track your nutrition</p>
            </div>
          </div>
          
          <div 
            className="gradient-card-purple p-4 rounded-xl cursor-pointer flex items-center"
            onClick={() => navigate("/sleep")}
          >
            <Moon size={24} className="mr-3" />
            <div>
              <h3 className="font-semibold">Track Sleep</h3>
              <p className="text-sm opacity-90">Record your rest</p>
            </div>
          </div>
          
          <div 
            className="gradient-card-purple p-4 rounded-xl cursor-pointer flex items-center"
            onClick={() => navigate("/meditation")}
          >
            <Brain size={24} className="mr-3" />
            <div>
              <h3 className="font-semibold">Meditate</h3>
              <p className="text-sm opacity-90">Start a session</p>
            </div>
          </div>
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Index;
