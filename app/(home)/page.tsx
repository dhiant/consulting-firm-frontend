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
    category: "Authority Approval",
    description:
      "A sleek, minimalist design for a city apartment that maximizes space and light with comprehensive authority approval process.",
    image: "/images/project1.jpg",
    testimonial:
      "The team transformed my small apartment into a spacious, functional haven. I love coming home now!",
    href: "/projects/modern-minimalist-apartment",
  },
  {
    id: 2,
    title: "Rustic Mountain Retreat",
    category: "Planning & Design",
    description:
      "A cozy mountain home that combines rustic charm with modern comforts through innovative planning and design solutions.",
    image: "/images/project6.jpg",
    testimonial:
      "Our mountain home is the perfect getaway. It's warm, inviting, and beautifully integrated with the natural surroundings.",
    href: "/projects/rustic-mountain-retreat",
  },
  {
    id: 3,
    title: "Eco-Friendly Office Space",
    category: "Fit-out & Build",
    description:
      "A sustainable office design that promotes productivity and employee well-being through complete fit-out and build services.",
    image: "/images/project2.jpg",
    testimonial:
      "Our new office has boosted team morale and impressed our clients. It's both beautiful and environmentally responsible.",
    href: "/projects/eco-friendly-office",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Main Content */}
      <div className="bg-gray-50">
        {/* Introduction Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6 max-w-screen-xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-display-md lg:text-display-lg mb-6 gradient-text animate-slide-up">
                Find What You're Looking For With Us
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8"></div>
              <div
                className="space-y-4 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-heading-lg text-gray-900 mb-4">
                  Tailored Support for Every Stage of Your Project
                </h2>
                <p className="text-body-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  From full project delivery to focused expertise where you need
                  it most, we provide clear, hassle-free solutions that keep
                  things moving forward. Experience the difference of working
                  with Dubai's trusted construction and design professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-heading-xl lg:text-display-md mb-4 text-gray-900">
                Our Core Services
              </h2>
              <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions for your construction and design needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ServicePreview
                    title={project.title}
                    subtitle={project.category}
                    image={project.image}
                    desc={project.description}
                    href={project.href}
                  />
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 hover-lift shadow-md hover:shadow-lg"
                >
                  View All Services
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary bg-transparent border-2 border-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300"
                >
                  Browse Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Context Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6 max-w-screen-xl">
            <ServiceContext />
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-heading-xl lg:text-display-md mb-4 text-gray-900">
                Industries We Serve
              </h2>
              <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
                Delivering excellence across diverse sectors in Dubai and beyond
              </p>
            </div>
            <SectorsSection />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 lg:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 lg:px-6 max-w-screen-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "15+", label: "Years Experience" },
                { number: "200+", label: "Happy Clients" },
                { number: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl lg:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
