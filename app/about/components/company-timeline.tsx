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
                Current Year
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Architectural Excellence & Tailored Interior Solutions
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-normal mb-8 leading-relaxed">
            Expanded portfolio to include luxury villa interiors, innovative
            co-working spaces, efficient warehouse and mezzanine office designs,
            stylish cafes, bespoke retail environments, dynamic office spaces,
            and thoughtfully crafted outdoor living areas. Successfully
            delivered over 30 projects across Dubai, blending modern aesthetics
            with functional precision and sustainable materials, establishing
            our reputation for versatile and refined architectural solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/a1.png"
              alt="Smart home integration"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/a2.png"
              alt="Eco-friendly design"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/a3.png"
              alt="Tech startup office"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/a4.png"
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
                Growth Year
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Innovative Designs & Trusted Collaborations
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-normal mb-8 leading-relaxed">
            Completed and delivered over 30 diverse projects, including
            residential villas, commercial offices, retail spaces, and
            industrial facilities. Partnered with leading manufacturers and
            local artisans to source premium materials and advanced
            technologies, ensuring quality, sustainability, and lasting impact
            in every design.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/b1.png"
              alt="2024 residential project"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/b2.png"
              alt="2024 commercial project"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/b3.png"
              alt="2024 sustainable design"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/b4.png"
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
            Founded with a vision to redefine Dubai’s architectural landscape,
            the company undertook a series of complex projects involving
            multi-phase residential developments, bespoke interior fit-outs, and
            integrated infrastructure works. These foundational achievements
            demonstrated our capability to manage diverse scopes with precision
            and innovation, establishing a solid base for our continued growth
            and reputation.
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
