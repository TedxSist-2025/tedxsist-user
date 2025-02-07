"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context"; // Assuming you're using an auth context

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuth(); // Assuming you have a loading state in your auth context
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isLoading) return; // Wait until authentication state is loaded

    if (!user) {
      // If the user is not authenticated, redirect
      router.push("/register");
    } else {
      setIsAuthenticated(true);
    }
  }, [user, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return<main className="bg-background flex min-h-screen flex-col items-center justify-center">
        <div className="space-y-4 text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </main>;
  }

  return <>{children}</>;
}
