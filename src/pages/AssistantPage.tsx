
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import ChatInterface from "@/components/assistant/ChatInterface";
import { Brain } from "lucide-react";

const AssistantPage = () => {
  return (
    <>
      <PageContainer className="pb-0">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-card flex items-center justify-center mr-3">
            <Brain size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Wellness Assistant</h1>
            <p className="text-sm text-gray-500">Your personal health companion</p>
          </div>
        </div>
        
        <ChatInterface />
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default AssistantPage;
