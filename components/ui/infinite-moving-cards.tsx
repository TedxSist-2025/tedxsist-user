import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Item {
  quote: string;
  name: string;
  title: string;
  photo: string;
}

interface InfiniteMovingCardsProps {
  items: Item[];
  direction?: "top" | "bottom";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "top",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    function getDirection() {
      if (containerRef.current) {
        if (direction === "top") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
        }
      }
    }

    function getSpeed() {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    }

    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    
    addAnimation();
  }, [direction, speed]);

  return (
   <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 h-[600px] max-w-7xl overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col min-h-full shrink-0 gap-4 px-4 w-max",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="group relative w-[350px] max-w-full rounded-xl bg-black p-6 border-2 border-zinc-800/50 transition-all duration-300 overflow-hidden"
            key={item.name}
          >
            {/* Content Container */}
            <div className="relative z-20 flex flex-col space-y-4">
              {/* Quote */}
              <p className="text-sm leading-6 text-gray-300">{item.quote}</p>
              
              {/* Footer with Avatar */}
              <footer className="flex items-center gap-4">
                <Avatar className="h-10 w-10 rounded-full ring-2 ring-white/10">
                  <AvatarImage
                    src={item.photo}
                    alt={item.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-[#930019] text-zinc-300">
                    {item.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">
                    {item.name}
                  </span>
                  <span className="text-sm text-zinc-500">{item.title}</span>
                </div>
              </footer>
            </div>

            {/* Background Image with curved separation */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent z-10" 
                   style={{
                     clipPath: "ellipse(100% 60% at 50% 40%)"
                   }}
              />
              <Image
                src="/bg.png"
                alt="bg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;