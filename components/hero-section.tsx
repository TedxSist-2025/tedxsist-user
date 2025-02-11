"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight-new";
export function HeroScrollDemo() {
  return (
    
    <div className="flex flex-col overflow-hidden">
        <Spotlight />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground dark:text-foreground">
              lorem ipsum  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                TEDxSIST 2025
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
  );
}
