"use client";
import { MoveRight, CheckCircle, FileText, Hammer } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: CheckCircle,
    title: "Authority Approval",
    description:
      "Start the Authority Approval process with us. With our in-depth knowledge of local regulations, we'll handle submitting your drawings to the authorities and secure the necessary permits to begin your project. We'll guide you through the entire approval process, ensuring your project complies with all regulations.",
    features: [
      "Permit Processing",
      "Regulatory Compliance",
      "Documentation",
      "Timeline Management",
    ],
  },
  {
    icon: FileText,
    title: "Planning and Design",
    description:
      "Embark on the Design and Drawings phase with us. We'll collaborate closely to create detailed plans that bring your vision to life. Our experienced team ensures each design is aesthetically pleasing and fully compliant with authority requirements.",
    features: [
      "Architectural Design",
      "3D Visualization",
      "Technical Drawings",
      "Concept Development",
    ],
  },
  {
    icon: Hammer,
    title: "Fit-out-Build",
    description:
      "Begin the Fit-Out and Build phase with us. Our skilled team will transform your design into a fully realized space, managing every stage of construction with care and expertise. We focus on craftsmanship and efficiency.",
    features: [
      "Project Management",
      "Quality Control",
      "Timeline Delivery",
      "Expert Craftsmanship",
    ],
  },
];

export default function ServiceContext() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzM3NEEzNiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHN2Zz4K')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
              Our Process
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-400 bg-clip-text text-transparent">
              AIM
            </span>{" "}
            Approach
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Turning Concepts into Built Realities
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:transform hover:scale-105">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-300 to-brand-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-xl"></div>
                </div>

                {/* Connection Line (for desktop) */}
                {index < services.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-white/30 rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={() => router.push("/contact")}
              className="group bg-gradient-to-r from-brand-100 to-brand-400 hover:from-brand-200 hover:to-brand-400 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
            >
              <span>Start Your Project</span>
              <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => router.push("/services")}
              className="group border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/5"
            >
              View All Services
            </button>
          </div>

          <p className="text-gray-400 mt-6 text-sm">
            {"Ready to transform your space? Let's discuss your vision."}
          </p>
        </div>
      </div>
    </div>
  );
}
