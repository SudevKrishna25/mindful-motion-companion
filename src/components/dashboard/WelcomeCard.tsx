
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WelcomeCardProps {
  userName: string;
  className?: string;
}

const WelcomeCard = ({ userName, className }: WelcomeCardProps) => {
  // Get current time to display appropriate greeting
  const currentHour = new Date().getHours();
  let greeting = "Good evening";
  
  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  }

  return (
    <Card className={cn("gradient-card p-6 mb-6", className)}>
      <h1 className="text-2xl font-bold">{greeting}, {userName}!</h1>
      <p className="mt-2 opacity-90">Ready to continue your wellness journey?</p>
      <div className="flex mt-4 space-x-2">
        <div className="bg-white/20 rounded-full px-3 py-1 text-sm">Today's Focus: Balance</div>
        <div className="bg-white/20 rounded-full px-3 py-1 text-sm">75% Progress</div>
      </div>
    </Card>
  );
};

export default WelcomeCard;
