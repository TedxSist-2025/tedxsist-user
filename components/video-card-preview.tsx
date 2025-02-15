"use client";

import { useState } from "react";
import Image from "next/image";
interface VideoPreviewCardProps {
  isMain?: boolean;
  category: string;
  title: string;
  description?: string;
  author: string;
  plays: string;
  timeAgo: string;
  duration: string;
  thumbnail: string;
  videoId: string;
  setCursorHidden: (hidden: boolean) => void;
}

export default function VideoPreviewCard({
  isMain = false,
  category,
  title,
  description,
  author,
  plays,
  timeAgo,
  duration,
  thumbnail,
  videoId,
  setCursorHidden, // Receive the function to control cursor visibility
}: VideoPreviewCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  if (isMain) {
    return (
      <div className="border-b border-gray-700 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         
          
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                {category}
              </span>
              <h2 className="text-2xl font-bold mt-2 text-foreground">{title}</h2>
              {description && (
                <div className="mt-3">
                  <p className={`text-gray-300 ${isExpanded ? "" : "line-clamp-3"}`}>
                    {description}
                  </p>
                  {description.length > 100 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-2 text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
              )}
            </div>
            <div className="text-sm text-gray-400 mt-4">
              {author} • {plays} plays • {timeAgo}
            </div>
          </div>
           <div 
            className="relative aspect-video rounded-xl overflow-hidden"
            onMouseEnter={() => {
        setIsHovered(true);
        setCursorHidden(true); // Hide cursor when hovering over video
      }}
             onMouseLeave={() => {
        setIsHovered(false);
        setCursorHidden(false); // Show cursor when not hovering
      }}
          >
            {isHovered ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
                allow="autoplay; encrypted-media"
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {duration}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group h-full"
       onMouseEnter={() => {
        setIsHovered(true);
        setCursorHidden(true); // Hide cursor when hovering over video
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorHidden(false); // Show cursor when not hovering
      }}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
        {isHovered ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
            allow="autoplay; encrypted-media"
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
              {duration}
            </div>
          </>
        )}
      </div>
      
      <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
        {category}
      </span>
      <h3 className="font-semibold text-lg mt-2 group-hover:text-primary">
        {title}
      </h3>
      <div className="text-sm text-gray-400 mt-1">
        {author} • {plays} plays • {timeAgo}
      </div>
    </div>
  );
}