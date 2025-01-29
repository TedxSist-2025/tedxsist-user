import React from 'react'
import { LoginForm } from '@/components/login-form'

export default function Page() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm md:max-w-3xl -mt-20">
        <h1 className="text-4xl font-bold text-center text-foreground">Register for TEDxSIST 2025</h1>
        <p className="mt-2 text-center text-muted-foreground">
          Join us for an inspiring event of innovation and ideas.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
