
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import SleepCard from "@/components/sleep/SleepCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const SleepPage = () => {
  // Mock data
  const sleepData = [
    {
      id: 1,
      date: "Apr 7, 2025",
      hours: 7.5,
      quality: 4
    },
    {
      id: 2,
      date: "Apr 6, 2025",
      hours: 6.2,
      quality: 3
    },
    {
      id: 3,
      date: "Apr 5, 2025",
      hours: 8.1,
      quality: 5
    },
    {
      id: 4,
      date: "Apr 4, 2025",
      hours: 5.8,
      quality: 2
    }
  ];

  // Calculate average sleep hours and quality
  const avgHours = sleepData.reduce((sum, item) => sum + item.hours, 0) / sleepData.length;
  const avgQuality = sleepData.reduce((sum, item) => sum + item.quality, 0) / sleepData.length;

  return (
    <>
      <PageContainer>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Sleep Tracker</h1>
          <Button>
            <Plus size={18} className="mr-2" />
            Log Sleep
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-6 shadow-sm">
          <h2 className="font-medium mb-3">Sleep Summary</h2>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-500">Avg. Sleep Time</div>
              <div className="font-bold text-2xl">{avgHours.toFixed(1)} hrs</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Avg. Quality</div>
              <div className="font-bold text-2xl">{avgQuality.toFixed(1)}/5</div>
            </div>
          </div>
        </div>

        <h2 className="font-medium mb-3">Recent Sleep History</h2>
        <div>
          {sleepData.map((sleep) => (
            <SleepCard
              key={sleep.id}
              date={sleep.date}
              hours={sleep.hours}
              quality={sleep.quality}
            />
          ))}
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default SleepPage;
