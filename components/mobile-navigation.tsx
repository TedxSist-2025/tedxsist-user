"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown ,ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils" // Ensure you have a utility function for conditional classnames

interface MobileNavigationProps {
  sections: { title: string }[]
}

export default function MobileNavigation({ sections }: MobileNavigationProps) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const scrollToSection = (title: string) => {
    const element = document.getElementById(title)
    if (element) {
      const navbarHeight = 100 // Adjust this value based on your actual navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - navbarHeight, behavior: "smooth" })
      setActiveSection(title)
    }
  }

  // Automatically update the active section when scrolling
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = null
      for (const section of sections) {
        const element = document.getElementById(section.title)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.title
            break
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full">
  Sections {open ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-full ">
        {sections.map((section) => (
          <DropdownMenuItem
            key={section.title}
            onSelect={() => scrollToSection(section.title)}
            className={cn("w-full", activeSection === section.title ? "text-primary" : "")}
          >
            {section.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
