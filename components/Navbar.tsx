"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

const FAQContext = React.createContext<{
  isFAQVisible: boolean;
  setIsFAQVisible: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isFAQVisible: false, setIsFAQVisible: () => {} });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isFAQVisible, setIsFAQVisible] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/blogs", label: "Blogs" },
    { href: "/#faq-section", label: "FAQs" },
  ]

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    // Close mobile menu when path changes
    setIsOpen(false)
  }, [pathname])

  const scrollToFAQ = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (typeof window !== "undefined") {
      if (window.location.pathname !== "/") {
        window.location.href = "/#faq-section"
        return
      }
      const faqSection = document.getElementById("faq-section")
      if (faqSection) {
        const navHeight = 100
        const faqPosition = faqSection.offsetTop - navHeight
        window.scrollTo({
          top: faqPosition,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <FAQContext.Provider value={{ isFAQVisible, setIsFAQVisible }}>
      <nav
        className={cn(
          "fixed top-4 left-0 w-full z-50",
          isScrolled
            ? "top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl bg-background/40 backdrop-blur-lg rounded-lg shadow-lg"
            : "bg-transparent shadow-none border-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="relative">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={item.href === "/#faq-section" ? scrollToFAQ : undefined}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Register Button - Desktop */}
            <div className="hidden md:flex">
              <button
                onClick={() => router.push("/register")}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <span>Register</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Hamburger Menu */}
            <motion.button
              className="md:hidden flex items-center"
              onClick={() => setIsOpen(!isOpen)}
              animate={isOpen ? "open" : "closed"}
            >
              <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path
                  fill="transparent"
                  strokeWidth="3"
                  stroke="currentColor"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                  }}
                />
                <motion.path
                  d="M 2 9.423 L 20 9.423"
                  fill="transparent"
                  strokeWidth="3"
                  stroke="currentColor"
                  strokeLinecap="round"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.1 }}
                />
                <motion.path
                  fill="transparent"
                  strokeWidth="3"
                  stroke="currentColor"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                  }}
                />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={item.href === "/#faq-section" ? scrollToFAQ : undefined}
                        className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => router.push("/register")}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <span>Register</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </FAQContext.Provider>
  )
}

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) => {
  const pathname = usePathname()
  const { isFAQVisible } = React.useContext(FAQContext)

  const isActive =
    children === "FAQs"
      ? isFAQVisible
      : children === "Home"
      ? pathname === "/" && !isFAQVisible
      : pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-3 py-2 text-sm font-medium text-foreground hover:text-primary group",
        isActive && "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
      )}
    >
      <span className="relative z-10">{children}</span>
      {!isActive && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out" />
      )}
    </Link>
  )
}

export default Navbar