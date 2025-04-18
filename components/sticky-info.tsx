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
      className: "text-[#0A66C2] hover:text-[#004182]", // LinkedIn blue to dark blue
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/constructionsiteco",
      label: "Instagram",
      tooltip: "Check our Instagram",
      external: true,
      className: "text-[#E1306C] hover:text-[#C13584]", // Instagram pink to purple-pink
    },
    {
      Icon: CiMail,
      href: "mailto:info@constructionsite.com",
      label: "Email",
      tooltip: "Email us",
      external: true,
      className: "text-gray-600 hover:text-red-500", // Neutral email tone with hover attention
    },
    {
      Icon: FaWhatsapp,
      href: "https://wa.me/1234567890",
      label: "WhatsApp",
      tooltip: "Chat on WhatsApp",
      external: true,
      className: "text-[#25D366] hover:text-[#128C7E]", // WhatsApp green to dark green
    },
    {
      Icon: IoNewspaperOutline,
      href: "https://brochurelink.com",
      label: "Brochure",
      tooltip: "Brochure",
      external: true,
      className: "text-gray-700 hover:text-blue-600", // Neutral to blue for documents
    },
  ];

  return (
    <TooltipProvider>
      <div
        className={`space-y-5 ${className} p-4 flex-col items-center hidden md:flex`}
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
