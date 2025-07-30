"use client";
import Image from "next/image";
import {
  Bolt,
  Boxes,
  BrickWall,
  Construction,
  Drill,
  Hammer,
  HardHat,
  MoveRight,
  Pickaxe,
  Wrench,
} from "lucide-react";
import { DraftingCompass, Cable, Landmark } from "lucide-react";
import {
  Building2,
  Home,
  Warehouse,
  ShoppingBag,
  Trees,
  PanelsTopLeft,
} from "lucide-react";
import ServiceList from "./components/service-list";
import Link from "next/link";

const authorityApprovalsData = [
  {
    title: "Civil Defense Approval",
    description:
      "Get hassle-free Civil Defense Approval in Dubai with our expert consultancy services.",
    icon: Construction,
  },
  {
    title: "DEWA Approval",
    description:
      "Expert assistance for obtaining DEWA Approval for your projects in Dubai.",
    icon: BrickWall,
  },
  {
    title: "DSO Approval",
    description:
      "Simplified Dubai Silicon Oasis (DSO) Approval process with professional guidance.",
    icon: Drill,
  },
  {
    title: "Dubai Development Authority Approval",
    description:
      "Professional services to secure Dubai Development Authority (DDA) Approvals quickly.",
    icon: Hammer,
  },
  {
    title: "Dubai Municipality Approval",
    description:
      "Smooth and efficient Dubai Municipality Approval services for your projects.",
    icon: HardHat,
  },
  {
    title: "Emaar Approval",
    description:
      "Get Emaar Approval for your projects with our streamlined consultancy solutions.",
    icon: Pickaxe,
  },
  {
    title: "Food Control Department Approval",
    description:
      "Ensure compliance with Food Control Department standards and get quick approvals.",
    icon: Wrench,
  },
  {
    title: "JAFZA Approval",
    description:
      "Obtain Jebel Ali Free Zone Authority (JAFZA) Approval with ease through our services.",
    icon: Bolt,
  },
  {
    title: "Nakheel Approval",
    description:
      "Professional assistance for Nakheel Approval for your residential or commercial projects.",
    icon: Construction,
  },
  {
    title: "Sand Transfer Permit",
    description:
      "Quick and reliable Sand Transfer Permit approvals for your construction needs.",
    icon: BrickWall,
  },
  {
    title: "Shisha Cafe License Dubai",
    description:
      "Obtain your Shisha Cafe License in Dubai with expert consultancy services.",
    icon: Drill,
  },
  {
    title: "Signage Approval",
    description:
      "Get your signage approved in Dubai with our hassle-free consultancy services.",
    icon: Hammer,
  },
  {
    title: "Smoking Permit",
    description:
      "Secure a Smoking Permit in Dubai with professional assistance.",
    icon: HardHat,
  },
  {
    title: "SPA Approval",
    description:
      "Expert services to obtain SPA Approval for your wellness center in Dubai.",
    icon: Pickaxe,
  },
  {
    title: "Swimming Pool Approval",
    description:
      "Simplify your Swimming Pool Approval process with our expert consultancy.",
    icon: Wrench,
  },
  {
    title: "TECOM and DCCA Approval",
    description:
      "Efficient TECOM and Dubai Creative Clusters Authority (DCCA) Approval services.",
    icon: Bolt,
  },
  {
    title: "Third Party Consultants Approval",
    description:
      "Professional guidance for obtaining Third Party Consultants Approval in Dubai.",
    icon: Construction,
  },
  {
    title: "Trakhees Approval",
    description:
      "Get Trakhees Approval for your project with our experienced consultants.",
    icon: BrickWall,
  },
  {
    title: "RTA Permit and Approval",
    description:
      "Expert assistance for obtaining RTA permits and approvals in Dubai.",
    icon: Drill,
  },
  {
    title: "Solar Approval",
    description:
      "Professional consultancy for acquiring Solar Approval for your renewable energy projects.",
    icon: Hammer,
  },
  {
    title: "Tent Approval",
    description:
      "Secure Tent Approval in Dubai for your event or project with ease.",
    icon: HardHat,
  },
  {
    title: "DHA Approval",
    description:
      "Get Dubai Health Authority (DHA) Approval with expert guidance for your healthcare project.",
    icon: Pickaxe,
  },
  {
    title: "Property Snagging and Inspection",
    description:
      "Ensure quality and compliance with our Property Snagging and Inspection services in Dubai.",
    icon: Wrench,
  },
];

const planningandDrawingsData = [
  {
    title: "Architecture Drawings",
    description:
      "Detailed floor plans, elevations, and sections that bring your architectural vision to life with precision and clarity.",
    icon: DraftingCompass,
  },
  {
    title: "MEP Drawings",
    description:
      "Comprehensive Mechanical, Electrical, and Plumbing layouts to ensure efficiency, safety, and compliance in your building systems.",
    icon: Cable,
  },
  {
    title: "Structural Drawings",
    description:
      "Engineering-based diagrams outlining the framework and load-bearing systems that form the foundation of your construction.",
    icon: Landmark,
  },
  {
    title: "3D Visualization",
    description:
      "Photorealistic 3D renders and walkthroughs to help you visualize your space before it’s built, enhancing design decisions.",
    icon: Boxes,
  },
];

const fitoutWorksData = [
  {
    title: "Commercial",
    description:
      "Office and business space fitouts tailored for productivity and branding.",
    icon: Building2,
  },
  {
    title: "Residential",
    description:
      "Custom home interiors blending comfort, function, and aesthetics.",
    icon: Home,
  },
  {
    title: "Warehouse",
    description:
      "Functional warehouse interiors built for storage and workflow efficiency.",
    icon: Warehouse,
  },
  {
    title: "Retail",
    description:
      "Engaging retail spaces designed to enhance customer experience and sales.",
    icon: ShoppingBag,
  },
  {
    title: "Landscaping",
    description:
      "Outdoor designs that connect nature with built environments beautifully.",
    icon: Trees,
  },
  {
    title: "Racking Installation",
    description:
      "Optimized storage systems for organized, high-capacity solutions.",
    icon: PanelsTopLeft,
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Enhanced Services Hero Section */}
      <section className="relative h-[100vh] bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white flex items-center overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/services.jpg"
            alt="AIMTERIOR Professional Services"
            fill
            className="object-cover opacity-30"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/70 to-purple-900/60"></div>
          {/* Animated geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-white rotate-45 animate-pulse"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center max-w-screen-xl z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Service Badge */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Professional Services
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-up">
              Comprehensive Solutions
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                For Every Project
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-100 animate-slide-up-delay">
              From authority approvals to final construction, AIMTERIOR delivers
              end-to-end services that streamline your project journey.
              Experience the difference of working with Dubai&apos;s most
              trusted architectural and design consultancy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-delay">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="flex items-center justify-center space-x-3">
                    <span>Get Started Today</span>
                    <MoveRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Explore Services
              </button>
            </div>

            {/* Service Categories Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Authority Approvals
                </h3>
                <p className="text-sm text-gray-300">
                  Navigate regulatory requirements with expert guidance
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Design & Planning
                </h3>
                <p className="text-sm text-gray-300">
                  Comprehensive architectural and MEP solutions
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Fit-out & Build</h3>
                <p className="text-sm text-gray-300">
                  Complete construction and interior solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <div className="text-xs text-gray-300 mb-2 uppercase tracking-wider">
            Explore Our Expertise
          </div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Our Expertise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial approvals to final construction, we provide
              end-to-end solutions that transform your vision into reality
            </p>
          </div>

          {/* Authority Approvals Section */}
          <div className="mb-20">
            <ServiceList
              data={authorityApprovalsData}
              title={"Authority Approvals"}
              description="We help navigate the complexities of local authority regulations and secure essential approvals for your projects efficiently and hassle-free."
            />
          </div>
        </div>
      </section>

      {/* Planning & Drawings Section */}
      <section className="relative py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceList
            data={planningandDrawingsData}
            title={"Planning & Drawings"}
            description="Our team crafts precise planning layouts and architectural drawings tailored to meet both your vision and statutory requirements."
            enableSearch={false}
          />
        </div>
      </section>

      {/* Fit-out Works Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceList
            data={fitoutWorksData}
            title={"Fit-out Works & Build"}
            description="From interiors to final finishes, we execute fit-out works with precision and quality, ensuring your space is ready for purpose and style."
            enableSearch={false}
          />
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzM3NEEzNiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHN2Zz4K')] opacity-30"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                Our Process
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How We{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A streamlined approach that ensures your project success from
              concept to completion
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Initial project assessment and requirement analysis",
                icon: "💬",
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed planning, design, and approval strategy",
                icon: "📋",
              },
              {
                step: "03",
                title: "Execution",
                description: "Professional implementation with quality control",
                icon: "🔨",
              },
              {
                step: "04",
                title: "Completion",
                description: "Final delivery and post-project support",
                icon: "✨",
              },
            ].map((process, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent z-10">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-white/30 rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-bold text-white/10">
                      {process.step}
                    </div>
                    <div className="text-3xl">{process.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Service Excellence in Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "22+", label: "Authority Types", icon: "📋" },
              { number: "500+", label: "Approvals Secured", icon: "✅" },
              { number: "100+", label: "Design Projects", icon: "📐" },
              { number: "24/7", label: "Support Available", icon: "🕒" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Let&apos;s discuss your requirements and create a customized
              solution that brings your vision to life
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="flex items-center justify-center space-x-3">
                    <span>Get Free Consultation</span>
                    <MoveRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>

              <Link href="/projects">
                <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105">
                  View Our Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
