"use client";
import { InfiniteMovingCardsDemo } from "@/components/Testimonials";
import { FAQ2 } from "@/components/FAQ";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import HeroScrollDemo from "@/components/hero-section";
import AdaptiveCursor from "@/components/AdaptiveCursor";
import { useState, useEffect } from "react";
export default function HomePage() {
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseEnter = () => setCursorVariant("hover")
    const handleMouseLeave = () => setCursorVariant("default")

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])
  return (
    <main>
    
      <AdaptiveCursor variant={cursorVariant} />
 
      <div>
        
        <HeroScrollDemo />
      </div>
      <div>
         <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground dark:text-foreground">
              Glimpses <span className="text-primary">Of</span> <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                <span className="text-primary">TEDx</span>SIST
              </span>
            </h1>
          </>
        }
      >
        
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
       
      </div>
      <div>
        <InfiniteMovingCardsDemo />
      </div>
      <div>
        <FAQ2 />
      </div>
      
    </main>
  )
}

