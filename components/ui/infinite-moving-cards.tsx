import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

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
  rowPosition?: "left" | "center" | "right";
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "top",
  speed = "fast",
  pauseOnHover = true,
  className,
  rowPosition = "center",
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    addAnimation();
  }, []);

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

  const getDirection = () => {
    if (containerRef.current) {
      if (rowPosition === "center") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "top" ? "forwards" : "reverse"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          rowPosition === "left" ? "reverse" : "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 h-[600px] max-w-7xl overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col min-h-full shrink-0 gap-6 px-4 w-max",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="group relative w-[400px] max-w-full rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            key={item.name}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative space-y-6">
              {/* Quote icon top */}
              <div className="absolute -top-4 -left-2">
                <Quote className="h-8 w-8 text-primary/40 rotate-180" />
              </div>
              
              {/* Quote content */}
              <blockquote className="relative pt-4 pb-2">
                <p className="text-base font-medium leading-relaxed text-gray-300">
                  {item.quote}
                </p>
              </blockquote>
              
              {/* Quote icon bottom */}
              <div className="absolute -bottom-3 right-0">
                <Quote className="h-8 w-8 text-primary/40" />
              </div>

              {/* Author info */}
              <footer className="flex items-center gap-4 border-t border-gray-800 pt-6 mt-6">
                <Avatar className="h-12 w-12 rounded-full ">
                  <AvatarImage
                    src={item.photo}
                    alt={item.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-white/20 to-white/10 text-white">
                    {item.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-wide text-white">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-400 mt-0.5">{item.title}</span>
                </div>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;