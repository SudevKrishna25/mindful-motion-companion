
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import ChatInterface from "@/components/assistant/ChatInterface";
import { Brain } from "lucide-react";

const AssistantPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <PageContainer className="pb-0">
        <div className="flex items-center mb-6 animate-slide-up">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center mr-4 shadow-lg animate-pulse-slow">
            <Brain size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Wellness Assistant</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Your personal health companion</p>
          </div>
        </div>
        
        <ChatInterface />
      </PageContainer>
      <BottomNavigation />
    </div>
  );
};

export default AssistantPage;
