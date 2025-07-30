"use client";

import Image from "next/image";
import { useState } from "react";

export default function ServicePreview({ title, subtitle, desc, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="mb-5">
      <div
        className="relative w-full h-[300px] md:w-full md:h-[300px] lg:w-full lg:h-[300px] xl:w-full xl:h-[375px] overflow-hidden group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image with smooth opacity transition */}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-all duration-500 ease-in-out border-r-2 border-white ${
            hovered ? "opacity-20 scale-110" : "opacity-100 scale-100"
          }`}
        />

        {/* Overlay that appears on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#1C3A5B]/40 to-[#1C3A5B]/20 transition-opacity duration-500 ease-in-out ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Content that slides up on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 ease-in-out ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm">{desc}</p>
        </div>
      </div>

      {/* Static subtitle below the image */}
      <div className="text-center mt-5">
        <div className="text-sm text-[#1C3A5B] font-bold">{subtitle}</div>
      </div>
    </div>
  );
}
