// footer

"use client";
import {
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  PhoneCall,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Reusable Logo Component
const AimteriorLogo = ({ className = "", size = "2xl" }) => (
  <div className={`flex items-center space-x-3 ${className}`}>
    <div className="relative">
      {/* Logo Symbol - Enhanced */}
      <div className="w-10 h-10 relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M5 35L20 5L35 35H5Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M10 28L20 12L30 28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="20" cy="10" r="2.5" fill="currentColor" />
          <path
            d="M15 22L20 16L25 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
    <div className="flex flex-col">
      <span className={`text-${size} font-bold tracking-tight text-white`}>
        AIMTERIOR
      </span>
      <span className="text-xs text-gray-300 tracking-wider uppercase">
        Architecture & Design
      </span>
    </div>
  </div>
);

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 max-w-screen-xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-1 space-y-6">
            <AimteriorLogo />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Transforming spaces with innovative architectural solutions and
              premium interior design. Your vision, our expertise.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={label}
                >
                  <Icon size={18} className="text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>

            <button
              onClick={() => router.push("/contact")}
              className="group bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-600 hover:to-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 hover:shadow-lg hover:scale-105"
            >
              <span>Get In Touch</span>
              <MoveRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-slate-400 to-transparent mt-2" />
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/blogs", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white font-medium transition-all duration-300 group flex items-center space-x-2"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {label}
                    </span>
                    <MoveRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Enhanced */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-slate-400 to-transparent mt-2" />
            </h4>
            <ul className="space-y-4 text-gray-300">
              {[
                "Authority Approval",
                "Planning & Design",
                "Fit-out & Build",
                "Interior Design",
                "Project Management",
                "Consultation Services",
              ].map((service) => (
                <li key={service} className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-slate-600 group-hover:bg-slate-400 rounded-full transition-colors duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Enhanced */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white relative">
              Dubai Office
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-slate-400 to-transparent mt-2" />
            </h4>
            <ul className="space-y-5">
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                  <Phone size={16} className="text-gray-300" />
                </div>
                <a
                  href="tel:043522142"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  +971 4 352 2142
                </a>
              </li>

              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                  <PhoneCall size={16} className="text-gray-300" />
                </div>
                <span className="text-gray-300 font-medium">
                  +971 58 896 8000
                </span>
              </li>

              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                  <Mail size={16} className="text-gray-300" />
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="mailto:info@aimterior.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                  >
                    info@aimterior.com
                  </a>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Copy
                      size={14}
                      className="text-gray-400 hover:text-gray-300"
                    />
                  </button>
                </div>
              </li>

              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                  <MapPin size={16} className="text-gray-300" />
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gray-300 text-sm leading-relaxed max-w-48">
                    Opal Tower, Business Bay, Dubai, UAE
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink
                      size={14}
                      className="text-gray-400 hover:text-gray-300 mt-1"
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-medium">
              © {new Date().getFullYear()} AIMTERIOR. All rights reserved.
            </p>
            <div className="flex space-x-8">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/cookies", label: "Cookie Policy" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
