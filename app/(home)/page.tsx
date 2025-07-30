// import SlideUpAnimation from "@/components/animations/slide-up-variants";
// import ZoomInAnimation from "@/components/animations/zoom-in-variants";
// import { Testimonials } from "@/components/testimonials";
import HeroCarousel from "./hero-carousel";
import SectorsSection from "./carousel";
import ServicePreview from "./servicespreview";
import ServiceContext from "./serviceContext";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Apartment",
    category: "Approval",
    description:
      "A sleek, minimalist design for a city apartment that maximizes space and light.",
    image: "/images/project1.jpg",
    testimonial:
      "The team transformed my small apartment into a spacious, functional haven. I love coming home now!",
  },
  {
    id: 2,
    title: "Rustic Mountain Retreat",
    category: "Design",
    description:
      "A cozy mountain home that combines rustic charm with modern comforts.",
    image: "/images/project6.jpg",

    testimonial:
      "Our mountain home is the perfect getaway. It's warm, inviting, and beautifully integrated with the natural surroundings.",
  },
  {
    id: 3,
    title: "Eco-Friendly Office Space",
    category: "Fit-out",
    description:
      "A sustainable office design that promotes productivity and employee well-being.",
    image: "/images/project2.jpg",
    testimonial:
      "Our new office has boosted team morale and impressed our clients. It's both beautiful and environmentally responsible.",
  },
  // {
  //   id: 4,
  //   title: "Luxury Beachfront Villa",
  //   category: "Residential",
  //   description:
  //     "An opulent beachfront property that blends indoor and outdoor living seamlessly.",
  //   image: "/images/project3.jpg",
  //   testimonial:
  //     "The attention to detail in our villa is extraordinary. It's the perfect vacation home we've always dreamed of.",
  // },
];
export default function HomePage() {
  return (
    <div>
      <HeroCarousel />
      {/* Main Content Section */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Our Expertise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {"Find What You're Looking"} <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                For With Us
              </span>
            </h2>

            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Tailored Support for Every Stage of Your Project
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                From full project delivery to focused expertise where you need
                it most, we provide clear, hassle-free solutions that keep
                things moving forward
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((card, index) => (
              <div
                key={card.id}
                className={`transform transition-all duration-700 ${
                  index === 0
                    ? "animate-fade-in"
                    : index === 1
                    ? "animate-slide-up"
                    : "animate-slide-up-delay"
                }`}
              >
                <ServicePreview
                  title={card.title}
                  subtitle={card.category}
                  image={card.image}
                  desc={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Clients Across Dubai
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our numbers speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: "🏢" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "15+", label: "Years of Experience", icon: "📅" },
              { number: "50+", label: "Expert Team Members", icon: "👥" },
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
      </div>

      <ServiceContext />

      <SectorsSection />
    </div>
  );
}
