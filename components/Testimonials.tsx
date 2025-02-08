"use client";

import React, { useState, useEffect } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonialHeader = {
  heading: "What Our Speakers Say",
  subheading: "Voices from TEDx SIST",
};

export function InfiniteMovingCardsDemo() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  // Track scroll direction and position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < scrollY) {
        setScrollDirection("up");
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: (scrollY: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: Math.min(scrollY / 1000, 1), delay: 0.2 },
    }),
  };

  return (
    <div className="py-20 flex flex-col items-center justify-center gap-8">
      <motion.div className="text-center space-y-4">
        <motion.h2
          className="text-4xl font-bold text-foreground"
          variants={variants}
          initial="initial"
          animate={scrollDirection === "down" ? "inView" : "initial"}
          custom={scrollY}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {testimonialHeader.heading}
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground"
          variants={variants}
          initial="initial"
          animate={scrollDirection === "down" ? "inView" : "initial"}
          custom={scrollY}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {testimonialHeader.subheading}
        </motion.p>
      </motion.div>

      <motion.div
        className="rounded-md flex flex-col antialiased bg-background dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden [mask-image:linear-gradient(to_left,transparent,white_10%,white_90%,transparent)]"
        variants={variants}
        initial="initial"
        animate={scrollDirection === "down" ? "inView" : "initial"}
        custom={scrollY}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex gap-4">
          <div className="relative w-1/3">
            <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-background to-transparent" />
            <InfiniteMovingCards
              items={leftTestimonials}
              direction="top"
              speed="slow"
              rowPosition="left"
              className="w-full"
            />
          </div>
          <div className="relative w-1/3">
            <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-background to-transparent" />
            <InfiniteMovingCards
              items={centerTestimonials}
              direction="top"
              speed="slow"
              rowPosition="center"
              className="w-full"
            />
          </div>
          <div className="relative w-1/3">
            <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-background to-transparent" />
            <InfiniteMovingCards
              items={rightTestimonials}
              direction="bottom"
              speed="slow"
              rowPosition="right"
              className="w-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const leftTestimonials = [
  {
    quote: "TEDxSIST transformed my perspective on innovation. The diverse range of speakers and thought-provoking discussions created an atmosphere of intellectual curiosity that continues to inspire my work in technology and education.",
    photo: "/th.jpg",
    name: "Dr. Sarah Chen",
    title: "AI Research Scientist"
  },
  {
    quote: "The event's unique blend of technology and creativity opened my eyes to new possibilities. The collaborative environment and engaging discussions made it an unforgettable experience.",
    photo: "/th.jpg",
    name: "James Rodriguez",
    title: "Innovation Director"
  },
  {
    quote: "Being part of TEDxSIST was a turning point in my career. The insights shared and connections made have profoundly influenced my approach to sustainable development.",
    photo: "/th.jpg",
    name: "Priya Patel",
    title: "Environmental Engineer"
  }
];

const centerTestimonials = [
  {
    quote: "The interdisciplinary nature of TEDxSIST creates a perfect environment for breakthrough ideas. I was amazed by how different perspectives could converge to form innovative solutions for complex global challenges.",
    photo: "/th.jpg",
    name: "Michael Chang",
    title: "Tech Entrepreneur"
  },
  {
    quote: "What sets TEDxSIST apart is its commitment to fostering meaningful dialogue. The event brings together diverse voices and creates a platform where ideas can truly flourish.",
    photo: "/th.jpg",
    name: "Emma Thompson",
    title: "Social Impact Consultant"
  },
  {
    quote: "The energy at TEDxSIST was electric. From groundbreaking research presentations to inspiring success stories, every moment was filled with learning and inspiration.",
    photo: "/th.jpg",
    name: "Raj Malhotra",
    title: "Digital Strategist"
  }
];

const rightTestimonials = [
  {
    quote: "TEDxSIST exemplifies the power of community in driving innovation. The collaborative spirit and intellectual discourse create an environment where transformative ideas can take root and flourish.",
    photo: "/th.jpg",  
    name: "Lisa Wong",
    title: "Innovation Lead"
  },
  {
    quote: "The event's focus on emerging technologies and their societal impact was eye-opening. It provided a unique platform to explore how innovation can address real-world challenges.",
    photo: "/th.jpg",
    name: "David Miller",
    title: "Tech Policy Advisor"
  },
  {
    quote: "As a speaker, I was impressed by the depth of engagement from the audience. TEDxSIST creates an atmosphere where ideas can be freely exchanged and refined.",
    photo: "/th.jpg",
    name: "Aisha Rahman",
    title: "Research Director"
  }
];
