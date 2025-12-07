import Image from "next/image";
import { CompanyTimeline } from "./components/company-timeline";
import ScrollIndicator from "@/components/scroll-indicator";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative h-screen text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/about.png"
            alt="AIMTERIOR Design Excellence"
            fill
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-20 h-20 border border-white/20 rounded-full opacity-30"></div>

        <div className="relative container mx-auto px-6 h-full flex items-center max-w-screen-xl z-10">
          <div className="max-w-4xl">
            {/* Brand Badge */}
            <div className="mb-6 animate-fade-in">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-gradient-to-r from-brand-50 to-brand-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold tracking-wider uppercase">
                  About AIMTERIOR
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up">
              {"Crafting Tomorrow's"}
              <span className="block bg-gradient-to-r from-brand-50 via-brand-200 to-brand-400 bg-clip-text text-transparent">
                Architectural Legacy
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed text-gray-100 animate-slide-up-delay">
              Where vision meets expertise. AIMTERIOR transforms architectural
              dreams into stunning realities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay">
              <Link
                href="#our-journey"
                className="group bg-gradient-to-r from-brand-50 to-brand-400 hover:from-brand-100 hover:to-brand-400 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center space-x-2">
                  <span>Our Story</span>
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </span>
              </Link>
              <Link
                href="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="hidden md:grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Who We Are */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-6">
              <div className="w-2 h-2 bg-brand-50 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Who We{" "}
              <span className="bg-gradient-to-r from-brand-50 to-brand-400 bg-clip-text text-transparent">
                Are
              </span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Company Introduction */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-brand-400 rounded-xl flex items-center justify-center flex-shrink-0">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h1m4 0h1"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Dubai-Based Excellence
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-bold text-brand-50">AIMTERIOR</span>{" "}
                      is a Dubai-based company that specializes in providing
                      comprehensive consultation services for construction
                      approvals, interior design, and design-build projects, all
                      in compliance with Dubai&apost;s regulatory authorities.
                      With a team of experienced professionals, we manage every
                      stage of the project seamlessly—from securing necessary
                      government permits and approvals to delivering meticulous
                      design and planning services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust & Collaboration */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-brand-400 rounded-xl flex items-center justify-center flex-shrink-0">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Trust & Transparency
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our approach is built on a foundation of trust,
                      transparency, and collaboration. We understand the
                      intricacies of Dubai&apos;s regulatory environment and are
                      committed to ensuring that all our clients projects comply
                      with the highest standards. From residential to commercial
                      developments, our expertise spans hospitality, retail, and
                      office spaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Innovation & Excellence */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-brand-400 rounded-xl flex items-center justify-center flex-shrink-0">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Innovation & Excellence
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      At{" "}
                      <span className="font-bold text-brand-50">AIMTERIOR</span>
                      , we believe that every project is an opportunity to
                      create something exceptional. We combine innovation with
                      industry expertise to provide practical, sustainable
                      solutions that meet the evolving needs of our clients. By
                      leveraging the latest technologies and design trends, we
                      ensure each project stands the test of time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about2.png"
                  alt="AIMTERIOR Office"
                  width={600}
                  height={700}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="text-xl font-bold mb-2">
                      15+ Years of Excellence
                    </h4>
                    <p className="text-sm text-gray-200">
                      Delivering exceptional architectural and interior design
                      solutions across Dubai
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-50">500+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Projects Delivered
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-50">98%</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-32 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full opacity-10 blur-xl"></div>
              <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzM3NEEzNiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHN2Zz4K')] opacity-30"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-brand-50 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                Our Foundation
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What Drives{" "}
              <span className="bg-gradient-to-r from-brand-200 to-brand-400 bg-clip-text text-transparent">
                AIMTERIOR
              </span>
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="group relative">
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-50 to-brand-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  Our Mission
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm mb-6">
                  Our mission is to serve as your comprehensive solution for all
                  engineering needs. With a highly skilled in-house team
                  comprising consultants, contractors, and interior designers,
                  we are committed to delivering a seamless experience. We
                  expertly manage every phase of your project with precision and
                  care, ensuring a smooth and hassle-free process from start to
                  finish.
                </p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  AIMTERIOR is dedicated to providing stellar results with
                  wholehearted commitment to every project and to surpassing
                  expectations. By focusing on quality, efficiency, and
                  attention to detail, AIMTERIOR ensures that every project is
                  accomplished with the highest standards of excellence.
                </p>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-50 to-brand-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                  Our Vision
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  AIMTERIOR is a trusted partner, known for its reliability and
                  efficiency in delivering high-quality services. With a strong
                  commitment to each project and dedicated resources, AIMTERIOR
                  ensures a positive and accommodating experience. We take pride
                  in building long-term relationships with our clients by
                  consistently meeting their expectations and delivering results
                  that stand the test of time.
                </p>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Values */}
            <div className="group relative">
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-50 to-brand-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  Our Values
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  At AIMTERIOR, we believe in creating a healthy work
                  environment where our team thrives both professionally and
                  personally. We foster a culture of work-life balance, allowing
                  our team to love what they do while maintaining their
                  well-being. Our commitment to excellence is reflected in our
                  unwavering focus on listening to our clients needs and
                  delivering tailored solutions. With complete transparency in
                  all our processes, we ensure our clients are always informed
                  and confident in our work, building trust and long-lasting
                  partnerships.
                </p>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section
        id="our-journey"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-6">
              <div className="w-2 h-2 bg-brand-50 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-brand-50 uppercase tracking-wider">
                Our Journey
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Company{" "}
              <span className="bg-gradient-to-r from-brand-50 to-brand-400 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey of growth, innovation, and exceptional project delivery
            </p>
          </div>
        </div>
        <CompanyTimeline />
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-50 to-brand-400 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Passionate professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rush K.",
                role: "Managing Director",
                experience: "10+ Years",
              },
              {
                name: "Ann E.",
                role: "Principal Architect",
                experience: "9+ Years",
              },
              {
                name: "J. Harvey",
                role: "Design Architect",
                experience: "7+ Years",
              },
              {
                name: "C. Ivan",
                role: "Structural Engineer",
                experience: "6+ Years",
              },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-200 text-sm mb-2">{member.role}</p>
                  <p className="text-blue-100 text-xs">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
