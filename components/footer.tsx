"use client";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import CTAButton from "./cta-buttton";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              <Image
                src="/images/company_logo_white.png"
                alt="logo"
                width={100}
                height={100}
              />
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connect with us for a personalized quote and service consultation.
              We respond quickly and attentively to your request.
            </p>
            <div className="flex justify-start">
              <CTAButton />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">Authority Approval</li>
              <li className="flex items-center">Planning and Design</li>
              <li className="flex items-center">Fit-out-Build</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wide">
              DUBAI OFFICE
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center">
                <span className="mr-2">
                  <Phone />
                </span>
                <a
                  href="tel:048878015"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  048878015
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  <FaWhatsapp className="text-2xl" />
                </span>
                <a
                  href="tel:+971501204990"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  {" "}
                  +971 50 120 4990
                </a>
              </li>

              <li className="flex items-center">
                <span className="mr-2">
                  <Mail />
                </span>
                <div className="flex flex-row ">
                  <a
                    href="mailto:info@aimterior.com"
                    className="hover:text-white hover:underline transition-colors duration-300 mr-2"
                  >
                    info@aimterior.com
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex flex-row">
                  <span className="mr-2 ">
                    <MapPin />
                  </span>
                  SM1-02-713
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Construction Site Co. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
