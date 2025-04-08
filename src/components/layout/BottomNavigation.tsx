
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Dumbbell, Utensils, Moon, Brain, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/", icon: <Home size={24} /> },
    { name: "Workouts", path: "/workouts", icon: <Dumbbell size={24} /> },
    { name: "Nutrition", path: "/nutrition", icon: <Utensils size={24} /> },
    { name: "Sleep", path: "/sleep", icon: <Moon size={24} /> },
    { name: "Meditation", path: "/meditation", icon: <Brain size={24} /> },
    { name: "Assistant", path: "/assistant", icon: <MessageSquare size={24} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-10">
      <div className="flex justify-around items-center p-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "nav-item",
              location.pathname === item.path ? "active" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
