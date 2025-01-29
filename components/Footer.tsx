import React from 'react';
import Image from 'next/image';

import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiYoutubeFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 font-inter">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        {/* Logo and Description */}
        <div className="flex-1 text-left md:text-left border-b border-gray-700 pb-6 md:pb-0 md:border-none">
          <Image 
            src="/logo-white.png"
            alt="TEDxSIST" 
            width={160}
            height={40}
            className="w-40 mx-auto md:mx-0 mb-8 ml-0 md:ml-0"
            priority
          />
          <p className="text-sm text-gray-500 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex flex-row md:flex-row center md:justify-start gap-[7rem] border-b border-gray-700 pb-6 md:pb-0 md:border-none">
          {/* Explore Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Events</li>
              <li className="hover:text-white cursor-pointer">Speakers</li>
            </ul>
          </div>

          {/* About Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-white cursor-pointer">Privacy</li>
              <li className="hover:text-white cursor-pointer">Support</li>
              <li className="hover:text-white cursor-pointer">Sponsors</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription and Social Media Links */}
        <div className="flex-1 flex flex-col items-start text-left  pb-6 md:pb-0 md:border-none">
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Subscribe to our newsletter</h3>
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md bg-black text-white placeholder-gray-500 focus:outline-none border border-gray-700 mb-2 md:mb-0"
              />
              <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-2 text-gray-500">
              By subscribing, you agree that we will manage your personal information according to our Privacy Policy
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-white mb-2">Follow on</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tedxsist?igsh=MWgwMGMzYXh4ZGphZQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
              >
                <AiFillInstagram className="w-6 h-6 cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com/@TED"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube"
              >
                <RiYoutubeFill className="w-6 h-6 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/company/tedxsist1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
              >
                <FaLinkedin className="w-6 h-6 cursor-pointer" />
              </a>
              <a
                href="mailto:tedxsist@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send us an email"
              >
                <MdEmail className="w-6 h-6 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        <div className="mb-2">
          <a href="#" className="hover:text-white mx-2">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white mx-2">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-white mx-2">FAQs</a>
        </div>
        <p>© 2025, TEDxSIST. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
