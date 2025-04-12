"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import SlideUpAnimation from "@/components/animations/slide-up-variants";

const slides = [
  {
    image: "/images/home.jpg",
    heading: "Transform Your Space",
    subheading:
      "Innovative designs that reflect your style and enhance your life.",
    buttonLink: "/portfolio",
    buttonText: "Explore Our Work",
  },
  {
    image: "/images/services.jpg",
    heading: "Modern Interior Magic",
    subheading: "Experience elegance and comfort like never before.",
    buttonLink: "/services",
    buttonText: "Our Services",
  },
  {
    image: "/images/about.jpg",
    heading: "Creative Living Spaces",
    subheading: "Bringing your dream home to life with artistry and precision.",
    buttonLink: "/contact",
    buttonText: "Get in Touch",
  },
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
    <section className="relative h-[100vh] bg-gray-800 text-white flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <Image
          src={image}
          alt="Slide background"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            fade ? "opacity-0" : "opacity-50"
          }`}
          priority
        />
      </div>

      {/* Overlay Content */}
      <SlideUpAnimation className="relative container mx-auto px-4 h-full flex flex-col justify-center z-10 transition-opacity duration-1000 ease-in-out max-w-screen-xl">
        <h1
          className={`text-5xl font-bold mb-4 transition-all duration-700 ${
            fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {heading}
        </h1>
        <p
          className={`text-xl mb-8 transition-all duration-700 delay-100 ${
            fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {subheading}
        </p>
        <div
          className={`transition-opacity duration-700 delay-200 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="p-6 border border-white"
          >
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </SlideUpAnimation>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
