import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function CompanyTimeline() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
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
            <div className="inline-flex items-center space-x-2 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">
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
      title: "2022",
      content: (
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
                Service Expansion
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Modular Kitchen Design Mastery
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-normal mb-8 leading-relaxed">
            Introduced a modular kitchen design service. Delivered 8 luxury
            kitchen renovations and collaborated with renowned architects for
            urban projects, establishing our reputation in high-end residential
            design.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/project3.jpg"
              alt="Luxury kitchen renovation"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/project4.jpg"
              alt="Modular kitchen design"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/project5.jpg"
              alt="Urban project collaboration"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/project6.jpg"
              alt="Architectural partnership"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-xs font-semibold text-orange-700 uppercase tracking-wider">
                Retail Expertise
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Boutique Retail Transformation
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-normal mb-8 leading-relaxed">
            Designed and built 5 boutique retail stores, showcasing a seamless
            blend of aesthetics and functionality. This milestone marked our
            entry into commercial retail design, establishing our versatility
            across multiple sectors.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Retail Design Milestone
                </h4>
                <p className="text-gray-600 text-sm">
                  5 successful boutique store launches across Dubai
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1 rounded-full border border-blue-100">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
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
            founding vision was to transform Dubai's architectural landscape
            with precision and innovation.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Initial Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">
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
