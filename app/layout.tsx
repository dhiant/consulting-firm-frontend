import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StickyInfo from "@/components/sticky-info";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "AIMTERIOR - Premier Construction & Design Consultancy in Dubai",
    template: "%s | AIMTERIOR",
  },
  description:
    "Leading Dubai-based construction consultancy specializing in authority approvals, interior design, and design-build projects. Expert solutions for residential, commercial, and hospitality developments across Dubai and UAE.",
  keywords: [
    "construction consultancy Dubai",
    "interior design Dubai",
    "authority approvals UAE",
    "design build Dubai",
    "Dubai municipality approvals",
    "commercial fit out Dubai",
    "residential design Dubai",
    "hospitality design UAE",
    "construction permits Dubai",
    "architectural consultancy",
  ],
  authors: [{ name: "AIMTERIOR" }],
  creator: "AIMTERIOR",
  publisher: "AIMTERIOR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://aimterior.com",
    title: "AIMTERIOR - Premier Construction & Design Consultancy in Dubai",
    description:
      "Transform your vision into reality with Dubai's trusted construction and design experts. Comprehensive solutions from approvals to completion.",
    siteName: "AIMTERIOR",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AIMTERIOR - Construction & Design Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIMTERIOR - Premier Construction & Design Consultancy in Dubai",
    description:
      "Transform your vision into reality with Dubai's trusted construction and design experts.",
    images: ["/images/twitter-image.jpg"],
    creator: "@aimterior",
  },
  alternates: {
    canonical: "https://aimterior.com",
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.2048;55.2708",
    ICBM: "25.2048, 55.2708",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AE" className={montserrat.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AIMTERIOR",
              url: "https://aimterior.com",
              logo: "https://aimterior.com/logo.png",
              description:
                "Leading Dubai-based construction consultancy specializing in authority approvals, interior design, and design-build projects.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Opal Tower, Business Bay",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-4-3522142",
                contactType: "customer service",
                areaServed: "AE",
                availableLanguage: ["English", "Arabic"],
              },
              sameAs: [
                "https://www.linkedin.com/company/aimterior",
                "https://www.instagram.com/aimterior",
                "https://www.facebook.com/aimterior",
              ],
              serviceArea: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              services: [
                "Authority Approvals",
                "Interior Design",
                "Design-Build Projects",
                "Construction Consultancy",
                "Fit-out Services",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.className} antialiased`}
        suppressHydrationWarning
      >
        <noscript>
          <div className="fixed top-0 left-0 w-full bg-yellow-500 text-black p-4 text-center z-50">
            This website requires JavaScript to function properly. Please enable
            JavaScript in your browser.
          </div>
        </noscript>

        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-white px-4 py-2 rounded-md z-50 transition-all duration-300"
        >
          Skip to main content
        </a>

        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        <Header />

        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "hsl(var(--background))",
              color: "hsl(var(--foreground))",
              border: "1px solid hsl(var(--border))",
            },
          }}
          closeButton
          richColors
        />

        <StickyInfo className="fixed bottom-1/2 translate-y-1/2 right-0 z-40" />

        <Footer />

        {/* Performance monitoring and accessibility */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(error) {
                    console.log('ServiceWorker registration failed: ', error);
                  });
                });
              }

              // Accessibility improvements
              document.addEventListener('DOMContentLoaded', function() {
                // Add focus visible polyfill for better keyboard navigation
                if (!CSS.supports('selector(:focus-visible)')) {
                  const script = document.createElement('script');
                  script.src = 'https://unpkg.com/focus-visible@5.2.0/dist/focus-visible.js';
                  document.head.appendChild(script);
                }

                // High contrast mode detection
                const mediaQuery = window.matchMedia('(prefers-contrast: high)');
                if (mediaQuery.matches) {
                  document.documentElement.classList.add('high-contrast');
                }

                // Reduced motion detection
                const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
                if (reducedMotionQuery.matches) {
                  document.documentElement.classList.add('reduce-motion');
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
