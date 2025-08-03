"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// temp fix
const StickyInfo = ({ className }: { className?: string }) => {
  const [makeIconDarker, setMakeIconDarker] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setMakeIconDarker(scrollY > viewportHeight * 0.6);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      Icon: CiLinkedin,
      href: "https://www.linkedin.com/company/constructionsiteco",
      label: "LinkedIn",
      tooltip: "Follow us on LinkedIn",
      external: true,
      className: `${
        makeIconDarker ? "text-gray-400 scale-110" : "text-gray-200 scale-100"
      } transition-all duration-500 ease-in-out hover:scale-125`,
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/constructionsiteco",
      label: "Instagram",
      tooltip: "Check our Instagram",
      external: true,
      className: `${
        makeIconDarker ? "text-gray-400 scale-110" : "text-gray-200 scale-100"
      } transition-all duration-500 ease-in-out hover:scale-125`,
    },
    {
      Icon: CiMail,
      href: "mailto:info@constructionsite.com",
      label: "Email",
      tooltip: "Email us",
      external: true,
      className: `${
        makeIconDarker ? "text-gray-400 scale-110" : "text-gray-200 scale-100"
      } transition-all duration-500 ease-in-out hover:scale-125`,
    },
    {
      Icon: FaWhatsapp,
      href: "https://wa.me/1234567890",
      label: "WhatsApp",
      tooltip: "Chat on WhatsApp",
      external: true,
      className: `${
        makeIconDarker ? "text-gray-400 scale-110" : "text-gray-200 scale-100"
      } transition-all duration-500 ease-in-out hover:scale-125`,
    },
    {
      Icon: IoNewspaperOutline,
      href: "https://brochurelink.com",
      label: "Brochure",
      tooltip: "Brochure",
      external: true,
      className: `${
        makeIconDarker ? "text-gray-400 scale-110" : "text-gray-200 scale-100"
      } transition-all duration-500 ease-in-out hover:scale-125`,
    },
  ];

  return (
    <TooltipProvider>
      <div
        className={`space-y-5 ${className} p-4 flex-col items-center hidden md:flex z-10 rounded-l-xl`}
      >
        {socialLinks.map(
          ({ Icon, href, label, tooltip, external, className }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`${className} transition-colors duration-300`}
                  >
                    <Icon size={28} className="cursor-pointer" />
                  </a>
                ) : (
                  <Link
                    href={href}
                    aria-label={label}
                    className="text-primary hover:text-gray-900 transition-colors duration-300"
                  >
                    <Icon size={28} className="cursor-pointer" />
                  </Link>
                )}
              </TooltipTrigger>
              <TooltipContent side="left">{tooltip}</TooltipContent>
            </Tooltip>
          )
        )}
      </div>
    </TooltipProvider>
  );
};

export default StickyInfo;
