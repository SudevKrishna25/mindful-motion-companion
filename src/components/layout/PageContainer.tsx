
import React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={cn(
      "w-full max-w-5xl mx-auto px-4 pb-20 pt-4 animate-fade-in", 
      className
    )}>
      <div className="glass-card p-6 animate-slide-up">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
