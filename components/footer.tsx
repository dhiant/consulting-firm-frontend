"use client";
import {
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  PhoneCall,
  ArrowUp,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Authority Approval",
  "Planning and Design",
  "Fit-out and Build",
];

const contactInfo = {
  phones: [
    { number: "043522142", type: "Office" },
    { number: "058 896 8000", type: "Mobile" },
  ],
  email: "info@aimterior.com",
  addresses: [
    {
      type: "Project Office",
      location: "Opal Tower, Business Bay, Dubai",
      mapLink: "https://maps.google.com",
    },
    {
      type: "Head Office",
      location: "Dubai International Financial Centre, Dubai",
      mapLink: "https://maps.google.com",
    },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    // Could add toast notification here
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-20 max-w-screen-xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-heading-md font-bold tracking-tight mb-4">
                AIMTERIOR
              </h3>
              <p className="text-body-md text-gray-300 leading-relaxed mb-6">
                Transforming visions into exceptional realities. Connect with us
                for personalized consultation and expert solutions tailored to
                your needs.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 bg-gray-700 hover:bg-primary rounded-lg transition-all duration-300 hover-lift group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => router.push("/contact")}
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg font-medium transition-all duration-300 hover-lift shadow-md hover:shadow-lg group"
            >
              Contact Us
              <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-heading-md font-semibold uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white text-body-md font-medium transition-all duration-300 ease-in-out hover:translate-x-2 inline-block group"
                  >
                    <span>{label}</span>
                    <div className="w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-heading-md font-semibold uppercase tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-body-md">{service}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-300 group"
            >
              View All Services
              <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-heading-md font-semibold uppercase tracking-wide">
              Get In Touch
            </h4>

            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="space-y-3">
                {contactInfo.phones.map(({ number, type }) => (
                  <div key={number} className="flex items-center group">
                    {type === "Mobile" ? (
                      <PhoneCall className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    ) : (
                      <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    )}
                    <div>
                      <a
                        href={`tel:${number.replace(/\s+/g, "")}`}
                        className="text-gray-300 hover:text-white transition-colors duration-300 block"
                      >
                        {number}
                      </a>
                      <span className="text-xs text-gray-500">{type}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                  >
                    {contactInfo.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="text-xs text-gray-500 hover:text-primary transition-colors duration-300 flex items-center mt-1"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy email
                  </button>
                </div>
              </div>

              {/* Addresses */}
              <div className="space-y-4">
                {contactInfo.addresses.map(
                  ({ type, location, mapLink }, index) => (
                    <div key={index} className="flex items-start group">
                      <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-gray-300">
                          <div className="font-medium text-sm text-gray-400 mb-1">
                            {type}:
                          </div>
                          <span className="text-body-sm">{location}</span>
                        </div>
                        <a
                          href={mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-500 hover:text-primary transition-colors duration-300 flex items-center mt-1"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View on map
                        </a>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
              <p>
                © {new Date().getFullYear()} AIMTERIOR. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-primary rounded-lg text-sm font-medium transition-all duration-300 hover-lift group"
            >
              Back to Top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
