import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Lexend } from "@next/font/google";
import StickyInfo from "@/components/sticky-info";

// const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Consultancy",
  description: "Transforming spaces into beautiful, functional environments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <StickyInfo className="fixed bottom-1/2 translate-y-1/2  right-0" />
        <Footer />
      </body>
    </html>
  );
}
