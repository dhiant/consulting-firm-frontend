

'use client';

import { Divide, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

export default function ServicePreview({ title, subtitle, desc, image }) {
  const [hovered, setHovered] = useState(false);

  return (

    <div className='mb-5'>
      <div
        className="relative w-full h-[300px] md:w-full md:h-[300px] lg:w-full lg:h-[300px] xl:w-full xl:h-[375px]  overflow-hidden group cursor-pointer "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* {hovered ? (<div className="bg-red-500"> </div>): */}
        <Image
          src={image}
          alt={title}
          fill
          className={` object-cover transition-all duration-500 ease-in-out ${hovered ? 'hidden' : 'brightness-100'
            }`}
        />

        {/* } */}



      </div>
      <div className={`text-center transition-all duration-500 ease-in-out ${hovered ? '-translate-y-52' : 'translate-y-0'
        }`}>
        <div className="text-sm mb-2 font-bold mt-5 ml-5">{subtitle}</div>

        <p className={`${!hovered ? "hidden" : "flex"}`}>{desc}</p>


      </div>





    </div>

  );
}
