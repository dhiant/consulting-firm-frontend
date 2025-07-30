// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
// import QuotationModal from "./quotation-modal";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [showNav, setShowNav] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       setScrolled(currentScrollY > 50);

//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         setShowNav(false);
//       } else {
//         setShowNav(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
//         scrolled
//           ? "bg-white shadow-xl text-primary"
//           : "bg-transparent text-white",
//         showNav ? "translate-y-0" : "-translate-y-full"
//       )}
//     >
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-screen-xl">
//         <Link href="/" className="text-2xl font-bold">
//           COMPANY LOGO
//         </Link>
//         <div className="flex gap-10">
//           <ul className="lg:flex space-x-10 text-lg font-normal hidden">
//             <li>
//               <Link href="/" className="hover:text-black">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:text-black">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" className="hover:text-black">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/projects" className="hover:text-black">
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link href="/blogs" className="hover:text-black">
//                 Blogs
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:text-black">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <QuotationModal />
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { Menu, X } from "lucide-react";
import QuotationModal from "./quotation-modal-adv";

// Logo Component
const AimteriorLogo = ({ className = "", textColor = "currentColor" }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <div className="relative">
      {/* Logo Symbol - Stylized Mountain/Architecture */}
      <div className="w-8 h-8 relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-current"
        >
          <path
            d="M4 28L16 4L28 28H4Z"
            stroke={textColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M8 22L16 10L24 22"
            stroke={textColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="16" cy="8" r="2" fill={textColor} />
        </svg>
      </div>
    </div>
    <span
      className="text-2xl font-bold tracking-tight"
      style={{ color: textColor }}
    >
      AIMTERIOR
    </span>
  </div>
);

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
      {/* Overlay */}
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
            <AimteriorLogo textColor={scrolled ? "#1e293b" : "#ffffff"} />
          </Link>

          {/* Desktop nav */}
          <ul className="lg:flex space-x-8 text-base font-medium hidden">
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
              <QuotationModal />
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
          <AimteriorLogo textColor="#1e293b" />
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
              <QuotationModal />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
