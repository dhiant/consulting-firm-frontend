"use client";

import { ArrowRight, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HoverCard({ title, subtitle, desc, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group relative max-w-sm mx-auto">
      <div
        className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-in-out group-hover:shadow-2xl group-hover:scale-105 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
              {subtitle}
            </span>
          </div>
        </div>

        {/* View Button */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors duration-300">
            <Eye className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 leading-tight transition-all duration-500 group-hover:translate-y-0 translate-y-2">
            {title}
          </h3>

          {/* Description - Shows on hover */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              hovered
                ? "max-h-32 opacity-100 translate-y-0 mb-6"
                : "max-h-0 opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-gray-200 leading-relaxed line-clamp-3">
              {desc}
            </p>
          </div>

          {/* Action Button */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button className="group/btn inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105">
              <span>View Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div
          className={`absolute inset-0 border-2 rounded-2xl transition-all duration-500 ${
            hovered ? "border-emerald-400/50" : "border-transparent"
          }`}
        />

        {/* Mobile Content (for screens smaller than lg) */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 mb-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span className="text-xs font-semibold uppercase tracking-wider">
              {subtitle}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 leading-tight">{title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed mb-4 line-clamp-2">
            {desc}
          </p>
          <button className="inline-flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
