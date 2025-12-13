import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// import { Inter } from "next/font/google";
import "./globals.css";
import {
  ConditionalHeader,
  ConditionalFooter,
  ConditionalStickyInfo,
} from "@/components/conditional-layout-components";
// import { Lexend } from "@next/font/google";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });
// const lexend = Lexend({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIMTERIOR",
  description: "Transforming spaces into beautiful, functional environments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ConditionalHeader />
        <main className="min-h-screen">{children}</main>
        <Toaster />
        <ConditionalStickyInfo />
        <ConditionalFooter />
      </body>
    </html>
  );
}
