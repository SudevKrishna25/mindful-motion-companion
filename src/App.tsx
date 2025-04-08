
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Index from "./pages/Index";
import WorkoutsPage from "./pages/WorkoutsPage";
import NutritionPage from "./pages/NutritionPage";
import SleepPage from "./pages/SleepPage";
import MeditationPage from "./pages/MeditationPage";
import AssistantPage from "./pages/AssistantPage";
import AuthPage from "./pages/AuthPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={
              <ProtectedRoute requireAdmin>
                <AdminPage />
              </ProtectedRoute>
            } />
            <Route path="/workouts" element={
              <ProtectedRoute>
                <WorkoutsPage />
              </ProtectedRoute>
            } />
            <Route path="/nutrition" element={
              <ProtectedRoute>
                <NutritionPage />
              </ProtectedRoute>
            } />
            <Route path="/sleep" element={
              <ProtectedRoute>
                <SleepPage />
              </ProtectedRoute>
            } />
            <Route path="/meditation" element={
              <ProtectedRoute>
                <MeditationPage />
              </ProtectedRoute>
            } />
            <Route path="/assistant" element={
              <ProtectedRoute>
                <AssistantPage />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
