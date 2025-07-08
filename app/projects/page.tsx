"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HoverCard from "./hover";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Apartment",
    category: "Residential",
    description:
      "A sleek, minimalist design for a city apartment that maximizes space and light.",
    image: "/images/project1.jpg",
    testimonial:
      "The team transformed my small apartment into a spacious, functional haven. I love coming home now!",
  },
  {
    id: 2,
    title: "Rustic Mountain Retreat",
    category: "Landscaping",
    description:
      "A cozy mountain home that combines rustic charm with modern comforts.",
    image: "/images/project6.jpg",

    testimonial:
      "Our mountain home is the perfect getaway. It's warm, inviting, and beautifully integrated with the natural surroundings.",
  },
  {
    id: 3,
    title: "Eco-Friendly Office Space",
    category: "Retail",
    description:
      "A sustainable office design that promotes productivity and employee well-being.",
    image: "/images/project2.jpg",
    testimonial:
      "Our new office has boosted team morale and impressed our clients. It's both beautiful and environmentally responsible.",
  },
  {
    title: "Luxury Beachfront Villa",
    category: "Residential",
    description:
      "An opulent beachfront property that blends indoor and outdoor living seamlessly.",
    image: "/images/project3.jpg",
    testimonial:
      "The attention to detail in our villa is extraordinary. It's the perfect vacation home we've always dreamed of.",
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Hospital",
    description:
      "A chic and inviting lobby design for a boutique hotel, setting the tone for a luxurious stay.",
    image: "/images/project4.jpg",

    testimonial:
      "The lobby design has significantly improved our guests' first impressions. It's elegant yet welcoming.",
  },
  {
    title: "Urban Loft Renovation",
    category: "Restaurant",
    description:
      "A complete overhaul of an industrial loft space into a modern, multi-functional home.",
    image: "/images/project5.jpg",

    testimonial:
      "I never thought my old loft could look this amazing. It's like living in a design magazine!",
  },
  // {
  //   title: "Rustic Mountain Retreat",
  //   category: "Warehouse",
  //   description:
  //     "A cozy mountain home that combines rustic charm with modern comforts.",
  //   image: "/images/project6.jpg",

  //   testimonial:
  //     "Our mountain home is the perfect getaway. It's warm, inviting, and beautifully integrated with the natural surroundings.",
  // },

  //  {
  //   title: "Rustic Mountain Retreat",
  //   category: "Office",
  //   description:
  //     "A cozy mountain home that combines rustic charm with modern comforts.",
  //   image: "/images/project6.jpg",

  //   testimonial:
  //     "Our mountain home is the perfect getaway. It's warm, inviting, and beautifully integrated with the natural surroundings.",
  // },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      {/* Dynamic Hero Section */}
      <section className="relative h-[100vh] bg-black to-white text-white flex justify-between items-center">
        <div className="container mx-auto max-w-screen-xl">
          <div className="absolute inset-0">
            <Image
              src="/images/about.jpg"
              alt="Consturction Site Showcase"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
              loading="eager"
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">Crafted Dreams</h1>
            <p className="text-xl mb-8">
              Take a closer look at the quality and creative precision that
              define AIM.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8 mt-24 max-w-screen-xl">
        {/* <h1 className="text-4xl font-bold mb-8 text-primary">Our Projects</h1> */}
        <div className="my-4">
          <h1 className="text-center text-[40px]">Our Work </h1>
          <p className="text-[#767D85]">Our work reflects a thoughtful blend of architecture, engineering, and interior fit-out, shaped by a clear understanding of space, function, and form.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "All",
            "Office",
            "Warehouse",
            "Restaurant",
            "Residential",
            "Hospital",
            "Retail",
            "Landscaping",
          ].map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className="border-primary"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-3">
        {filteredProjects.map((card) => (
          <HoverCard
            key={card.id}
            title={card.title}
            subtitle={card.category}
            image={card.image}
            desc={card.description}
          />
        ))}
      </div>
    </div>
  );
}
