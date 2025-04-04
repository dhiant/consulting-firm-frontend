"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import QuotationModal from "./quotation-modal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled
          ? "backdrop-blur-lg shadow-sm text-gray-800"
          : "bg-transparent text-white",
        showNav ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-screen-xl">
        <Link href="/" className="text-2xl font-bold">
          COMPANY LOGO
        </Link>
        <div className="flex gap-10">
          <ul className="lg:flex space-x-10 text-lg font-normal hidden">
            <li>
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
          <QuotationModal />
        </div>
      </nav>
    </header>
  );
}
