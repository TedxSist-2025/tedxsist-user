"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SectionNavigationProps {
  sections: { title: string }[]
}

export default function SectionNavigation({ sections }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.title)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

    const scrollToSection = (title: string) => {
    const element = document.getElementById(title)
    if (element) {
      const navbarHeight = 100 // Adjust this value based on your actual navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - navbarHeight, behavior: "smooth" })
      setActiveSection(title)
    }
  }

  return (
    <nav className="sticky top-4">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.title}>
            <button
              onClick={() => scrollToSection(section.title)}
              className={cn(
                "text-sm hover:text-primary transition-colors",
                activeSection === section.title ? "font-bold text-primary" : "text-muted-foreground",
              )}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

