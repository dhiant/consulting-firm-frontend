import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function CompanyTimeline() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              <div className="w-2 h-2 bg-brand-50 rounded-full"></div>
              <span className="text-xs font-semibold text-brand-50 uppercase tracking-wider">
                Growth Year
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Smart Homes & Tech Integration
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-normal mb-8 leading-relaxed">
            Expanded services to include smart home integrations and
            eco-friendly designs. Completed 10 projects for tech startups and
            modern family homes, establishing our expertise in cutting-edge
            residential solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/project5.jpg"
              alt="Smart home integration"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/project6.jpg"
              alt="Eco-friendly design"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/project1.jpg"
              alt="Tech startup office"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/project2.jpg"
              alt="Modern family home"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      ),
    },

    {
      title: "2024",
      content: (
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <div className="w-2 h-2 bg-brand-50 rounded-full"></div>
              <span className="text-xs font-semibold text-brand-50 uppercase tracking-wider">
                Current Year
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Sustainable Innovation & Global Partnerships
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-normal mb-8 leading-relaxed">
            Successfully completed and delivered 12 high-profile residential and
            commercial interior projects. Partnered with global brands for
            sourcing sustainable materials, reinforcing our commitment to
            environmental responsibility.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/project1.jpg"
              alt="2024 residential project"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/project2.jpg"
              alt="2024 commercial project"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/project3.jpg"
              alt="2024 sustainable design"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/project4.jpg"
              alt="2024 luxury interior"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      ),
    },

    {
      title: "2023",
      content: (
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1 rounded-full border border-blue-100">
              <div className="w-2 h-2 bg-gradient-to-r from-brand-50 to-brand-400 rounded-full"></div>
              <span className="text-xs font-semibold text-brand-50 uppercase tracking-wider">
                Company Launch
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            The Beginning of Excellence
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-normal mb-8 leading-relaxed">
            Launched the company and completed 3 residential construction
            projects, setting the foundation for a successful future. Our
            founding vision was to transform Dubai&apost;s architectural
            landscape with precision and innovation.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-brand-50 mb-1">3</div>
                <div className="text-sm text-gray-600">Initial Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-50 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-50 mb-1">
                  Dubai
                </div>
                <div className="text-sm text-gray-600">Home Base</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl">
      <Timeline data={data} />
    </div>
  );
}
