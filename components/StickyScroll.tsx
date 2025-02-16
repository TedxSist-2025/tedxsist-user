"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

interface Section {
  title: ReactNode;
  description: string;
  image: string;
}

export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const sections: Section[] = [
    {
      title: <>What is <span className="text-primary">TEDx?</span></>,
      description: "In the spirit of discovering and spreading ideas, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDx[name], where x = independently organized TED event. At our TEDx[name] event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.",
      image: "/bg.png?height=400&width=600",
    },
    {
      title: "Expert Team",
      description: "Our team of skilled professionals brings years of experience and deep industry knowledge to every project. With expertise in software development, data analytics, and emerging technologies, we work collaboratively to deliver exceptional results. Our commitment to excellence ensures that we provide innovative, scalable, and efficient solutions tailored to your needs. Trust our experts to turn your vision into reality.",
      image: "/bg.png?height=400&width=600",
    },
    {
      title: "Global Reach",
      description: "Expand your business worldwide with our extensive network and strategic partnerships. We connect you with customers across different regions, helping you tap into new markets and unlock global opportunities. With a strong presence and reliable connections, we ensure seamless cross-border operations. Reach your audience effortlessly and grow your business beyond boundaries.",
      image: "/bg.png?height=400&width=600",
    },
    {
      title: "Future Ready",
      description: "Stay ahead of the curve with forward-thinking strategies and innovative approaches. Our solutions are designed to help businesses adapt to rapid technological changes, ensuring long-term success. We integrate emerging technologies, market trends, and data-driven insights to prepare you for the future. Embrace innovation and position your business for sustainable growth in an ever-evolving landscape.",
      image: "/bg.png?height=400&width=600",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalSections = sections.length;

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.floor(latest * totalSections);
      setActiveSection(Math.max(0, Math.min(newIndex, totalSections - 1)));
    });

    return () => unsubscribe();
  }, [scrollYProgress, totalSections]);

  return (
    <div ref={containerRef} className="h-[200vh] relative bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full relative px-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-4 ml-[10%] relative z-10">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: activeSection === index ? 1 : 0,
                  x: activeSection === index ? 0 : -50,
                  filter: `blur(${activeSection === index ? 0 : 10}px)`,
                }}
                transition={{ duration: 0.5 }}
                className="max-w-xl absolute inset-12 flex flex-col justify-center"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-4xl font-bold mb-4 text-white"
                >
                  {section.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-400"
                >
                  {section.description}
                </motion.p>
                <div className="mt-8 h-1 w-32 bg-[#EB0028] rounded-full" />
              </motion.div>
            ))}
          </div>

          {/* Right Images */}
          <div className="h-screen w-full flex justify-center items-center relative overflow-hidden">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-[400px] h-[300px] rounded-2xl overflow-hidden"
            >
              <Image
                src={sections[activeSection].image}
                alt={typeof sections[activeSection].title === 'string' 
                  ? sections[activeSection].title 
                  : 'TEDx Section Image'}
                fill
                className="object-cover object-center rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
