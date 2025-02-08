"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Dynamically load icons only on client-side
const FaLinkedin = dynamic(() => import("react-icons/fa").then((mod) => mod.FaLinkedin), { ssr: false });
const FaInstagram = dynamic(() => import("react-icons/fa").then((mod) => mod.FaInstagram), { ssr: false });
const FaYoutube = dynamic(() => import("react-icons/fa").then((mod) => mod.FaYoutube), { ssr: false });
const MdEmail = dynamic(() => import("react-icons/md").then((mod) => mod.MdEmail), { ssr: false });

const Footer: React.FC = () => {
  const [year, setYear] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear()); // Ensure the year is set only after mount
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-black text-white py-12 px-6 sm:px-8 lg:px-12 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="flex flex-col lg:items-start">
            <Image src="/logo.png" alt="TEDxSIST" width={160} height={40} className="w-40 mb-6" priority />
            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-between lg:justify-center gap-8 lg:gap-16 lg:col-span-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Home", path: "/" },
                  { name: "Blogs", path: "/blogs" },
                  { name: "Events", path: "/events" },
                ].map(({ name, path }) => (
                  <li key={name}>
                    <Link href={path} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "About", path: "/about" },
                  { name: "Privacy", path: "/privacy" },
                  { name: "FAQs", path: "/#faq-section" },
                ].map(({ name, path }) => (
                  <li key={name}>
                    <Link href={path} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter & Social Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
              <form className="mb-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input type="email" placeholder="Your email" autoComplete="off" required />
                  <Button type="submit" className="whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </form>
              <p className="text-xs text-gray-500">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {isClient &&
                  [
                    { Icon: FaInstagram, href: "https://www.instagram.com/tedxsist", label: "Instagram" },
                    { Icon: FaYoutube, href: "https://www.youtube.com/@TED", label: "YouTube" },
                    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/tedxsist1", label: "LinkedIn" },
                    { Icon: MdEmail, href: "mailto:tedxsist@gmail.com", label: "Email" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${label}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© {year || "2025"} TEDxSIST. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              { name: "Privacy Policy", path: "/privacy" },
              { name: "Terms of Use", path: "/terms" },
              { name: "FAQs", path: "/#faq-section" },
            ].map(({ name, path }) => (
              <Link key={name} href={path} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
