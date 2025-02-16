import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
interface BlogHeaderProps {
  image: string
  badge: { icon: string; text: string }
  title: string
  author: { name: string; avatar: string }
  description: string
  timeAgo: string
}

export default function BlogHeader({ image, badge, title, author, description, timeAgo }: BlogHeaderProps) {
   const [expanded, setExpanded] = useState(false);
  const words = description.split(" ");
  const isLong = words.length > 15;
  return (
    <div className="mb-8">
      <Image src={image || "/placeholder.svg"} alt={title} width={1200} height={450} className="rounded-2xl mb-4" />
      <Badge variant="outline" className="rounded-full mb-2">
        {badge.icon} {badge.text}
      </Badge>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <div className="flex items-center mb-2">
        <Avatar className="mr-2">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{author.name}</span>
      </div>
          <p className="text-muted-foreground mb-2">
      {isLong && !expanded ? words.slice(0, 15).join(" ") + "..." : description}{" "}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary font-medium inline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </p>

      <p className="text-sm text-muted-foreground">{timeAgo}</p>
    </div>
  )
}

