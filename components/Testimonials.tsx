"use client";

import React, { useRef } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion, useInView } from "framer-motion";

const testimonialHeader = {
  heading: "What Our Speakers Say",
  subheading: "Voices from TEDxSIST",
};

export function InfiniteMovingCardsDemo() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    margin: "-100px",
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.1 },
    },
  };

  const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

  return (
    <div ref={containerRef} className="py-20 flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-4">
        <motion.h2
          className="text-4xl font-bold text-foreground"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonialHeader.heading}
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground"
          variants={subtitleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonialHeader.subheading}
        </motion.p>
      </div>

      <motion.div
        className="relative flex gap-6 overflow-hidden"
        variants={cardContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[leftTestimonials, centerTestimonials, rightTestimonials].map((items, index) => (
          <motion.div
            key={index}
            className="relative w-1/3 perspective-1000"
            variants={cardVariants}
          >
            <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-background to-transparent" />
            <InfiniteMovingCards
              items={items}
              direction={index === 2 ? "bottom" : "top"}
              speed="slow"
              rowPosition={index === 0 ? "left" : index === 1 ? "center" : "right"}
              className="w-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const leftTestimonials = [
  { quote: "TEDxSIST transformed my perspective on innovation.", photo: "/th.jpg", name: "Dr. Sarah Chen", title: "AI Research Scientist" },
  { quote: "The event's blend of technology and creativity was inspiring.", photo: "/th.jpg", name: "James Rodriguez", title: "Innovation Director" },
  { quote: "Being part of TEDxSIST was a turning point in my career.", photo: "/th.jpg", name: "Priya Patel", title: "Environmental Engineer" },
];

const centerTestimonials = [
  { quote: "TEDxSIST fosters meaningful dialogue and innovative ideas.", photo: "/th.jpg", name: "Michael Chang", title: "Tech Entrepreneur" },
  { quote: "The event brings together diverse voices.", photo: "/th.jpg", name: "Emma Thompson", title: "Social Impact Consultant" },
  { quote: "Every moment was filled with learning and inspiration.", photo: "/th.jpg", name: "Raj Malhotra", title: "Digital Strategist" },
];

const rightTestimonials = [
  { quote: "TEDxSIST exemplifies the power of community in innovation.", photo: "/th.jpg", name: "Lisa Wong", title: "Innovation Lead" },
  { quote: "The event's focus on emerging technologies was eye-opening.", photo: "/th.jpg", name: "David Miller", title: "Tech Policy Advisor" },
  { quote: "TEDxSIST creates an atmosphere for exchanging refined ideas.", photo: "/th.jpg", name: "Aisha Rahman", title: "Research Director" },
];
