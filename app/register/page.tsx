"use client"

import React, { useEffect, useState } from "react";
import { LoginForm } from "@/components/login-form";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/register/registerforms");
      } else {
        setIsCheckingAuth(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (isCheckingAuth) {
    return (
      <main className="bg-background flex min-h-screen flex-col items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-muted-foreground">Checking authentication...</span>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center">
      <section className="w-full max-w-sm md:max-w-4xl space-y-4">
        <h1 className="text-4xl font-bold text-center text-foreground">
          Register for TEDxSIST 2025
        </h1>
        <p className="text-center text-muted-foreground">
          Join us for an inspiring event of innovation and ideas.
        </p>
        <div>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}