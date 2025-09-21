"use client";

import { ExternalLink, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HoverCardProps {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  id: number;
}

export default function HoverCard({
  title,
  subtitle,
  desc,
  image,
  id,
}: HoverCardProps) {
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Link href={`/project/${id}`}>
      <div
        className="group relative w-80 mx-auto bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Enhanced Image Container with Gradient Overlay */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Floating Action Buttons */}
          <div
            className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500 ${
              hovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            }`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLiked(!liked);
              }}
              className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                liked
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Heart
                className={`w-4 h-4 transition-all duration-300 ${
                  liked ? "fill-current scale-110" : ""
                }`}
              />
            </button>

            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/30">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Category Badge */}
          <div
            className={`absolute bottom-4 left-4 transition-all duration-500 ${
              hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm border border-white/50">
              {subtitle}
            </span>
          </div>

          {/* Description and See Details Overlay */}
          <div
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col justify-center items-center p-6 transition-all duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center text-white">
              <p className="text-sm leading-relaxed mb-6 max-w-xs">{desc}</p>
            </div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="p-6 relative">
          {/* Title with enhanced typography */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-50 transition-colors duration-300">
            {title}
          </h3>

          {/* Action Button with enhanced styling */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-500 hover:text-brand-50 transition-colors duration-300">
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">View Details</span>
            </div>
          </div>

          {/* Subtle bottom border animation */}
          <div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-50 to-brand-400 transition-all duration-500 ${
              hovered ? "w-full" : "w-0"
            }`}
          />
        </div>

        {/* Floating Elements for extra visual interest */}
        <div
          className={`absolute -top-2 -right-2 w-4 h-4 bg-brand-50 rounded-full opacity-0 transition-all duration-700 ${
            hovered ? "opacity-100 scale-100" : "scale-0"
          }`}
        />
        <div
          className={`absolute -bottom-2 -left-2 w-3 h-3 bg-brand-100 rounded-full opacity-0 transition-all duration-700 delay-100 ${
            hovered ? "opacity-100 scale-100" : "scale-0"
          }`}
        />
      </div>
    </Link>
  );
}
