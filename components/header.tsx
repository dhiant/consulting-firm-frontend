"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "bg-transparent fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled ? "text-white bg-primary shadow-sm" : "text-white"
      )}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-screen-xl">
        <Link href="/" className="text-2xl font-bold">
          COMPANY LOGO
        </Link>
        <ul className="lg:flex space-x-6 text-lg font-normal hidden">
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
          {/* <li>
            <Link href="/portfolio" className="hover:text-gray-600">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-600">
              Blog
            </Link>
          </li> */}
          <li>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" size="sm">
            <Link href="/contact">
              <Calendar />
              Book Consultation
            </Link>
          </Button>
          <Menu className="md:hidden" />
        </div>
      </nav>
    </header>
  );
}
