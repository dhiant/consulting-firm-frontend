"use client";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ServiceContext() {
  const router = useRouter();

  const services = [
    {
      title: "Authority Approval",
      description:
        "Start the Authority Approval process with us. With our in-depth knowledge of local regulations, we'll handle submitting your drawings to the authorities and secure the necessary permits to begin your project. We'll guide you through the entire approval process, ensuring your project complies with all regulations and securing the necessary approvals to move forward.",
    },
    {
      title: "Planning and Design",
      description:
        "Embark on the Design and Drawings phase with us. We'll collaborate closely to create detailed plans that bring your vision to life. Our experienced team ensures each design is aesthetically pleasing and fully compliant with authority requirements, setting the stage for a smooth and successful project.",
    },
    {
      title: "Fit-out-Build",
      description:
        "Begin the Fit-Out and Build phase with us. Our skilled team will transform your design into a fully realized space, managing every stage of construction with care and expertise. We focus on craftsmanship and efficiency to deliver a final product that meets your vision and stands the test of time.",
    },
  ];

  return (
    <div className="bg-[#0D1B2A] border text-white my-12 mx-4 rounded-lg">
      <div className="container mx-auto px-6 py-16 max-w-screen-xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Section - Left Side */}
          <div className="lg:col-span-1 space-y-6 lg:pr-8">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              The AIM Approach
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Turning Concepts into Built Realities
            </p>
          </div>

          {/* Services Grid - Right Side */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`
                relative p-8 h-full
                ${
                  index < services.length - 1
                    ? "lg:border-r-2 lg:border-white/20"
                    : ""
                }
                hover:bg-white/5 transition-all duration-300 rounded-lg
                group
              `}
              >
                {/* Service Number */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm font-bold mb-4">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="pt-8">
                  <h4 className="text-xl font-semibold mb-6 uppercase tracking-wide text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h4>

                  <div className="space-y-4">
                    <p className="text-white/80 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex justify-center">
            <button
              onClick={() => router.push("/contact")}
              className="
              group relative overflow-hidden
              border-2 border-white/30 hover:border-white/60
              bg-transparent hover:bg-white/10
              px-8 py-4 
              flex items-center gap-3
              text-white font-medium
              transition-all duration-300
              rounded-lg
              hover:shadow-lg hover:shadow-white/20
            "
            >
              <span className="relative z-10">Contact Us</span>
              <MoveRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
