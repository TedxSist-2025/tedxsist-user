"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

type Year = 2024 | 2023 | 2022;
const years = [2024, 2023, 2022] as const;

const testimonials2024: Testimonial[] = [
  {
    quote: "The latest features and improvements have made this platform indispensable for our team's daily operations.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/sample.png",
  },
  {
    quote: "The 2024 updates have transformed how we handle complex workflows. Incredibly impressed.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/sample.png",
  },
  {
    quote: "This year's innovations have set a new standard for what we expect from enterprise software.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/sample.png",
  },
]

const testimonials2023: Testimonial[] = [
  {
    quote: "The platform's reliability and performance throughout 2023 exceeded all expectations.",
    name: "David Park",
    designation: "Engineering Director at DataFlow",
    src: "/sample.png",
  },
  {
    quote: "Our team's productivity doubled after implementing the solution in early 2023.",
    name: "Jennifer Martinez",
    designation: "VP of Operations at TechGrowth",
    src: "/sample.png",
  },
  {
    quote: "The 2023 feature set revolutionized how we approach customer engagement.",
    name: "Robert Chang",
    designation: "Customer Success Lead at CloudTech",
    src: "/sample.png",
  },
]

const testimonials2022: Testimonial[] = [
  {
    quote: "Being an early adopter in 2022 was one of our best strategic decisions.",
    name: "Lisa Thompson",
    designation: "CIO at FutureNet",
    src: "/sample.png",
  },
  {
    quote: "The 2022 launch immediately solved our core challenges in spectacular fashion.",
    name: "James Wilson",
    designation: "Technical Lead at InnovateHub",
    src: "/sample.png",
  },
  {
    quote: "From day one in 2022, the platform delivered exactly what was promised.",
    name: "Amanda Chen",
    designation: "Product Director at ScaleTech",
    src: "/sample.png",
  },
]

const createYearContent = (year: Year) => {
  const testimonialsByYear: Record<Year, Testimonial[]> = {
    2024: testimonials2024,
    2023: testimonials2023,
    2022: testimonials2022,
  }
  return <AnimatedTestimonials testimonials={testimonialsByYear[year]} />
}

const tabs = years.map(year => ({
  title: year.toString(),
  value: year.toString(),
  content: createYearContent(year as Year)
}))

export default function PastSpeakers() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-24 border-b border-gray-700 pb-12 pt-16"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Past <span className="text-primary">Speakers</span></h2>
      <Tabs
        tabs={tabs}
        containerClassName="flex justify-center mb-12"
        tabClassName="px-4 py-2 text-base font-medium rounded-full border border-transparent transition-all hover:border-primary"
        activeTabClassName="bg-primary text-white"
        contentClassName="w-full max-w-6xl mx-auto"
      />
    </motion.section>
  )
}

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

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
            className={cn(
              "relative",
              tabClassName,
              // Add immediate background styling for active tab
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