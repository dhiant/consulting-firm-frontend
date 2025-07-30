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
      {/* Enhanced Projects Hero Section */}
      <section className="relative h-[100vh] bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white flex items-center overflow-hidden">
        {/* Background Image with Dynamic Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/about.jpg"
            alt="AIMTERIOR Portfolio Showcase"
            fill
            className="object-cover opacity-35"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 via-teal-900/70 to-slate-900/75"></div>
          {/* Dynamic Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div
                  key={i}
                  className="border-r border-b border-white/20"
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center max-w-screen-xl z-10">
          <div className="max-w-4xl">
            {/* Portfolio Badge */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-400/30">
                <div className="relative flex space-x-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Our Portfolio
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-up">
              Where Dreams Take
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Architectural Form
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed text-gray-100 animate-slide-up-delay">
              Explore our curated collection of transformative projects. Each
              design tells a unique story of innovation, precision, and the
              seamless fusion of form with function across Dubai's diverse
              architectural landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-delay">
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center space-x-2">
                  <span>Explore Projects</span>
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rotate-45 transform"></div>
                  </div>
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Start Your Project
              </button>
            </div>

            {/* Project Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Residential", "Commercial", "Hospitality", "Retail"].map(
                (category, index) => (
                  <div key={category} className="group text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-emerald-400/50">
                      <div className="text-2xl mb-2">
                        {["🏠", "🏢", "🏨", "🛍️"][index]}
                      </div>
                      <div className="text-sm font-medium">{category}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Floating Project Cards */}
        <div className="absolute top-20 right-10 w-32 h-40 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 animate-float opacity-20"></div>
        <div className="absolute bottom-32 right-32 w-24 h-32 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 animate-float-delayed opacity-30"></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-xs text-gray-300 mb-2 uppercase tracking-wider">
            View Our Work
          </div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
      {/* Main Projects Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                Portfolio Showcase
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Creative{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Our work reflects a thoughtful blend of architecture, engineering,
              and interior fit-out, shaped by a clear understanding of space,
              function, and form.
            </p>

            {/* Enhanced Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
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
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                    filter === category
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-400 hover:text-emerald-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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

          {/* Results Summary */}
          <div className="text-center mt-16">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-bold text-emerald-600">
                {filteredProjects.length}
              </span>{" "}
              of <span className="font-bold">{projects.length}</span> projects
              {filter !== "All" && (
                <span className="text-emerald-600">
                  {" "}
                  in "{filter}" category
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Project Excellence in Numbers
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Every project tells a story of innovation and craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed", icon: "🏗️" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "8", label: "Project Categories", icon: "📋" },
              { number: "15+", label: "Years of Excellence", icon: "🏆" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-emerald-100 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                Client Success Stories
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What Our Clients{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <div className="mb-6">
                  <div className="flex text-emerald-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{project.testimonial}"
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{project.title}</h4>
                    <p className="text-emerald-600 text-sm">
                      {project.category} Project
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Create Your Dream Project?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Let's collaborate to bring your vision to life with our expertise
              in architecture, design, and construction excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center justify-center space-x-3">
                  <span>Start Your Project</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                </span>
              </button>

              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
