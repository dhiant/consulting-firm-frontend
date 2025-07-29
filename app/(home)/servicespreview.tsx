"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ServicePreviewProps {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  href?: string;
}

export default function ServicePreview({
  title,
  subtitle,
  desc,
  image,
  href = "/services",
}: ServicePreviewProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover-lift">
      <Link href={href} className="block">
        <div
          className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-all duration-700 ease-in-out ${
              hovered ? "scale-110 brightness-75" : "scale-100 brightness-100"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Hover Content */}
          <div
            className={`absolute inset-0 p-6 flex flex-col justify-end text-white transition-all duration-500 ${
              hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-body-md leading-relaxed mb-4">{desc}</p>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900 backdrop-blur-sm">
              {subtitle}
            </span>
          </div>

          {/* External Link Icon */}
          <div
            className={`absolute top-4 right-4 z-10 transition-all duration-300 ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm">
              <ExternalLink className="w-4 h-4 text-gray-900" />
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-heading-md font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>

          <p className="text-body-sm text-gray-600 line-clamp-2 mb-4">{desc}</p>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              {subtitle}
            </span>
            <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
