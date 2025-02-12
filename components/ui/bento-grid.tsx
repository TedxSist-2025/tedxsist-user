import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  name,
  avatarSrc,
  timeAgo,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: string;
  name?: string;
  avatarSrc?: string;
  timeAgo?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-background border-white/[0.2] border flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 space-y-3">
        {/* Icon */}
        <div className="text-xs text-neutral-300">
          <Badge className="rounded-full">{icon}</Badge>
        </div>

        {/* Title */}
        <div className="font-sans font-bold text-neutral-200">{title}</div>

        {/* Author and Timestamp */}
        <div className="flex flex-col gap-2 text-neutral-400 text-xs">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={avatarSrc} />
              <AvatarFallback>{name?.charAt(0) || "?"}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-neutral-300">{name}</span>
          </div>
          
        </div>

        {/* Description */}
        <div className="text-sm text-neutral-300">{description}</div>
        <span className="text-[11px] text-neutral-500">{timeAgo}</span>
      </div>
    </div>
  );
};
