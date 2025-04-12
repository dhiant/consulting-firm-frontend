import React from "react";
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

const StickyInfo = ({ className }: { className?: string }) => {
  const socialLinks = [
    {
      Icon: CiLinkedin,
      href: "https://www.linkedin.com/company/constructionsiteco",
      label: "LinkedIn",
      tooltip: "Follow us on LinkedIn",
      external: true,
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/constructionsiteco",
      label: "Instagram",
      tooltip: "Check our Instagram",
      external: true,
    },
    {
      Icon: CiMail,
      href: "mailto:info@constructionsite.com",
      label: "Email",
      tooltip: "Email us",
      external: true,
    },
    {
      Icon: FaWhatsapp,
      href: "https://wa.me/1234567890",
      label: "WhatsApp",
      tooltip: "Chat on WhatsApp",
      external: true,
    },
    {
      Icon: IoNewspaperOutline,
      href: "https://brochurelink.com",
      label: "Brochure",
      tooltip: "Brochure",
      external: true,
    },
  ];

  return (
    <TooltipProvider>
      <div
        className={`space-y-5 ${className} bg-white p-4 rounded-tl-xl shadow-lg flex-col items-center hidden md:flex`}
      >
        {socialLinks.map(({ Icon, href, label, tooltip, external }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-primary hover:text-gray-900 transition-colors duration-300"
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
        ))}
      </div>
    </TooltipProvider>
  );
};

export default StickyInfo;
