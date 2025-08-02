// "use client";

// import { Input } from "@/components/ui/input";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Search } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// interface IServiceList {
//   title: string;
//   description: string;
//   icon: React.FC<React.SVGProps<SVGSVGElement>>;
// }

// interface ServiceListProps {
//   data: IServiceList[];
//   enableSearch?: boolean;
//   title: string;
//   description: string;
// }

// const ServiceList: React.FC<ServiceListProps> = ({
//   data,
//   enableSearch = true,
//   title,
//   description,
// }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = data.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section>
//       <div className="flex justify-center mt-12">
//         {enableSearch && (
//           <div className="relative w-full md:w-[500px]">
//             <Input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="p-2 border border-gray-300 rounded"
//             />
//             <Search className="absolute right-1.5 top-1.5" />
//           </div>
//         )}
//       </div>
//       <h3 className="font-bold my-5 text-3xl">{title}</h3>
//       <p className="text-primary/80">{description}</p>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-5">
//         {filteredData.map((item, index) => (
//           <TooltipProvider key={index}>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <div
//                   className="group relative flex flex-col justify-center items-center px-2 py-4 gap-y-5 shadow-all-directions cursor-pointer hover:shadow-primary rounded-md"
//                   key={index}
//                 >
//                   {<item.icon className="w-12 h-12" />}
//                   <h3 className="text-center">{item.title}</h3>
//                 </div>
//               </TooltipTrigger>
//               <TooltipContent
//                 side="top"
//                 className="w-full max-w-none p-2 text-center bg-white text-primary border border-primary rounded-md"
//               >
//                 <Image
//                   src="/images/project1.jpg"
//                   alt="Test"
//                   height={300}
//                   width={300}
//                   className="w-full border border-primary rounded-md"
//                 />
//                 <p className="p-2">{item.description}</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServiceList;

"use client";

import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface IServiceList {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface ServiceListProps {
  data: IServiceList[];
  enableSearch?: boolean;
  title: string;
  description: string;
}

const ServiceList: React.FC<ServiceListProps> = ({
  data,
  enableSearch = true,
  title,
  description,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div className="flex justify-center mt-12">
        {enableSearch && (
          <div className="relative w-full md:w-[500px]">
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <Search className="absolute right-1.5 top-1.5" />
          </div>
        )}
      </div>
      <h3 className="font-bold my-5 text-3xl">{title}</h3>
      <p className="text-primary/80">{description}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-5">
        {filteredData.map((item, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="group relative flex flex-col justify-center items-center px-2 py-4 gap-y-5 shadow-all-directions cursor-pointer hover:shadow-primary rounded-md">
                {<item.icon className="w-12 h-12" />}
                <h3 className="text-center">{item.title}</h3>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center">{item.title}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/images/project1.jpg"
                  alt={item.title}
                  height={300}
                  width={300}
                  className="w-full border border-primary rounded-md"
                />
                <p className="text-center text-primary/80">
                  {item.description}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
