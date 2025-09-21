import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import { Lexend } from "@next/font/google";
import StickyInfo from "@/components/sticky-info";
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster />
        <StickyInfo className="fixed bottom-1/2 translate-y-1/2  right-0" />
        <Footer />
      </body>
    </html>
  );
}
