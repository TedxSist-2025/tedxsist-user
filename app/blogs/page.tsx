'use client'
import React, { useRef } from 'react';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowRight } from "lucide-react";

export default function BlogBentoGrid() {
  const exploreMoreRef = useRef<HTMLDivElement | null>(null);


  const handleScrollToExploreMore = () => {
  if (exploreMoreRef.current) {
    const navbarHeight = 80; // adjust this to match your navbar height
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
      {/* Featured Blog Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Featured Blog</h2>
        <BentoGrid className="md:auto-rows-[20rem]">
          <BentoGridItem
            title="The Future of AI"
            description="An in-depth exploration of artificial intelligence and its impact on society."
            header={<Skeleton />}
            className="md:col-span-3"
            icon="Article"
          />
        </BentoGrid>
      </div>

      {/* Explore More Section */}
      <div className="mt-12" ref={exploreMoreRef}>
        <div className="flex justify-between items-center mb-2">
          <div  ref={exploreMoreRef}>
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
        
        <BentoGrid className="md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
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
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />, 
    className: "md:col-span-2",
    icon: "Article",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />, 
    className: "md:col-span-1",
    icon: "Article",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />, 
    className: "md:col-span-1",
    icon: "Article",
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />, 
    className: "md:col-span-2",
    icon: "Article",
  },
];
