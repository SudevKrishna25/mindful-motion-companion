
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import MeditationCard from "@/components/meditation/MeditationCard";
import { Button } from "@/components/ui/button";
import { Play, Plus } from "lucide-react";

const MeditationPage = () => {
  // Mock data
  const meditations = [
    {
      id: 1,
      title: "Morning Mindfulness",
      type: "Focus",
      duration: 10,
      date: "Apr 8, 2025"
    },
    {
      id: 2,
      title: "Stress Relief",
      type: "Stress Relief",
      duration: 15,
      date: "Apr 7, 2025"
    },
    {
      id: 3,
      title: "Bedtime Calm",
      type: "Sleep",
      duration: 20,
      date: "Apr 6, 2025"
    },
    {
      id: 4,
      title: "Body Scan",
      type: "Awareness",
      duration: 12,
      date: "Apr 5, 2025"
    }
  ];

  const totalSessions = meditations.length;
  const totalMinutes = meditations.reduce((sum, session) => sum + session.duration, 0);

  return (
    <>
      <PageContainer>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Meditation</h1>
          <Button>
            <Plus size={18} className="mr-2" />
            Log Session
          </Button>
        </div>

        <div className="gradient-card-purple rounded-xl p-6 mb-6 text-center">
          <h2 className="font-medium mb-4">Start a Session</h2>
          <Button className="bg-white text-purple-600 hover:bg-white/90">
            <Play size={18} className="mr-2" fill="currentColor" />
            Begin Meditation
          </Button>
          <div className="grid grid-cols-2 gap-4 mt-4 text-center">
            <div>
              <div className="text-sm opacity-80">Sessions</div>
              <div className="font-bold text-xl">{totalSessions}</div>
            </div>
            <div>
              <div className="text-sm opacity-80">Total Minutes</div>
              <div className="font-bold text-xl">{totalMinutes}</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            <Button variant="outline" className="rounded-full">All</Button>
            <Button variant="outline" className="rounded-full">Focus</Button>
            <Button variant="outline" className="rounded-full">Sleep</Button>
            <Button variant="outline" className="rounded-full">Stress Relief</Button>
            <Button variant="outline" className="rounded-full">Awareness</Button>
          </div>
        </div>

        <h2 className="font-medium mb-3">Recent Sessions</h2>
        <div>
          {meditations.map((meditation) => (
            <MeditationCard
              key={meditation.id}
              title={meditation.title}
              type={meditation.type}
              duration={meditation.duration}
              date={meditation.date}
            />
          ))}
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default MeditationPage;
