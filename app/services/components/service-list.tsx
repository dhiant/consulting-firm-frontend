"use client";

import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface IServiceList {
  id: number;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  serviceTitle?: string;
  services?: {
    name: string;
    description: string;
  }[];
  featuresTitle?: string;
  features?: string[];
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
              placeholder="Search services..."
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-5">
        {filteredData.map((item, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="group relative flex flex-col justify-start items-center px-4 py-6 gap-y-4 shadow-all-directions cursor-pointer hover:shadow-primary rounded-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-primary/20">
                {<item.icon className="w-12 h-12 text-primary" />}
                <h3 className="text-center font-semibold text-gray-900 text-sm leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-3 mb-4">
                  {<item.icon className="w-8 h-8 text-primary" />}
                  <DialogTitle className="text-2xl font-bold">
                    {item.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Description */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    <ReactMarkdown>{item.description}</ReactMarkdown>
                  </p>
                </div>

                {/* Services Section */}
                {item.services && item.services.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-semibold text-primary border-b border-primary pb-2">
                        {item.serviceTitle || "Our Services Include:"}
                      </h4>
                      <Badge variant="secondary" className="text-xs">
                        {item.services.length} Services
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow hover:border-primary/30"
                        >
                          <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {service.name}
                          </h5>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features Section */}
                {item.features && item.features.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-semibold text-primary border-b border-primary pb-2">
                        {item.featuresTitle || "Why Choose Us?"}
                      </h4>
                      <Badge
                        variant="outline"
                        className="text-xs border-green-200 text-green-700"
                      >
                        {item.features.length} Benefits
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-colors"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg text-center border border-primary/20">
                  <p className="text-primary font-semibold mb-2 text-lg">
                    Ready to get started?
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Contact us today for a consultation and let us help you
                    navigate the approval process.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Badge
                      onClick={() => {
                        window.open("https://wa.me/+971553856863", "_blank");
                      }}
                      className="bg-primary text-white px-4 py-2 cursor-pointer hover:bg-primary/90 transition-colors"
                    >
                      Get Free Consultation
                    </Badge>

                    <Badge
                      variant="outline"
                      className="px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        window.open("https://brochurelink.com", "_blank");
                      }}
                    >
                      Download Brochure
                    </Badge>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
