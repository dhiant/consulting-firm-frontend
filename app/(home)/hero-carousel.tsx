"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import SlideUpAnimation from "@/components/animations/slide-up-variants";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const slides = [
  {
    image: "/images/home.jpg",
    heading: "Your Vision, Our Solution",
    subheading: "AIM to transform ideas into iconic spaces.",
    buttonLink: "/services",
    buttonText: "EXPLORE OUR SERVICES",
  },
  {
    image: "/images/services.jpg",
    heading: "Designing Spaces, Engineering Solutions",
    subheading: "AIM to transform spaces into statements.",
    buttonLink: "/projects",
    buttonText: "EXPLORE OUR WORK",
  },
  {
    image: "/images/about.jpg",
    heading: "We Express in Design, We Execute in Structure",
    subheading: "AIM to sculpt ideas into structures, design into identity.",
    buttonLink: "/contact",
    buttonText: "CHALLENGE US",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (!isPlaying) return;
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
    if (isPlaying) startInterval();
  };

  useEffect(() => {
    setIsLoaded(true);
    if (isPlaying) startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handleDotClick = (index: number) => {
    if (index !== current) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setFade(true);
      setTimeout(() => {
        setCurrent(index);
        setFade(false);
        resetInterval();
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(false);
      resetInterval();
    }, 500);
  };

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(false);
      resetInterval();
    }, 500);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const { image, heading, subheading, buttonLink, buttonText } =
    slides[current];

  return (
    <section className="relative h-screen min-h-[600px] bg-black text-white flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={`${heading} - AIMTERIOR Design`}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            fade ? "opacity-0" : "opacity-60"
          }`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass hover-lift transition-all duration-300 hover:bg-white/20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass hover-lift transition-all duration-300 hover:bg-white/20 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Main Content */}
      <SlideUpAnimation className="relative container mx-auto px-4 lg:px-6 h-full flex flex-col justify-center z-10 max-w-screen-xl">
        <div className="max-w-4xl">
          <h1
            className={`text-display-lg md:text-display-xl mb-6 transition-all duration-700 ${
              fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            } ${isLoaded ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            {heading}
          </h1>

          <p
            className={`text-body-lg md:text-heading-md mb-8 text-gray-200 max-w-2xl transition-all duration-700 delay-100 ${
              fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            } ${isLoaded ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            {subheading}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-700 delay-200 ${
              fade ? "opacity-0" : "opacity-100"
            } ${isLoaded ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover-lift backdrop-blur-sm"
            >
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="px-8 py-4 text-lg text-white hover:bg-white/10 transition-all duration-300"
            >
              <Link href="/about">LEARN MORE</Link>
            </Button>
          </div>
        </div>
      </SlideUpAnimation>

      {/* Controls Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        {/* Dot Indicators */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                current === index
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <div className="w-px h-6 bg-white/30 mx-2" />
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full glass hover:bg-white/20 transition-all duration-300 group"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          )}
        </button>

        {/* Progress Bar */}
        <div className="w-px h-6 bg-white/30 mx-2" />
        <div className="flex items-center gap-2 text-sm text-white/70">
          <span>{String(current + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Progress Indicator */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % 5000) / 5000) * 100}%`,
              animation: "progress 5s linear infinite",
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
