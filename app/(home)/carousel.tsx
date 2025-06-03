"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react"; // Import useState, useEffect, useCallback
import type { EmblaCarouselType } from "embla-carousel";
import { useRouter } from "next/navigation";

// Define the sectors data for the carousel items
const sectors = [
  { title: "Workspaces", image: "/images/project1.jpg" },
  { title: "Education", image: "/images/project2.jpg" },
  { title: "Healthcare", image: "/images/project3.jpg" },
  { title: "Retail", image: "/images/project4.jpg" },
  { title: "Hospitality", image: "/images/project5.jpg" },
  { title: "Hospitality", image: "/images/project5.jpg" },
  { title: "Hospitality", image: "/images/project5.jpg" },
];

/**
 * CarouselSection Component
 *
 * This component displays a section with a title, description,
 * and a horizontally scrolling image carousel. It now includes
 * pagination dots below the carousel to indicate the current slide
 * and allow direct navigation.
 */
const CarouselSection = () => {
  const router = useRouter();

  // State to hold the carousel API instance
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  // State to track the current slide index for pagination dots
  const [current, setCurrent] = useState(0);
  // State to hold the total number of slides
  const [count, setCount] = useState(0);
  // State to track if the carousel can scroll to the previous slide
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  // State to track if the carousel can scroll to the next slide
  const [canScrollNext, setCanScrollNext] = useState(false);

  /**
   * handleDotClick
   *
   * Function to handle clicks on the pagination dots.
   * It scrolls the carousel to the corresponding slide.
   * @param {number} index - The index of the dot clicked (and the slide to navigate to).
   */
  const handleDotClick = (index) => {
    if (api) {
      api?.scrollTo(index); // Scroll to the selected slide
    }
  };

  /**
   * onSelect
   *
   * Callback function for the carousel's `onSelect` event.
   * Updates the `current` state with the newly selected slide index.
   * Also updates the `canScrollPrev` and `canScrollNext` states.
   * Uses `useCallback` for memoization to prevent unnecessary re-renders.
   */
  const onSelect = useCallback((api) => {
    setCurrent(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  /**
   * useEffect hook to initialize carousel state and attach event listener.
   *
   * - When the `api` instance is available, it sets the total slide count.
   * - It attaches the `onSelect` listener to update the `current` slide index.
   * - Cleans up the event listener when the component unmounts or `api` changes.
   */
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length); // Get total number of slides
    setCurrent(api.selectedScrollSnap()); // Set initial current slide
    setCanScrollPrev(api.canScrollPrev()); // Set initial canScrollPrev state
    setCanScrollNext(api.canScrollNext()); // Set initial canScrollNext state

    api.on("select", onSelect); // Attach the select event listener
    api.on("reInit", onSelect); // Re-initialize on resize or content change

    // Cleanup function to remove the event listener
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]); // Re-run effect if `api` or `onSelect` changes

  // Handler for the "All Projects" button click
  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <section className="mx-5 justify-between mb-16">
      <div className="flex flex-col lg:flex-row md:flex-col lg:gap-20 mx-auto max-w-screen-xl px-4">
        <div className="mr-8">
          <h2 className="text-3xl font-bold mb-5 uppercase text-primary">
            Crafting Exceptional Spaces
          </h2>
          <p className="">
            Explore our work across different fields and see{" "}
            <span className="block"> what we’ve created.</span>{" "}
          </p>

          {/* Custom Carousel Navigation Buttons */}
          <div className="flex items-center my-4 border border-gray-300 rounded-full overflow-hidden w-fit">
            <button
              onClick={() => api?.scrollPrev()} // Scroll to previous slide
              disabled={!canScrollPrev} // Disable if cannot scroll previous
              className={`p-3 text-gray-600 hover:bg-gray-100 transition-colors duration-200
                ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="w-px h-6 bg-gray-300"></div> {/* Divider line */}
            <button
              onClick={() => api?.scrollNext()} // Scroll to next slide
              disabled={!canScrollNext} // Disable if cannot scroll next
              className={`p-3 text-gray-600 hover:bg-gray-100 transition-colors duration-200
                ${!canScrollNext ? "opacity-50 cursor-not-allowed" : ""}`}
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <p
            onClick={handleClick}
            className="underline mb-12 cursor-pointer hover:text-blue-600 transition-colors duration-200"
          >
            All Projects
          </p>
        </div>

        <div className="lg:w-[55%]">
          <Carousel
            opts={{
              align: "start",
            }}
            setApi={setApi} // Set the carousel API instance
            className="w-full"
          >
            <CarouselContent className="space-x-2">
              {sectors.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/3"
                >
                  <div className="w-full h-full overflow-hidden group">
                    <Image
                      src={item.image}
                      alt={item.title} // Use item.title for alt text for better accessibility
                      width={500}
                      height={500}
                      className="w-full h-[200px] object-cover transition-transform duration-700 ease-in-out hover:scale-[1.09] rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex lg:hidden justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300
                  ${
                    index === current
                      ? "bg-blue-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
