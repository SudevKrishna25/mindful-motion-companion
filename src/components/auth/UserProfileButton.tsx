
import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User, UserCog } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";

const UserProfileButton = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div 
        className="cursor-pointer flex flex-col items-center justify-center" 
        onClick={() => navigate("/auth")}
      >
        <User size={24} />
        <span className="text-xs mt-1">Login</span>
      </div>
    );
  }

  // Get first letter of email or username for avatar
  const firstLetter = user.email ? user.email[0].toUpperCase() : "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-col items-center justify-center">
        <Avatar className="h-6 w-6">
          <AvatarImage src={""} alt={user.email || "User"} />
          <AvatarFallback>{firstLetter}</AvatarFallback>
        </Avatar>
        <span className="text-xs mt-1">Profile</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {user.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isAdmin && (
          <DropdownMenuItem onClick={() => navigate("/admin")}>
            <UserCog className="mr-2 h-4 w-4" />
            <span>Admin Dashboard</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileButton;
