import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Award,
  Share2,
  ExternalLink,
} from "lucide-react";
import ScrollIndicator from "@/components/scroll-indicator";

// Extended project data with detailed information
const projectData = {
  "1": {
    id: 1,
    title: "Minimalist Apartment",
    category: "Residential",
    description:
      "A sleek, minimalist design for a city apartment that maximizes space and light.",
    image: "/images/project1.jpg",
    testimonial:
      "The team transformed my small apartment into a spacious, functional haven. I love coming home now!",
    client: "Sarah Johnson",
    location: "Downtown Dubai",
    duration: "3 months",
    teamSize: "5 members",
    year: "2023",
    status: "Completed",
    budget: "Confidential",
    area: "1,200 sq ft",
    challenges: [
      "Limited space optimization",
      "Natural light enhancement",
      "Storage solutions",
      "Modern aesthetic integration",
    ],
    solutions: [
      "Open floor plan design",
      "Strategic mirror placement",
      "Built-in storage systems",
      "Minimalist furniture selection",
    ],
    features: [
      "Open concept living",
      "Custom built-in storage",
      "Energy-efficient lighting",
      "Smart home integration",
      "Sustainable materials",
    ],
    gallery: [
      "/images/project1.jpg",
      "/images/project2.jpg",
      "/images/project3.jpg",
    ],
    relatedProjects: [
      {
        id: 4,
        title: "Luxury Beachfront Villa",
        category: "Residential",
        image: "/images/project3.jpg",
        year: "2023",
      },
      {
        id: 6,
        title: "Urban Loft Renovation",
        category: "Restaurant",
        image: "/images/project5.jpg",
        year: "2022",
      },
    ],
  },
  "2": {
    id: 2,
    title: "Rustic Mountain Retreat",
    category: "Landscaping",
    description:
      "A cozy mountain home that combines rustic charm with modern comforts.",
    image: "/images/project6.jpg",
    testimonial:
      "Our mountain home is the perfect getaway. It's warm, inviting, and beautifully integrated with the natural surroundings.",
    client: "Michael & Lisa Chen",
    location: "Hatta Mountains",
    duration: "6 months",
    teamSize: "8 members",
    year: "2022",
    status: "Completed",
    budget: "Confidential",
    area: "3,500 sq ft",
    challenges: [
      "Remote location access",
      "Weather considerations",
      "Natural material sourcing",
      "Eco-friendly design requirements",
    ],
    solutions: [
      "Local material procurement",
      "Weather-resistant finishes",
      "Solar panel integration",
      "Natural ventilation systems",
    ],
    features: [
      "Stone and wood construction",
      "Large panoramic windows",
      "Outdoor living spaces",
      "Fireplace and heating",
      "Mountain view integration",
    ],
    gallery: [
      "/images/project6.jpg",
      "/images/project1.jpg",
      "/images/project2.jpg",
    ],
    relatedProjects: [
      {
        id: 1,
        title: "Minimalist Apartment",
        category: "Residential",
        image: "/images/project1.jpg",
        year: "2023",
      },
      {
        id: 3,
        title: "Eco-Friendly Office Space",
        category: "Retail",
        image: "/images/project2.jpg",
        year: "2023",
      },
    ],
  },
  "3": {
    id: 3,
    title: "Eco-Friendly Office Space",
    category: "Retail",
    description:
      "A sustainable office design that promotes productivity and employee well-being.",
    image: "/images/project2.jpg",
    testimonial:
      "Our new office has boosted team morale and impressed our clients. It's both beautiful and environmentally responsible.",
    client: "GreenTech Solutions",
    location: "Business Bay",
    duration: "4 months",
    teamSize: "12 members",
    year: "2023",
    status: "Completed",
    budget: "Confidential",
    area: "5,000 sq ft",
    challenges: [
      "Sustainability requirements",
      "Employee wellness focus",
      "Modern technology integration",
      "Cost-effective solutions",
    ],
    solutions: [
      "LEED certification compliance",
      "Biophilic design elements",
      "Smart building systems",
      "Recycled material usage",
    ],
    features: [
      "Green wall installation",
      "Natural lighting optimization",
      "Recycled material finishes",
      "Energy-efficient systems",
      "Collaborative workspaces",
    ],
    gallery: [
      "/images/project2.jpg",
      "/images/project3.jpg",
      "/images/project4.jpg",
    ],
    relatedProjects: [
      {
        id: 2,
        title: "Rustic Mountain Retreat",
        category: "Landscaping",
        image: "/images/project6.jpg",
        year: "2022",
      },
      {
        id: 5,
        title: "Boutique Hotel Lobby",
        category: "Hospital",
        image: "/images/project4.jpg",
        year: "2022",
      },
    ],
  },
  "4": {
    id: 4,
    title: "Luxury Beachfront Villa",
    category: "Residential",
    description:
      "An opulent beachfront property that blends indoor and outdoor living seamlessly.",
    image: "/images/project3.jpg",
    testimonial:
      "The attention to detail in our villa is extraordinary. It's the perfect vacation home we've always dreamed of.",
    client: "Ahmed Al-Rashid",
    location: "Palm Jumeirah",
    duration: "8 months",
    teamSize: "15 members",
    year: "2023",
    status: "Completed",
    budget: "Confidential",
    area: "8,000 sq ft",
    challenges: [
      "Beachfront construction",
      "Salt water corrosion",
      "Privacy requirements",
      "Luxury finish standards",
    ],
    solutions: [
      "Marine-grade materials",
      "Strategic landscaping",
      "Privacy screen design",
      "Premium finish selection",
    ],
    features: [
      "Infinity pool design",
      "Ocean view integration",
      "Luxury finishes",
      "Smart home automation",
      "Private beach access",
    ],
    gallery: [
      "/images/project3.jpg",
      "/images/project4.jpg",
      "/images/project5.jpg",
    ],
    relatedProjects: [
      {
        id: 1,
        title: "Minimalist Apartment",
        category: "Residential",
        image: "/images/project1.jpg",
        year: "2023",
      },
      {
        id: 6,
        title: "Urban Loft Renovation",
        category: "Restaurant",
        image: "/images/project5.jpg",
        year: "2022",
      },
    ],
  },
  "5": {
    id: 5,
    title: "Boutique Hotel Lobby",
    category: "Hospital",
    description:
      "A chic and inviting lobby design for a boutique hotel, setting the tone for a luxurious stay.",
    image: "/images/project4.jpg",
    testimonial:
      "The lobby design has significantly improved our guests' first impressions. It's elegant yet welcoming.",
    client: "Boutique Hotels Group",
    location: "DIFC",
    duration: "5 months",
    teamSize: "10 members",
    year: "2022",
    status: "Completed",
    budget: "Confidential",
    area: "2,500 sq ft",
    challenges: [
      "Brand identity integration",
      "Guest flow optimization",
      "Luxury atmosphere creation",
      "Functional space planning",
    ],
    solutions: [
      "Custom furniture design",
      "Strategic lighting plan",
      "Art installation integration",
      "Multi-functional spaces",
    ],
    features: [
      "Custom reception desk",
      "Art gallery integration",
      "Luxury seating areas",
      "Ambient lighting design",
      "Concierge services area",
    ],
    gallery: [
      "/images/project4.jpg",
      "/images/project5.jpg",
      "/images/project6.jpg",
    ],
    relatedProjects: [
      {
        id: 3,
        title: "Eco-Friendly Office Space",
        category: "Retail",
        image: "/images/project2.jpg",
        year: "2023",
      },
      {
        id: 1,
        title: "Minimalist Apartment",
        category: "Residential",
        image: "/images/project1.jpg",
        year: "2023",
      },
    ],
  },
  "6": {
    id: 6,
    title: "Urban Loft Renovation",
    category: "Restaurant",
    description:
      "A complete overhaul of an industrial loft space into a modern, multi-functional home.",
    image: "/images/project5.jpg",
    testimonial:
      "I never thought my old loft could look this amazing. It's like living in a design magazine!",
    client: "David Martinez",
    location: "Al Quoz",
    duration: "4 months",
    teamSize: "7 members",
    year: "2022",
    status: "Completed",
    budget: "Confidential",
    area: "2,000 sq ft",
    challenges: [
      "Industrial space conversion",
      "Structural modifications",
      "Modern functionality",
      "Budget constraints",
    ],
    solutions: [
      "Open concept design",
      "Structural reinforcement",
      "Multi-purpose furniture",
      "Cost-effective materials",
    ],
    features: [
      "Exposed brick walls",
      "Industrial lighting",
      "Open kitchen design",
      "Flexible living spaces",
      "Urban garden integration",
    ],
    gallery: [
      "/images/project5.jpg",
      "/images/project6.jpg",
      "/images/project1.jpg",
    ],
    relatedProjects: [
      {
        id: 1,
        title: "Minimalist Apartment",
        category: "Residential",
        image: "/images/project1.jpg",
        year: "2023",
      },
      {
        id: 4,
        title: "Luxury Beachfront Villa",
        category: "Residential",
        image: "/images/project3.jpg",
        year: "2023",
      },
    ],
  },
};

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectData[params.id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-brand-50 text-white rounded-lg hover:bg-brand-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 h-full flex items-center max-w-screen-xl z-10 min-h-screen">
          <div className="max-w-4xl w-full py-16 sm:py-20">
            {/* Back Button */}
            <div className="mb-6 sm:mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/30 hover:bg-white/25 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium">
                  Back to Projects
                </span>
              </Link>
            </div>

            {/* Category Badge */}
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/30">
                <Award className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-semibold">
                  {project.category}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl leading-relaxed text-gray-100">
              {project.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-200">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{project.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{project.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{project.teamSize}</span>
              </div>
              <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Project Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Project Overview
              </h2>

              {/* Project Stats */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Project Details
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <span className="font-medium">{project.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="font-medium text-green-600">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Client:</span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-brand-50 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="bg-gradient-to-r from-brand-50 to-brand-400 p-8 rounded-lg text-white mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">
                      {project.client.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <blockquote className="text-lg italic mb-4">
                      &ldquo;{project.testimonial}&rdquo;
                    </blockquote>
                    <cite className="text-sm font-medium">
                      — {project.client}
                    </cite>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Project Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year:</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Area:</span>
                    <span className="font-medium">{project.area}</span>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Interested in Similar Work?
                </h3>
                <p className="text-sm text-gray-300 mb-6">
                  Let&apos;s discuss how we can bring your vision to life with
                  our expertise.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full bg-brand-50 text-white px-4 py-2 rounded-lg hover:bg-brand-100 transition-colors text-sm font-medium"
                >
                  Start Your Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Challenges
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Our Solutions
              </h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Related Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/project/${relatedProject.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="overflow-hidden">
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-brand-50 font-medium">
                      {relatedProject.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {relatedProject.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-400 transition-colors">
                    {relatedProject.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brand-50 to-brand-400">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Let&apos;s collaborate to bring your vision to life with our
            expertise in architecture, design, and construction excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group bg-white text-brand-50 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center justify-center space-x-3">
                <span>Get Started</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-50 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
