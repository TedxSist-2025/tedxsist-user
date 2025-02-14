import { AuthProvider } from "@/context/auth-context";
import { Toaster } from "@/components/ui/toaster"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <>
        <main className="pt-24">
            <AuthProvider>
      {children}
    </AuthProvider>
    </main>
        <Toaster />
      </>
    
    
  );
}
