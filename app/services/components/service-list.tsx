"use client";

import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Search } from "lucide-react";
import { useState } from "react";

interface IServiceList {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface ServiceListProps {
  data: IServiceList[];
  enableSearch?: boolean;
}

const ServiceList: React.FC<ServiceListProps> = ({
  data,
  enableSearch = true,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div className="flex justify-center my-12">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredData.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="group relative flex flex-col justify-center items-center px-2 py-4 gap-y-5 shadow-all-directions cursor-pointer hover:shadow-primary rounded-md"
                  key={index}
                >
                  {<item.icon className="w-12 h-12" />}
                  <h3 className="text-center">{item.title}</h3>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="w-full max-w-none p-2 text-center"
              >
                <p>{item.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
