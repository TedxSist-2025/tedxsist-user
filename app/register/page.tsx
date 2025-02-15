"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { LoginForm } from "@/components/login-form";

export default function RegisterPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth(); 
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (!authLoading) {
      if (user) {
        router.push("/register/registerforms");
      } else {
        setIsCheckingAuth(false);
      }
    }
  }, [user, authLoading, router]);

  // Show loading state while checking authentication status
  if (authLoading || isCheckingAuth) {
    return (
      <main className="bg-background flex min-h-screen flex-col items-center justify-center">
        <div className="space-y-4 text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Checking authentication...</p>
        </div>
      </main>
    );
  }

  // Show login form if user is not authenticated
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
      <section className="w-full max-w-sm md:max-w-4xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Register for <span className="text-primary">TEDx</span>SIST 2025
          </h1>
          <p className="text-center text-muted-foreground">
            Join us for an inspiring event of innovation and ideas.
          </p>
        </div>
        
        <div>
          <LoginForm />
        </div>
        
      </section>
    </main>
  );
}
