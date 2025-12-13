"use client";

import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState, useCallback } from "react";

interface ClientFeedback {
  id?: number;
  project: string;
  quote: string;
  author: string;
  rating: number;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default function ClientFeedback() {
  const [api, setApi] = useState<CarouselApi>();
  const [feedbacks, setFeedbacks] = useState<ClientFeedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/public/reviews")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        // Fallback to static data if API fails
        setFeedbacks([
          {
            project: "Interior Project",
            quote:
              "It finally feels like our home. We had a rough idea of what we wanted, but we didn't know how to put it all together. The team listened to every little detail and somehow turned our scattered thoughts into a space that feels warm, comfortable, and very 'us.' We love coming home now — it just feels right.",
            author: "Anna & Leo",
            rating: 5,
          },
          {
            project: "Racking + Mezzanine Combination Project",
            quote:
              "Our storage capacity doubled, and our team finally has a proper workspace. Before this project, everything felt cramped. Now we have a mezzanine office overlooking the warehouse and a racking system that actually makes sense. The installation team listened to our concerns and worked around our operating hours, which we really appreciated. It's been a game changer for efficiency.",
            author: "S. Tan, Logistics Coordinator",
            rating: 5,
          },
          {
            project: "Villa Extension",
            quote:
              "They were upfront and honest from day one. We appreciated that they didn't just say 'yes' to everything we wanted. They explained what the municipality would approve and what might cause delays. Their suggestions improved our layout, and the extension ended up looking cleaner and more functional because of their input.",
            author: "S. Deeb",
            rating: 5,
          },
          {
            project: "As-Built Compliance Made Easy",
            quote:
              "Professional, reliable, and knowledgeable. The previous contractor had done extensions without permits. The team helped us create accurate as-built plans and coordinated the approvals with the authorities. They were knowledgeable about all the requirements and made the process stress-free for us.",
            author: "R. Mansoor",
            rating: 5,
          },
          {
            project: "Smooth Renovation",
            quote:
              "Stress-free and professional. Renovating can be overwhelming, but the team made it easy. They coordinated all the work, kept us updated, and made sure every detail was perfect. The result is beautiful, practical, and really suits our lifestyle.",
            author: "S. Rahman",
            rating: 5,
          },
        ]);
        setLoading(false);
      });
  }, []);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    // Track current slide if needed in the future
    api.selectedScrollSnap();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  // Auto-scroll functionality with slow movement
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // 5 seconds for slow movement

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-6">
            <div className="w-2 h-2 bg-brand-50 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-brand-50 uppercase tracking-wider">
              Client Feedback
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-brand-50 to-brand-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real feedback from real clients who trusted us with their projects
          </p>
        </div>

        {/* Feedback Carousel */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading reviews...</p>
          </div>
        ) : feedbacks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No reviews available at the moment.</p>
          </div>
        ) : (
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {feedbacks.map((feedback, index) => (
                  <CarouselItem
                    key={feedback.id || index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full flex">
                      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-brand-50/50 group flex flex-col w-full">
                        {/* Project Type */}
                        <div className="mb-4">
                          <span className="text-xs font-semibold text-brand-50 uppercase tracking-wider">
                            {feedback.project}
                          </span>
                        </div>

                        {/* Star Rating */}
                        <div className="mb-4">
                          <StarRating rating={feedback.rating} />
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-700 mb-6 leading-relaxed flex-grow">
                          &ldquo;{feedback.quote}&rdquo;
                        </blockquote>

                        {/* Author */}
                        <div className="pt-4 border-t border-gray-100 mt-auto">
                          <p className="text-sm font-semibold text-gray-900">
                            — {feedback.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:-left-12 bg-white border-gray-300 hover:bg-gray-50 shadow-lg" />
              <CarouselNext className="right-0 md:-right-12 bg-white border-gray-300 hover:bg-gray-50 shadow-lg" />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
