"use client";

import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Search, ArrowRight } from "lucide-react";
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
    <section className="py-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
            Service Category
          </span>
        </div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {title.split(" ").map((word, index) =>
            index === title.split(" ").length - 1 ? (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                {word}
              </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          {description}
        </p>

        {/* Enhanced Search */}
        {enableSearch && (
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        )}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredData.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 cursor-pointer hover:-translate-y-2">
                  {/* Icon Background */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="flex items-center text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Border Animation */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300"></div>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="max-w-sm p-0 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src="/images/project1.jpg"
                    alt={item.title}
                    height={200}
                    width={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h5 className="text-white font-bold text-lg mb-1">
                      {item.title}
                    </h5>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-semibold">
                    <span>Click for more details</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      {/* Results Count */}
      {enableSearch && searchTerm && (
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing {filteredData.length} of {data.length} services
            {searchTerm && (
              <span className="font-semibold"> for {searchTerm}</span>
            )}
          </p>
        </div>
      )}
    </section>
  );
};

export default ServiceList;
