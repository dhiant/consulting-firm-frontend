"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import QuotationModal from "./quotation-modal-adv";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg text-gray-900 border-b border-gray-200/50"
            : "bg-transparent text-white",
          showNav ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center max-w-screen-xl">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity duration-300"
          >
            <span
              className={cn(
                "font-bold tracking-wide",
                scrolled ? "gradient-text" : "text-white"
              )}
            >
              AIMTERIOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8 text-lg font-medium">
              {navigationLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "relative transition-all duration-300 hover:scale-105",
                      scrolled
                        ? "text-gray-700 hover:text-primary"
                        : "text-white hover:text-gray-200",
                      isActivePath(href) && "font-semibold",
                      isActivePath(href) && scrolled && "text-primary",
                      isActivePath(href) && !scrolled && "text-white"
                    )}
                  >
                    {label}
                    {isActivePath(href) && (
                      <div
                        className={cn(
                          "absolute -bottom-1 left-0 w-full h-0.5 rounded-full",
                          scrolled ? "bg-primary" : "bg-white"
                        )}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="ml-4">
              <QuotationModal />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={sidebarOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!sidebarOpen}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gray-50">
          <span className="text-xl font-bold gradient-text">AIMTERIOR</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-6">
          <ul className="space-y-2">
            {navigationLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={handleLinkClick}
                  className={cn(
                    "flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:bg-gray-100 hover:translate-x-2",
                    isActivePath(href)
                      ? "bg-primary/10 text-primary border-l-4 border-primary"
                      : "text-gray-700 hover:text-primary"
                  )}
                >
                  {label}
                  {isActivePath(href) && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <QuotationModal />
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600">
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-900">Call us:</p>
                <a
                  href="tel:+97143522142"
                  className="text-primary hover:underline"
                >
                  +971 4 352 2142
                </a>
              </div>
              <div>
                <p className="font-medium text-gray-900">Email:</p>
                <a
                  href="mailto:info@aimterior.com"
                  className="text-primary hover:underline"
                >
                  info@aimterior.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
