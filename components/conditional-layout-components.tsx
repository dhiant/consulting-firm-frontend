"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";
import StickyInfo from "./sticky-info";

export function ConditionalHeader() {
  const pathname = usePathname();

  // Don't show header on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return <Header />;
}

export function ConditionalFooter() {
  const pathname = usePathname();

  // Don't show footer on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return <Footer />;
}

export function ConditionalStickyInfo() {
  const pathname = usePathname();

  // Don't show sticky info on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return <StickyInfo className="fixed bottom-1/2 translate-y-1/2  right-0" />;
}
