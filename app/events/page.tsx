"use client"
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from 'framer-motion';

export default function TimelineDemo() {
const data = [
  {
    title: "Upcoming",
    content: (
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-gray-100 mb-4"
        >
          <span className="text-primary">Resilience</span> – Exploring Human Experiences
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.25, 0.1, 0, 1],
          }}
          className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mb-8"
        >
          The upcoming TEDxSIST event will focus on resilience—the ability to overcome challenges and emerge stronger. This theme explores various aspects of resilience in human experiences, including personal growth, community solidarity, innovation, and creativity. Join us as we hear inspiring talks from individuals who embody resilience and share transformative ideas that drive change.
        </motion.p>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src="/tedx2025-1.jpg"
            alt="TEDxSIST 2025 Event"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src="/tedx2025-2.jpg"
            alt="TEDxSIST 2025 Speaker"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-gray-100 mb-4"
        >
          <span className="text-primary">Uncharted</span> Reality
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.25, 0.1, 0, 1],
          }}
          className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mb-8"
        >
          TEDxSIST 2023 explored new frontiers of human experience, from technological advancements to philosophical reflections on society. The event was a journey into uncharted territories of thought, offering a mix of futuristic concepts and practical insights.
        </motion.p>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src="/tedx2023-1.jpg"
            alt="TEDxSIST 2023 Event"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src="/tedx2023-2.jpg"
            alt="TEDxSIST 2023 Speaker"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-gray-100 mb-4"
        >
          <span className="text-primary">Merging Minds:</span> League of Castaways
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.25, 0.1, 0, 1],
          }}
          className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mb-8"
        >
          TEDxSIST 2022 brought together brilliant minds who shared their diverse ideas, dreams, and innovations. The event was about finding strength in unity and collaboration, despite seemingly isolating challenges.
        </motion.p>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src="/tedx2022-1.jpg"
            alt="TEDxSIST 2022 Event"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src="/tedx2022-2.jpg"
            alt="TEDxSIST 2022 Speaker"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
];

   return (
    <div className="w-full h-full bg-black">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-24">
        <div className="max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ 
              duration: 1.5,
              ease: [0.25, 0.1, 0, 1]
            }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight mt-12"
          >
            Where <span className="text-primary">Ideas</span> Take Flight
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 0.4,
              ease: [0.25, 0.1, 0, 1]
            }}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl"
          >
            Step into a realm where innovation meets inspiration. Each TEDxSIST event crafts a unique story of breakthrough ideas and visionary minds coming together to shape tomorrow.
          </motion.p>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          ease: [0.25, 0.1, 0, 1]
        }}
      >
        <Timeline data={data} />
      </motion.div>
    </div>
  );
};