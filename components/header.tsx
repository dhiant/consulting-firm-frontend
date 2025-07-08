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

import { Menu, X } from "lucide-react"; // Optional: icon library like lucide
import QuotationModal from "./quotation-modal-adv";

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
          "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-white shadow-xl text-primary"
            : "bg-transparent text-white",
          showNav ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-screen-xl">
          <Link href="/" className="text-2xl font-bold">
            COMPANY LOGO
          </Link>

          {/* Desktop nav */}
          <ul className="lg:flex space-x-10 text-lg font-normal hidden">
            <li>
              <Link href="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-black">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-black">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
            <li>
              <QuotationModal />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </button>
        </nav>
      </header>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setSidebarOpen(false)} className="text-2xl">
            <X />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-lg text-black">
          <li>
            <Link href="/" onClick={() => setSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setSidebarOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setSidebarOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={() => setSidebarOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blogs" onClick={() => setSidebarOpen(false)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setSidebarOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <QuotationModal />
          </li>
        </ul>
      </aside>
    </>
  );
}
