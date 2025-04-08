
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
    <div className="fixed bottom-0 left-0 right-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg z-10 border-t border-white/20 dark:border-gray-700/30">
      <div className="flex justify-around items-center p-2 max-w-5xl mx-auto">
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "nav-item",
              location.pathname === item.path ? "active" : "text-gray-500 dark:text-gray-400",
              "hover-scale"
            )}
            style={{ animationDelay: `${index * 0.05}s` }}
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
