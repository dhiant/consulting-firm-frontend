// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { FiPlus, FiArrowRight } from 'react-icons/fi';

// export default function HoverCard({ title, subtitle, desc, image }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="relative w-[395px] h-[500px] overflow-hidden group cursor-pointer"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Background Image */}
//       <Image
//         src={image}
//         alt={title}
//         fill
//         className="object-cover"
//       />

//       {/* Overlay Content */}
//       <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white p-6 transition-transform duration-500 ease-in-out">
//         <div
//           className={`text-center transition-all duration-500 ease-in-out ${
//             hovered ? '-translate-y-4' : 'translate-y-0'
//           }`}
//         >
//           <div className="text-sm mb-2">{subtitle}</div>
//           <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
//             {title}
//           </h2>
//           <p className="text-sm mb-4">{desc}</p>

//           <div className="flex justify-center items-center">
//             {hovered ? (
//               <FiArrowRight size={24} />
//             ) : (
//               <FiPlus size={24} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { FiPlus, FiArrowRight } from 'react-icons/fi';

// export default function HoverCard({ title, subtitle, desc, image }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="relative w-[350px] h-[375px] overflow-hidden group cursor-pointer"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Single Background Image */}
//       <Image
//         src={image}
//         alt={title}
//         fill
//         className={` object-cover transition-all duration-500 ease-in-out ${
//           hovered ? 'brightness-50' : 'brightness-100'
//         }`}
//       />

//       {/* Overlay Content */}
//       <div className="absolute inset-y-60 flex items-center justify-center text-white p-6 ">
//         <div
//           className={`text-center transition-all duration-500 ease-in-out ${
//             hovered ? '-translate-y-24' : 'translate-y-0'
//           }`}
//         >
//           {/* Subtitle (only when not hovered) */}

//             <div className="text-sm mb-2 transition-opacity duration-300">
//               {subtitle}
//             </div>


//           {/* Title (always visible) */}
//           <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
//             {title}
//           </h2>

//           {/* Description (only when hovered) */}
//           {hovered && (
//             <p className="text-sm mb-4 transition-opacity duration-300">
//               {desc}
//             </p>
//           )}

//           {/* Icon changes based on hover */}
//           <div className="flex justify-center items-center">
//             {hovered ? <FiArrowRight size={24} /> : <FiPlus size={24} />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

export default function HoverCard({ title, subtitle, desc, image }) {
  const [hovered, setHovered] = useState(false);

  return (

    <div>
      <div
        className="relative w-full h-[370px] md:w-full md:h-[375px] lg:w-full lg:h-[375px] xl:w-full xl:h-[375px]  overflow-hidden group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Single Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className={` object-cover transition-all duration-500 ease-in-out ${hovered ? 'brightness-50' : 'brightness-100'
            }`}
        />

        {/* Overlay Content */}
        <div className="absolute inset-y-60 hidden lg:flex items-center justify-center text-white p-6 ">
          <div
            className={`text-center transition-all duration-500 ease-in-out ${hovered ? '-translate-y-24' : 'translate-y-0'
              }`}
          >
            {/* Subtitle (only when not hovered) */}

            <div className="text-sm mb-2 transition-opacity duration-300">
              {subtitle}
            </div>


            {/* Title (always visible) */}
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
              {title}
            </h2>

            {/* Description (only when hovered) */}
            {hovered && (
              <p className="text-sm mb-4 transition-opacity duration-300">
                {desc}
              </p>
            )}

            {/* Icon changes based on hover */}
            <div className="flex justify-center items-center">
              {hovered ? <FiArrowRight size={24} /> : <FiPlus size={24} />}
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden mt-3'>
        <div className="text-sm mb-2">{subtitle}</div>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
          {title}
        </h2>


        <div className="flex justify-start  items-center">
          <MoveRight size={24} />
        </div>

      </div>

    </div>

  );
}
