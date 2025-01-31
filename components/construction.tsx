"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function Construction() {
  const router = useRouter();

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-16 items-center justify-center text-center">
      <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        503
      </span>
      <h2 className="my-2 font-heading text-2xl font-bold">
        This page is under construction
      </h2>
      <p>
        Sorry, it&apos;s not you, it&apos;s on us. Currently, this page is under construction. 
        We&apos;re working hard to bring you the best experience, 
        but you can still register for the event.
      </p>
      <div className="mt-8 flex justify-center gap-2">
        <Button onClick={() => router.push("/")} variant="ghost" size="lg">
          Go back
        </Button>
        <Button
          onClick={() => router.push("/register")}
          variant="default"
          size="lg"
          
        >
          Register
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
