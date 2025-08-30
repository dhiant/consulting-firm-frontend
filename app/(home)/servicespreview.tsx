"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Building2 } from "lucide-react";

export default function ServicePreview({ title, subtitle, desc, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group relative h-full">
      <div
        className="relative h-[400px] overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-in-out group-hover:shadow-2xl group-hover:scale-[1.02] cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
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
            <Building2 className="w-3 h-3 text-brand-50" />
            <span className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
              {subtitle}
            </span>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          {/* Title */}
          <h3 className="text-xl font-bold mb-3 leading-tight transition-all duration-500 group-hover:translate-y-0 translate-y-2">
            {title}
          </h3>

          {/* Description - Shows on hover */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              hovered
                ? "max-h-32 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-gray-200 leading-relaxed mb-4 line-clamp-3">
              {desc}
            </p>

            {/* Learn More Button */}
            <div className="flex items-center space-x-2 text-sm font-medium text-brand-50">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div
          className={`absolute inset-0 border-2 rounded-2xl transition-all duration-500 ${
            hovered ? "border-brand-50/50" : "border-transparent"
          }`}
        />
      </div>
    </div>
  );
}
