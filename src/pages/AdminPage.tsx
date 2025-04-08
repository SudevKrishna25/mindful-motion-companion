
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

type Profile = {
  id: string;
  username: string;
  full_name: string | null;
  avatar_url: string | null;
  is_admin: boolean;
  created_at: string;
};

const AdminPage = () => {
  const navigate = useNavigate();
  const { isAdmin, user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else if (!isAdmin) {
      navigate("/");
    }
  }, [user, isAdmin, navigate]);

  const { data: profiles, isLoading: profilesLoading } = useQuery({
    queryKey: ["profiles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data as Profile[];
    },
    enabled: !!user && isAdmin,
  });

  if (!user || !isAdmin) {
    return null; // Will redirect via useEffect
  }

  return (
    <>
      <PageContainer>
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Database Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-card">
              <h3 className="font-medium">Total Users</h3>
              <p className="text-2xl font-bold">{profiles?.length || 0}</p>
            </div>
            <div className="stat-card">
              <h3 className="font-medium">Admin Users</h3>
              <p className="text-2xl font-bold">
                {profiles?.filter(p => p.is_admin).length || 0}
              </p>
            </div>
            <div className="stat-card">
              <h3 className="font-medium">Regular Users</h3>
              <p className="text-2xl font-bold">
                {profiles?.filter(p => !p.is_admin).length || 0}
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">User Profiles</h2>
        {profilesLoading ? (
          <p>Loading users...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-2 text-left">Username</th>
                  <th className="p-2 text-left">Full Name</th>
                  <th className="p-2 text-left">Admin</th>
                  <th className="p-2 text-left">Created</th>
                </tr>
              </thead>
              <tbody>
                {profiles?.map((profile) => (
                  <tr key={profile.id} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="p-2">{profile.username}</td>
                    <td className="p-2">{profile.full_name || "N/A"}</td>
                    <td className="p-2">{profile.is_admin ? "Yes" : "No"}</td>
                    <td className="p-2">{new Date(profile.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
                {profiles?.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-2 text-center">No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Manage Database Tables</h2>
          <p className="mb-4">
            You can manage your database tables directly in the Supabase Dashboard.
          </p>
          <Button 
            onClick={() => window.open("https://supabase.com/dashboard/project/tsvyzgectipezfozetnv/editor", "_blank")}
            className="mr-2"
          >
            Open Database Editor
          </Button>
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default AdminPage;
