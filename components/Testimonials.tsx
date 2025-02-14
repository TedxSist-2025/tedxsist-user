"use client";

import React, { useRef } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion, useInView } from "framer-motion";

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
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Combine all testimonials for mobile view
  const allTestimonials = [...leftTestimonials, ...centerTestimonials, ...rightTestimonials];

  return (
    <div ref={containerRef} className="py-20 flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-4">
        <motion.h1
         whileInView="visible"
          className="text-4xl font-bold text-foreground"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          viewport={{ once: false, amount: 0.5 }}
        >
          What Our <span className="text-primary">Speakers</span> Say
        </motion.h1>
        <motion.p
        
          className="text-xl text-muted-foreground text-bold" 
          variants={subtitleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Voices from <span className="text-primary">TEDx</span><span className="text-bold">SIST</span>
        </motion.p>
      </div>

      {/* Mobile view */}
      <motion.div
        className="relative flex md:hidden w-full overflow-hidden"
        variants={cardContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="relative w-full perspective-1000"
          variants={cardVariants}
        >
          <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-background to-transparent" />
          <InfiniteMovingCards
            items={allTestimonials}
            direction="top"
            speed="slow"
            className="w-full"
          />
        </motion.div>
      </motion.div>

      {/* Desktop view */}
      <motion.div
        className="relative hidden md:flex gap-x-0 overflow-hidden"
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
  {
    quote: "TEDxSIST completely reshaped how I view innovation and collaboration. The insights shared were truly thought-provoking, sparking new ideas and directions in my research.",
    photo: "/th.jpg",
    name: "Dr. Sarah Chen",
    title: "AI Research Scientist",
  },
  {
    quote: "The fusion of technology, creativity, and impactful storytelling at TEDxSIST was remarkable. It was an experience that challenged my thinking and broadened my horizons.",
    photo: "/th.jpg",
    name: "James Rodriguez",
    title: "Innovation Director",
  },
  {
    quote: "Attending TEDxSIST marked a pivotal moment in my career. The event’s speakers and discussions gave me the motivation to pursue sustainability initiatives more passionately.",
    photo: "/th.jpg",
    name: "Priya Patel",
    title: "Environmental Engineer",
  },
  {
    quote: "TEDxSIST was a powerhouse of inspiration. Every session was an opportunity to learn, connect, and grow in ways I never imagined before.",
    photo: "/th.jpg",
    name: "Olivia Tan",
    title: "Robotics Specialist",
  },
  {
    quote: "The level of innovation and intellectual engagement at TEDxSIST was phenomenal. It was more than just an event—it was an experience that left a lasting impact on me.",
    photo: "/th.jpg",
    name: "Rahul Desai",
    title: "Data Scientist",
  },
];

const centerTestimonials = [
  {
    quote: "TEDxSIST is more than a conference; it's a melting pot of groundbreaking ideas. The discussions here push the boundaries of innovation and thought leadership.",
    photo: "/th.jpg",
    name: "Michael Chang",
    title: "Tech Entrepreneur",
  },
  {
    quote: "Few events manage to bring together such a diverse and insightful group of minds. TEDxSIST did exactly that, creating an atmosphere of shared learning and collaboration.",
    photo: "/th.jpg",
    name: "Emma Thompson",
    title: "Social Impact Consultant",
  },
  {
    quote: "Every moment at TEDxSIST was an eye-opener, filled with stories of resilience, breakthrough technologies, and strategies that redefine industries.",
    photo: "/th.jpg",
    name: "Raj Malhotra",
    title: "Digital Strategist",
  },
  {
    quote: "TEDxSIST is where creativity meets impact. The discussions challenged conventional perspectives and encouraged solutions that have the power to create real change.",
    photo: "/th.jpg",
    name: "Sophia Kim",
    title: "Human-Centered AI Expert",
  },
  {
    quote: "I left TEDxSIST feeling energized and equipped with fresh ideas. The speakers, discussions, and interactions were a perfect blend of inspiration and practical insights.",
    photo: "/th.jpg",
    name: "Arjun Mehta",
    title: "Startup Founder",
  },
];

const rightTestimonials = [
  {
    quote: "TEDxSIST brilliantly highlights how community-driven innovation fuels progress. It’s a space where visionary thinkers and changemakers come together to share and grow.",
    photo: "/th.jpg",
    name: "Lisa Wong",
    title: "Innovation Lead",
  },
  {
    quote: "The event’s focus on emerging technologies and societal impact was incredibly enlightening. It provided a platform to explore how technology shapes our future.",
    photo: "/th.jpg",
    name: "David Miller",
    title: "Tech Policy Advisor",
  },
  {
    quote: "TEDxSIST fosters a culture of curiosity and fearless innovation. The conversations and ideas shared here are sure to influence industries for years to come.",
    photo: "/th.jpg",
    name: "Aisha Rahman",
    title: "Research Director",
  },
  {
    quote: "I was captivated by the quality of insights and expertise at TEDxSIST. The event didn’t just showcase ideas—it ignited meaningful action and change.",
    photo: "/th.jpg",
    name: "Ethan Parker",
    title: "Sustainability Consultant",
  },
  {
    quote: "TEDxSIST is where groundbreaking ideas take center stage. The event provided a unique opportunity to engage with brilliant minds from diverse fields.",
    photo: "/th.jpg",
    name: "Natasha Verma",
    title: "Neuroscience Researcher",
  },
];
