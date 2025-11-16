"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";
import {
  IoNewspaperOutline,
  IoChevronUp,
  IoChevronDown,
} from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialLink {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  label: string;
  tooltip: string;
  external: boolean;
  className: string;
  hoverEffect?: string;
  badge?: string;
  priority?: "high" | "medium" | "low";
}

const StickyInfo = ({ className }: { className?: string }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Hide/show based on scroll direction
      if (currentScrollY > scrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const socialLinks: SocialLink[] = [
    {
      Icon: CiLinkedin,
      href: "https://www.linkedin.com/company/aimterior-design",
      label: "LinkedIn",
      tooltip: "Connect with us on LinkedIn",
      external: true,
      className: "text-[#0A66C2] hover:text-white",
      hoverEffect:
        "hover:bg-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/30",
      priority: "high",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/constructionsiteco",
      label: "Instagram",
      tooltip: "Follow our latest updates",
      external: true,
      className: "text-[#E1306C] hover:text-white",
      hoverEffect:
        "hover:bg-gradient-to-r hover:from-[#E1306C] hover:to-[#C13584] hover:shadow-lg hover:shadow-[#E1306C]/30",
      priority: "high",
    },
    {
      Icon: CiMail,
      href: "mailto:info@constructionsite.com",
      label: "Email",
      tooltip: "Send us an email",
      external: true,
      className: "text-[#156ED9] hover:text-white",
      hoverEffect:
        "hover:bg-[#156ED9] hover:shadow-lg hover:shadow-[#156ED9]/30",
      priority: "medium",
    },
    {
      Icon: FaWhatsapp,
      href: "https://wa.me/+971553856863",
      label: "WhatsApp",
      tooltip: "Chat with us instantly",
      external: true,
      className: "text-[#25D366] hover:text-white",
      hoverEffect:
        "hover:bg-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/30",
      priority: "high",
    },
    {
      Icon: HiOutlinePhone,
      href: "tel:+971 55 385 6863",
      label: "Phone",
      tooltip: "Call us directly",
      external: true,
      className: "text-[#FF6B35] hover:text-white",
      hoverEffect:
        "hover:bg-[#FF6B35] hover:shadow-lg hover:shadow-[#FF6B35]/30",
      priority: "high",
    },
    {
      Icon: IoNewspaperOutline,
      href: "https://brochurelink.com",
      label: "Brochure",
      tooltip: "Download our brochure",
      external: true,
      className: "text-[#6366F1] hover:text-white",
      hoverEffect:
        "hover:bg-[#6366F1] hover:shadow-lg hover:shadow-[#6366F1]/30",
      priority: "low",
    },
  ];

  const priorityLinks = socialLinks.filter((link) => link.priority === "high");
  const secondaryLinks = socialLinks.filter((link) => link.priority !== "high");

  return (
    <TooltipProvider>
      <div
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        } ${className}`}
      >
        {/* Main Container */}
        <div className="hidden md:flex flex-col items-center">
          {/* Backdrop with glassmorphism */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-3 space-y-3">
            {/* Priority Links - Always Visible */}
            <div className="space-y-3">
              {priorityLinks.map(
                ({
                  Icon,
                  href,
                  label,
                  tooltip,
                  external,
                  className,
                  hoverEffect,
                  badge,
                }) => (
                  <div key={label} className="relative group">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {external ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={`
                            ${className} ${hoverEffect}
                            flex items-center justify-center w-12 h-12 rounded-xl
                            transition-all duration-300 ease-out transform
                            hover:scale-110 hover:-translate-y-1
                            bg-white/80 backdrop-blur-sm border border-gray-200/50
                            shadow-md hover:shadow-xl
                            active:scale-95
                          `}
                          >
                            <Icon size={24} />
                            {badge && (
                              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold animate-pulse">
                                {badge}
                              </span>
                            )}
                          </a>
                        ) : (
                          <Link
                            href={href}
                            aria-label={label}
                            className={`
                            ${className} ${hoverEffect}
                            flex items-center justify-center w-12 h-12 rounded-xl
                            transition-all duration-300 ease-out transform
                            hover:scale-110 hover:-translate-y-1
                            bg-white/80 backdrop-blur-sm border border-gray-200/50
                            shadow-md hover:shadow-xl
                            active:scale-95
                          `}
                          >
                            <Icon size={24} />
                          </Link>
                        )}
                      </TooltipTrigger>
                      <TooltipContent
                        side="left"
                        className="bg-gray-900 text-white border-gray-700 shadow-xl"
                        sideOffset={12}
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={16} />
                          {tooltip}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                )
              )}
            </div>

            {/* Divider */}
            {secondaryLinks.length > 0 && (
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            )}

            {/* Expand/Collapse Button */}
            {secondaryLinks.length > 0 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-center w-10 h-8 rounded-lg bg-brand-50/10 hover:bg-brand-50/20 transition-all duration-300 text-brand-50 hover:text-brand-50 border border-brand-50/30 hover:border-brand-50/50 hover:scale-105"
                aria-label={isExpanded ? "Show less" : "Show more"}
              >
                {isExpanded ? (
                  <IoChevronUp size={16} />
                ) : (
                  <IoChevronDown size={16} />
                )}
              </button>
            )}

            {/* Secondary Links - Collapsible */}
            <div
              className={`
              space-y-3 transition-all duration-300 ease-in-out overflow-hidden
              ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            `}
            >
              {secondaryLinks.map(
                ({
                  Icon,
                  href,
                  label,
                  tooltip,
                  external,
                  className,
                  hoverEffect,
                }) => (
                  <div key={label} className="relative group">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {external ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={`
                            ${className} ${hoverEffect}
                            flex items-center justify-center w-12 h-12 rounded-xl
                            transition-all duration-300 ease-out transform
                            hover:scale-110 hover:-translate-y-1
                            bg-white/80 backdrop-blur-sm border border-gray-200/50
                            shadow-md hover:shadow-xl
                            active:scale-95
                          `}
                          >
                            <Icon size={22} />
                          </a>
                        ) : (
                          <Link
                            href={href}
                            aria-label={label}
                            className={`
                            ${className} ${hoverEffect}
                            flex items-center justify-center w-12 h-12 rounded-xl
                            transition-all duration-300 ease-out transform
                            hover:scale-110 hover:-translate-y-1
                            bg-white/80 backdrop-blur-sm border border-gray-200/50
                            shadow-md hover:shadow-xl
                            active:scale-95
                          `}
                          >
                            <Icon size={22} />
                          </Link>
                        )}
                      </TooltipTrigger>
                      <TooltipContent
                        side="left"
                        className="bg-gray-900 text-white border-gray-700 shadow-xl"
                        sideOffset={12}
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={16} />
                          {tooltip}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Connection Line Animation */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-brand-50 to-transparent mt-4 animate-pulse"></div>
        </div>

        {/* Mobile Floating Action Button */}
        <div className="md:hidden fixed bottom-6 right-6">
          <div className="relative">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-14 h-14 bg-gradient-to-r from-brand-50 to-brand-400 hover:from-brand-100 hover:to-brand-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
              aria-label="Contact options"
            >
              <CiMail size={24} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
            </button>

            {/* Mobile Popup Menu */}
            {isExpanded && (
              <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[200px] animate-in slide-in-from-bottom-2 fade-in duration-300">
                <div className="space-y-3">
                  {priorityLinks.map(
                    ({ Icon, href, label, external, className }) => (
                      <div key={label}>
                        {external ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${className} flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200`}
                          >
                            <Icon size={20} />
                            <span className="font-medium">{label}</span>
                          </a>
                        ) : (
                          <Link
                            href={href}
                            className={`${className} flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200`}
                          >
                            <Icon size={20} />
                            <span className="font-medium">{label}</span>
                          </Link>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default StickyInfo;
