"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/images/hero-home1.png",
    heading: (
      <p>
        Transforming Visions
        <br />
        <span className="block bg-gradient-to-r from-brand-50 via-brand-200 to-brand-400 bg-clip-text text-transparent">
          Into Reality
        </span>
      </p>
    ),
    subheading:
      "Where architectural excellence meets interior innovation. AIMTERIOR brings your dreams to life with precision, creativity, and uncompromising quality.",
    buttonLink: "/services",
    buttonText: "DISCOVER OUR EXPERTISE",
  },
  {
    image: "/images/hero-home2.png",
    heading: (
      <p>
        Authority Approvals
        <br />
        <span className="block bg-gradient-to-r from-brand-50 via-brand-200 to-brand-400 bg-clip-text text-transparent">
          Made Simple
        </span>
      </p>
    ),
    subheading:
      "Navigate Dubai's regulatory landscape with confidence. From permits to final approvals, we handle the complexities so you can focus on your vision.",
    buttonLink: "/services",
    buttonText: "VIEW OUR SERVICES",
  },
  // {
  //   image: "/images/about.jpg",
  //   heading: "Design Excellence, Built to Last",
  //   subheading:
  //     "Every project tells a story. Let us craft yours with innovative design solutions that blend functionality with breathtaking aesthetics.",
  //   buttonLink: "/projects",
  //   buttonText: "SEE OUR PORTFOLIO",
  // },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 500);
    }, 5000);
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    if (index !== current) {
      if (intervalRef.current) clearInterval(intervalRef.current); // Clear current interval
      setFade(true);
      setTimeout(() => {
        setCurrent(index);
        setFade(false);
        resetInterval(); // Restart interval after manual click
      }, 500);
    }
  };

  const { image, heading, subheading, buttonLink, buttonText } =
    slides[current];

  return (
    <section className="relative h-screen text-white overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Slide background"
          fill
          className={`object-cover transition-all duration-1000 ease-in-out`}
          priority
        />
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            {/* Brand Badge */}
            <div
              className={`mb-8 transition-all duration-700 ease-out ${
                fade ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
              }`}
            >
              <div className="inline-flex items-center space-x-3 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 shadow-2xl">
                <div className="w-3 h-3 bg-gradient-to-r from-brand-50 to-brand-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold tracking-widest uppercase text-white/90">
                  AIMTERIOR
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight transition-all duration-700 delay-100 ease-out ${
                fade ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
              }`}
            >
              {/* <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {heading}
              </span> */}
              {heading}
            </h1>

            {/* Subheading */}
            <p
              className={`text-lg md:text-xl mb-12 max-w-3xl leading-relaxed text-gray-200 font-light transition-all duration-700 delay-200 ease-out ${
                fade ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
              }`}
            >
              {subheading}
            </p>

            {/* Call to Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 transition-all duration-700 delay-300 ease-out ${
                fade ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="group bg-white text-slate-900 hover:bg-gray-100 px-6 py-4 sm:px-10 sm:py-6 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl transform-gpu border-0"
              >
                <Link href={buttonLink} className="flex items-center space-x-2">
                  <span>{buttonText}</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group border-2 border-white/60 text-white hover:bg-white hover:text-slate-900 px-6 py-4 sm:px-10 sm:py-6 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>GET A QUOTE</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`relative transition-all duration-300 ${
                current === index
                  ? "w-8 h-3 bg-white rounded-full"
                  : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/70"
              }`}
            >
              {current === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-brand-400 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 right-8 z-20 transition-all duration-700 delay-500 ${
          fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-medium tracking-wide uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
