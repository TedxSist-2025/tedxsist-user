"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const teams = [
  "Chairpersons",
  "Curation Team",
  "Finance Team",
  "Operations Team",
  "Production Team",
  "Tech Team",
];

const testimonialsByTeam = {
  "Chairpersons": [
    {
      id: 1,
      quote:
        "The latest features and improvements have made this platform indispensable for our team's daily operations.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/sample.png",
    },
    {
      id: 2,
      quote:
        "The 2024 updates have transformed how we handle complex workflows. Incredibly impressed.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/sample.png",
    },
    {
      id: 3,
      quote:
        "This year's innovations have set a new standard for what we expect from enterprise software.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/sample.png",
    },
  ],
  "Curation Team": [
    {
      id: 4,
      quote:
        "The platform's reliability and performance throughout 2023 exceeded all expectations.",
      name: "David Park",
      designation: "Engineering Director at DataFlow",
      src: "/sample.png",
    },
    {
      id: 5,
      quote:
        "Our team's productivity doubled after implementing the solution in early 2023.",
      name: "Jennifer Martinez",
      designation: "VP of Operations at TechGrowth",
      src: "/sample.png",
    },
    {
      id: 6,
      quote:
        "The 2023 feature set revolutionized how we approach customer engagement.",
      name: "Robert Chang",
      designation: "Customer Success Lead at CloudTech",
      src: "/sample.png",
    },
  ],
  "Finance Team": [
    {
      id: 7,
      quote: "Being an early adopter in 2022 was one of our best strategic decisions.",
      name: "Lisa Thompson",
      designation: "CIO at FutureNet",
      src: "/sample.png",
    },
    {
      id: 8,
      quote: "The 2022 launch immediately solved our core challenges in spectacular fashion.",
      name: "James Wilson",
      designation: "Technical Lead at InnovateHub",
      src: "/sample.png",
    },
    {
      id: 9,
      quote: "From day one in 2022, the platform delivered exactly what was promised.",
      name: "Amanda Chen",
      designation: "Product Director at ScaleTech",
      src: "/sample.png",
    },
  ],
  "Operations Team": [
    {
      id: 10,
      quote:
        "Seamless integration and outstanding support made this a game-changer for our operations.",
      name: "Chris Morgan",
      designation: "COO at LogiTech Solutions",
      src: "/sample.png",
    },
    {
      id: 11,
      quote:
        "Optimizing our supply chain became effortless with the latest automation features.",
      name: "Natalie Brooks",
      designation: "Operations Manager at FastTrack",
      src: "/sample.png",
    },
    {
      id: 12,
      quote:
        "Our operational efficiency skyrocketed after adopting this platform.",
      name: "Ethan Davis",
      designation: "VP of Logistics at SwiftMove",
      src: "/sample.png",
    },
  ],
  "Production Team": [
    {
      id: 13,
      quote:
        "This tool has revolutionized our production pipeline. We can't imagine working without it.",
      name: "Sophia Turner",
      designation: "Production Lead at MegaManufacture",
      src: "/sample.png",
    },
    {
      id: 14,
      quote:
        "Unmatched flexibility and performance. Our production timelines have never been smoother.",
      name: "Oliver Grant",
      designation: "Factory Manager at BuildFast",
      src: "/sample.png",
    },
    {
      id: 15,
      quote:
        "Scaling production with this platform has been one of our smartest moves.",
      name: "Grace Kim",
      designation: "Head of Manufacturing at ApexTech",
      src: "/sample.png",
    },
  ],
  "Tech Team": [
    {
      id: 16,
      quote:
        "As a developer, I appreciate the powerful APIs and seamless integrations.",
      name: "Daniel Lee",
      designation: "Software Engineer at DevSolutions",
      src: "/sample.png",
    },
    {
      id: 17,
      quote:
        "The latest updates have taken performance and security to the next level.",
      name: "Emma Carter",
      designation: "CTO at CodeFlow",
      src: "/sample.png",
    },
    {
      id: 18,
      quote:
        "Our engineering workflow improved dramatically after implementing this platform.",
      name: "Ryan Foster",
      designation: "Lead Developer at SoftWorks",
      src: "/sample.png",
    },
  ],
};


const tabs = teams.map((team) => ({
  title: team,
  value: team,
  content: <AnimatedTestimonials testimonials={testimonialsByTeam[team] || []} />,
}));

const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center gap-4 justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActive(tab)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative",
              tabClassName,
              // Apply active styles immediately through className
              active.value === tab.value && activeTabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                initial={false}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className="absolute inset-0 rounded-full"
              />
            )}
            <span className="relative block">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      
      <div className="relative mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(contentClassName)}
          >
            {active.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default function TeamSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-0"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">
        Our <span className="text-primary">Team</span>
      </h2>
      <Tabs
        tabs={tabs}
        containerClassName="flex justify-center mb-12"
        tabClassName="px-4 py-2 text-base font-medium rounded-full border border-transparent transition-all hover:border-primary"
        activeTabClassName="bg-primary text-white"
        contentClassName="w-full max-w-6xl mx-auto"
      />
    </motion.section>
  );
}

export { Tabs };