
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Plus, User, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi there! I'm your wellness assistant. How can I help you today with your fitness and wellness journey?",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simulate AI response
    setTimeout(() => {
      let responseText = "";
      
      if (newMessage.toLowerCase().includes("workout")) {
        responseText = "Great! I can help you with your workout. What type of workout are you looking for today? Cardio, strength training, or something else?";
      } else if (newMessage.toLowerCase().includes("meal") || newMessage.toLowerCase().includes("food") || newMessage.toLowerCase().includes("eat")) {
        responseText = "I'd be happy to help with your meal planning or tracking! What did you eat today, or would you like some healthy meal suggestions?";
      } else if (newMessage.toLowerCase().includes("sleep")) {
        responseText = "Sleep is crucial for recovery and overall wellness. How has your sleep been lately? Would you like some tips for better sleep?";
      } else if (newMessage.toLowerCase().includes("meditation") || newMessage.toLowerCase().includes("stress")) {
        responseText = "Meditation can really help with stress management. Would you like me to suggest a quick meditation exercise you can do right now?";
      } else {
        responseText = "I'm here to support your wellness journey! You can ask me about workouts, nutrition, sleep, meditation, or just chat about how you're feeling today.";
      }
      
      const aiMessage = {
        id: messages.length + 2,
        sender: "ai",
        text: responseText,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-15rem)] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-white/80 to-white dark:from-gray-900/80 dark:to-gray-800 backdrop-blur-sm border border-white/20 dark:border-gray-700/30">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={cn(
              "flex animate-fade-in",
              message.sender === "user" ? "justify-end" : "justify-start"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2 shadow-sm transition-all duration-300 hover:shadow-md",
                message.sender === "user"
                  ? "bg-primary text-white rounded-tr-none"
                  : "bg-gray-100 dark:bg-gray-800 rounded-tl-none"
              )}
            >
              {message.sender === "ai" && (
                <div className="flex items-center mb-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center mr-2 animate-pulse-slow">
                    <Brain size={14} className="text-white" />
                  </div>
                  <span className="font-medium text-sm">Wellness Assistant</span>
                </div>
              )}
              <p className="text-sm">{message.text}</p>
              <div
                className={cn(
                  "text-xs mt-1",
                  message.sender === "user"
                    ? "text-white/70"
                    : "text-gray-500"
                )}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 hover:bg-primary/10 transition-colors"
            aria-label="Add attachment"
          >
            <Plus size={18} />
          </Button>
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <Button
            type="submit"
            size="icon"
            className="shrink-0 bg-primary hover:bg-primary/90 transition-all"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Send size={18} />
          </Button>
        </div>
        <div className="flex mt-2 space-x-2 overflow-x-auto pb-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="shrink-0 text-xs bg-white/50 dark:bg-gray-800/50 hover:bg-primary/10 hover:text-primary transition-all"
          >
            Log a workout
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="shrink-0 text-xs bg-white/50 dark:bg-gray-800/50 hover:bg-primary/10 hover:text-primary transition-all"
          >
            Track a meal
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="shrink-0 text-xs bg-white/50 dark:bg-gray-800/50 hover:bg-primary/10 hover:text-primary transition-all"
          >
            Record sleep
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="shrink-0 text-xs bg-white/50 dark:bg-gray-800/50 hover:bg-primary/10 hover:text-primary transition-all"
          >
            Start meditation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
