
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ActivitySummaryProps {
  workouts: number;
  meals: number;
  sleep: number;
  meditation: number;
  streakDays: number;
}

const ActivitySummary = ({
  workouts,
  meals,
  sleep,
  meditation,
  streakDays,
}: ActivitySummaryProps) => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Workouts</span>
              <span className="text-sm font-medium">{workouts}/7</span>
            </div>
            <Progress value={(workouts / 7) * 100} className="h-2 bg-gray-200" />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Meals Logged</span>
              <span className="text-sm font-medium">{meals}/21</span>
            </div>
            <Progress value={(meals / 21) * 100} className="h-2 bg-gray-200" />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Sleep Tracked</span>
              <span className="text-sm font-medium">{sleep}/7</span>
            </div>
            <Progress value={(sleep / 7) * 100} className="h-2 bg-gray-200" />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Meditation</span>
              <span className="text-sm font-medium">{meditation}/7</span>
            </div>
            <Progress value={(meditation / 7) * 100} className="h-2 bg-gray-200" />
          </div>
          
          <div className="pt-2 border-t">
            <div className="flex justify-between items-center">
              <span className="font-medium">Current Streak</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                {streakDays} Days 🔥
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivitySummary;
