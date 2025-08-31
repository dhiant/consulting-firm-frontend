"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import QuotationModal from "./quotation-modal";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out backdrop-blur-sm",
          scrolled
            ? "bg-white/95 shadow-xl text-slate-800 border-b border-gray-100"
            : "bg-transparent text-white",
          showNav ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-screen-xl">
          <Link
            href="/"
            className="transition-all duration-300 hover:scale-105"
          >
            <Image
              alt="..."
              src={
                scrolled
                  ? "/images/company_logo.png"
                  : "/images/company_logo_white.png"
              }
              height={50}
              width={80}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="lg:flex space-x-8 text-base font-medium hidden items-center">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/blogs", label: "Blogs" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={cn(
                    "relative px-3 py-2 rounded-lg transition-all duration-300",
                    "hover:scale-105 hover:shadow-lg",
                    scrolled
                      ? "hover:bg-slate-100 hover:text-slate-900"
                      : "hover:bg-white/10 hover:text-white"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <QuotationModal scrolled={scrolled} />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-all duration-300",
              "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2",
              scrolled
                ? "hover:bg-slate-100 focus:ring-slate-500"
                : "hover:bg-white/10 focus:ring-white"
            )}
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Enhanced Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-200 bg-gradient-to-r from-slate-50 to-gray-50">
          <Image
            alt="..."
            src={"/images/company_logo.png"}
            height={50}
            width={80}
          />

          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-6">
          <ul className="space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/blogs", label: "Blogs" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setSidebarOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200 hover:translate-x-1"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-200">
              <QuotationModal scrolled={scrolled} />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
