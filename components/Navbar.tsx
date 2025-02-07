"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { usePathname } from "next/navigation"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const FAQContext = React.createContext<{
  isFAQVisible: boolean;
  setIsFAQVisible: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isFAQVisible: false, setIsFAQVisible: () => {} });

const navigationMenuTriggerStyle = cva(
  "relative group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-foreground",
  {
    variants: {
      isActive: {
        true: "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary",
        false: "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
      }
    },
    defaultVariants: {
      isActive: false
    }
  }
)

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isFAQVisible, setIsFAQVisible] = React.useState(false)
  const router = useRouter();
  const scrollToFAQ = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (window.location.pathname !== "/") {
        window.location.href = "/#faq-section";
        return;
      }
      const faqSection = document.getElementById("faq-section");
      if (faqSection) {
        const navHeight = 100;
        const faqPosition = faqSection.offsetTop - navHeight;
        window.scrollTo({
          top: faqPosition,
          behavior: "smooth",
        });
      }
    }
  };

 React.useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 10);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  
  return (
    <FAQContext.Provider value={{ isFAQVisible, setIsFAQVisible }}>
      <nav
        className={cn(
          "fixed top-4 left-0 w-full z-50",
          isScrolled
            ? "top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl bg-background/40 backdrop-blur-lg rounded-lg shadow-[0px_8px_20px_-2px_rgba(31,31,31,0.3),4px_0px_12px_-2px_rgba(31,31,31,0.2),-4px_0px_12px_-2px_rgba(31,31,31,0.2)] z-50"
            : "bg-transparent shadow-none border-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
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
            <div className="flex-1 flex justify-center items-center">
              <div className="flex items-baseline space-x-8">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/events">Events</NavLink>
                <BlogsMenu />
                <NavLink href="/" onClick={scrollToFAQ}>FAQs</NavLink>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-center space-y-2">
  <HoverBorderGradient
  containerClassName="rounded-[var(--radius)]"
  as="button"
  className="flex items-center gap-2 px-4 py-2.5"
  onClick={() => router.push("/register")}
>
  <div className="flex items-center gap-2">
    <span className="text-base font-medium leading-none">Register</span>
    <ArrowRight className="w-4 h-4" />
  </div>
</HoverBorderGradient>
</div>

            </div>
          </div>
        
      </nav>
    </FAQContext.Provider>
  )
}

const NavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const pathname = usePathname();
  const { isFAQVisible, setIsFAQVisible } = React.useContext(FAQContext);

  React.useEffect(() => {
    const checkFAQVisibility = () => {
      if (children === "FAQs" && pathname === "/") {
        const faqSection = document.getElementById('faq-section');
        if (faqSection) {
          const rect = faqSection.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const visibilityThreshold = viewportHeight * 0.7;
          const sectionVisible = rect.height >= visibilityThreshold && 
                               rect.top <= (viewportHeight * 0.3);
          setIsFAQVisible(sectionVisible);
        }
      }
    };

    if (pathname !== "/") {
      setIsFAQVisible(false);
    }

    window.addEventListener('scroll', checkFAQVisibility);
    checkFAQVisibility();
    return () => {
      window.removeEventListener('scroll', checkFAQVisibility);
    };
  }, [children, pathname, setIsFAQVisible]);

  const isActive = children === "FAQs" 
    ? isFAQVisible 
    : children === "Home" 
      ? pathname === "/" && !isFAQVisible 
      : pathname === href;

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
  );
};

const BlogsMenu = () => (
  <NavigationMenu>
    <NavigationMenuList className="bg-transparent">
      <NavigationMenuItem>
        <NavigationMenuTrigger 
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent text-foreground hover:text-primary"
          )}
        >
          Blogs
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-background/95 backdrop-blur-sm">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                >
                  <div className="mb-2 mt-4 text-lg font-medium text-foreground">Featured Blog</div>
                  <p className="text-sm leading-tight text-muted-foreground">Check out our latest featured blog post</p>
                </Link>
              </NavigationMenuLink>
            </li>
            <ListItem href="/blogs/tech" title="Tech">
              Latest in technology and innovation
            </ListItem>
            <ListItem href="/blogs/lifestyle" title="Lifestyle">
              Tips for a better life
            </ListItem>
            <ListItem href="/blogs/travel" title="Travel">
              Explore the world through our experiences
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, href = "/", ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export default Navbar
