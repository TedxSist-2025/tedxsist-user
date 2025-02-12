'use client'
import React, { useRef } from 'react';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowRight } from "lucide-react";
import { formatRelativeTime } from '@/lib/time-ago';
export default function BlogBentoGrid() {
  const exploreMoreRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToExploreMore = () => {
    if (exploreMoreRef.current) {
      const navbarHeight = 80;
      const elementPosition = exploreMoreRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-32">
      <div className="mb-8">
        
        <h2 className="text-3xl font-bold mb-2">Featured Blog</h2>
        <BentoGrid className="md:auto-rows-[minmax(20rem,auto)] cursor-pointer">
          <BentoGridItem
            title="TEDxSIST 2025: Resilience"
            description="Experience TEDxSIST 2025, where resilience meets innovation. Engage with thought-provoking talks, connect with visionary speakers, and expand your network in an inspiring environment that fosters creativity, transformation, and impactful ideas shaping the future."
            header={<Skeleton />}
            className="md:col-span-3"
            icon="Article"
            name="Neeharika and Team"
            timeAgo={formatRelativeTime(1739356812)}
          />
        </BentoGrid>
      </div>

      <div className="mt-12" ref={exploreMoreRef}>
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-foreground">Explore More</h2>
          </div>
          <button 
            className="flex items-center gap-2 text-neutral-100 hover:text-[#EB0028] transition-colors"
            onClick={handleScrollToExploreMore}
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        <BentoGrid className="md:auto-rows-[minmax(20rem,auto)] cursor-pointer gap-4">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={`${item.className} min-h-[20rem] transition-all duration-300 ${
                item.description.length > 100 ? 'md:min-h-[24rem]' : ''
              }`}
              icon={item.icon}
              name={item.name}
              timeAgo={formatRelativeTime(item.timestamp)}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white/[0.2] bg-black"></div>
);



const items = [
  {
    title: "Magic in quiet moments: Behind the scenes journey",
    description: "Delving into this year's theme and its significance. A deeper look at how we crafted meaningful experiences through thoughtful design and careful attention to detail. Our journey was filled with discoveries and learnings that shaped the final outcome.",
    header: <Skeleton />, 
    className: "md:col-span-2",
    icon: "blogs",
    name: "Aakriti Bose",
    timestamp: 1739356812,
  },
  {
    title: "It's TEDx SIST Time! Are You Ready to Make the Most of It?",
    description: "A guide to preparing for TEDx SIST, including registration, theme reflection, engagement, networking, and applying insights after the event.",
    header: <Skeleton />, 
    className: "md:col-span-1",
    icon: "blogs",
    name: "Catherine Oviya",
    timestamp: 1739356812,
  },
  {
    title: "A Story of The Grit and Sweat Behind Resilience: A Case Study Of Our Local Community",
    description: "This blog reflects on Chennai's resilience post-2004 tsunami, highlighting community efforts, compassion, and faith in rebuilding lives.",
    header: <Skeleton />, 
    className: "md:col-span-1",
    icon: "blogs",
    name: "Catherine Oviya",
    timestamp: 1739356812,
  },
  {
    title: "TEDxSIST 2025: Resilience",
    description: "Experience TEDxSIST 2025, where resilience meets innovation. Engage with thought-provoking talks, connect with visionary speakers, and expand your network in an inspiring environment that fosters creativity, transformation, and impactful ideas shaping the future.",
    header: <Skeleton />, 
    className: "md:col-span-2",
    icon: "Article",
    name: "Neeharika and Team",
    timestamp: 1739356812,
  },
];