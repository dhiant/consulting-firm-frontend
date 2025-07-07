"use client";

import Image from "next/image";
import { useState } from "react";

export default function ServicePreview({ title, subtitle, desc, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="mb-5">
      <div
        className="relative w-full h-[300px] md:w-full md:h-[300px] lg:w-full lg:h-[300px] xl:w-full xl:h-[375px]   overflow-hidden group cursor-pointer "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* {hovered ? (<div className="bg-red-500"> </div>): */}
        <Image
          src={image}
          alt={title}
          fill
          className={` object-cover transition-all duration-500 ease-in-out border-r-2 border-white  ${
            hovered ? "hidden" : "brightness-100"
          }`}
        />

        {/* } */}
      </div>
      <div
        className={`text-center transition-all duration-500 ease-in-out ${
          hovered ? "-translate-y-52" : "translate-y-0"
        }`}
      >
        <div className="text-sm text-[#1C3A5B] mb-2 font-bold mt-5 ml-5">{subtitle}</div>

        <p className={`${!hovered ? "hidden" : "flex"}`}>{desc}</p>
      </div>
    </div>
  );
}
