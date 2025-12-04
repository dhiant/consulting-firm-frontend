// import SlideUpAnimation from "@/components/animations/slide-up-variants";
// import ZoomInAnimation from "@/components/animations/zoom-in-variants";
// import { Testimonials } from "@/components/testimonials";
import HeroCarousel from "./hero-carousel";
import SectorsSection from "./carousel";
import ServicePreview from "./servicespreview";
import ServiceContext from "./serviceContext";
import ClientFeedback from "./client-feedback";

const projects = [
  {
    id: 1,
    title: "Authority Approvals",
    category: "Approval",
    description:
      "At AIMTERIOR, we provide complete solutions for obtaining authority approvals for fit-out, construction, and renovation projects across Dubai...",
    image: "/images/project1.jpg",
    testimonial:
      "The team transformed my small apartment into a spacious, functional haven. I love coming home now!",
  },
  {
    id: 2,
    title: "2D & 3D Drawings",
    category: "Design",
    description:
      "Our architectural team develops functional, code-compliant, and aesthetically sound layouts for all types of properties...",
    image: "/images/project6.jpg",

    testimonial:
      "Our mountain home is the perfect getaway. It's warm, inviting, and beautifully integrated with the natural surroundings.",
  },
  {
    id: 3,
    title: "Project Execution",
    category: "Fit-out",
    description:
      "Our team offers a comprehensive range of fit-out and construction services tailored to transform and enhance your existing residential and commercial properties...",
    image: "/images/project2.jpg",
    testimonial:
      "Our new office has boosted team morale and impressed our clients. It's both beautiful and environmentally responsible.",
  },
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
              <div className="w-2 h-2 bg-brand-50 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-brand-50 uppercase tracking-wider">
                Our Expertise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {"Find What You're Looking"} <br />
              <span className="bg-gradient-to-r from-brand-50 to-brand-400 bg-clip-text text-transparent">
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
                  modalContent={
                    card.title === "Authority Approvals" ? (
                      <div>
                        <h4 className="mt-0 font-semibold text-gray-900">
                          Authority Approvals in Dubai
                        </h4>
                        <p className="text-gray-700">
                          At AIMTERIOR, we provide complete solutions for
                          obtaining authority approvals for fit-out,
                          construction, and renovation projects across Dubai.
                          Whether you&apos;re a contractor, consultant, or
                          business owner, we take care of everything — from
                          preparing drawings and documents to securing final
                          approvals and completion certificates.
                        </p>
                        <p className="text-gray-700">
                          We coordinate with all major government and
                          semi-government authorities, ensuring your project
                          meets every legal and technical requirement.
                        </p>
                        <h4 className="mt-4 font-semibold text-gray-900">
                          Authorities We Work With
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>✔️ Dubai Municipality (DM)</li>
                          <li>✔️ Dubai Development Authority (DDA)</li>
                          <li>✔️ Trakhees</li>
                          <li>✔️ Dubai Civil Defense (DCD)</li>
                          <li>
                            ✔️ Dubai Electricity and Water Authority (DEWA)
                          </li>
                          <li>✔️ Dubai Silicon Oasis Authority (DIEZ)</li>
                          <li>✔️ EMAAR</li>
                          <li>✔️ Jebel Ali Free Zone Authority (JAFZA)</li>
                          <li>✔️ Nakheel</li>
                          <li>✔️ TECOM</li>
                          <li>✔️ Roads and Transport Authority (RTA)</li>
                          <li>✔️ Food and Safety Department</li>
                          <li>✔️ Shisha License Approvals</li>
                          <li>✔️ Swimming Pool & Spa Approvals</li>
                          <li>✔️ Third Party Consultant Coordination</li>
                          <li>✔️ Other Specialized Approvals (as required)</li>
                        </ul>
                        <h4 className="mt-4 font-semibold text-gray-900">
                          What We Do
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Prepare detailed and compliant drawings</li>
                          <li>
                            Submit and track applications with relevant
                            authorities
                          </li>
                          <li>
                            Liaise with authority engineers and consultants
                          </li>
                          <li>Manage site inspections and modifications</li>
                          <li>
                            Secure final approvals and completion certificates
                          </li>
                        </ul>
                        <h4 className="mt-4 font-semibold text-gray-900">
                          Why Choose AIMTERIOR
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>
                            ✔️ One-stop approval service for all Dubai
                            authorities
                          </li>
                          <li>✔️ Expert team with deep regulatory knowledge</li>
                          <li>
                            ✔️ End-to-end handling of all documentation and
                            submissions
                          </li>
                          <li>
                            ✔️ Strong relationships with authority departments
                            for faster processing
                          </li>
                          <li>
                            ✔️ Trusted by contractors, consultants, and
                            businesses across the UAE
                          </li>
                        </ul>
                      </div>
                    ) : card.title === "2D & 3D Drawings" ? (
                      <div>
                        <h4 className="mt-0 font-semibold text-gray-900">
                          Our Drawing Capabilities Include:
                        </h4>
                        <h5 className="mt-3 font-semibold text-gray-900">
                          Architectural Drawings
                        </h5>
                        <p className="text-gray-700">
                          Our architectural team develops functional,
                          code-compliant, and aesthetically sound layouts for
                          all types of properties — residential, commercial,
                          industrial, or mixed-use. From concept plans to
                          detailed working drawings, we ensure every element
                          aligns with authority guidelines and your business
                          objectives.
                        </p>
                        <h5 className="mt-3 font-semibold text-gray-900">
                          MEP (Mechanical, Electrical & Plumbing) Drawings
                        </h5>
                        <p className="text-gray-700">
                          We create highly detailed MEP drawings that account
                          for the seamless integration of utilities and
                          technical systems within your building. Our designs
                          prioritize safety, efficiency, and future maintenance,
                          ensuring compatibility with both authority standards
                          and real-world use.
                        </p>
                        <h5 className="mt-3 font-semibold text-gray-900">
                          Structural Drawings & Calculations
                        </h5>
                        <p className="text-gray-700">
                          Our structural engineers go beyond basic layouts. We
                          produce comprehensive structural plans, analysis
                          models, and load calculations that ensure the safety,
                          durability, and compliance of your building structure.
                          Every drawing is backed by robust engineering logic
                          and software-driven precision.
                        </p>
                        <h4 className="mt-4 font-semibold text-gray-900">
                          Additional Support Services:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>
                            3D Models & Visualizations — Visual clarity through
                            digital models, helping stakeholders and authorities
                            better understand the project scope.
                          </li>
                          <li>
                            As-Built Drawings — Accurate post-construction
                            documentation reflecting final conditions on-site.
                          </li>
                          <li>
                            Technical Submissions & Compliance Documentation —
                            Preparation of all required documents for authority
                            review and NOCs (No Objection Certificates).
                          </li>
                          <li>
                            Coordination with Third-Party Consultants — Seamless
                            integration with safety consultants, peer reviewers,
                            and other external stakeholders.
                          </li>
                        </ul>
                        <h4 className="mt-4 font-semibold text-gray-900">
                          Why Clients Trust Us:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>
                            Complete Authority Knowledge – We’re fully familiar
                            with the technical standards of all major Dubai
                            authorities.
                          </li>
                          <li>
                            In-House Coordination – Our architectural, MEP, and
                            structural teams work together under one roof,
                            reducing errors and rework.
                          </li>
                          <li>
                            Approval-Ready Quality – Drawings are developed
                            specifically for submission, minimizing revision
                            cycles.
                          </li>
                          <li>
                            Time-Efficient – We meet tight deadlines without
                            compromising on accuracy or compliance.
                          </li>
                          <li>
                            Client-Focused Approach – Every drawing set is
                            tailored to your project goals, site conditions, and
                            regulatory pathway.
                          </li>
                        </ul>
                        <p className="text-gray-700 mt-3">
                          No matter the scale or complexity of your project, we
                          deliver drawings that are accurate, compliant, and
                          designed for approval success.
                        </p>
                        <p className="text-gray-700">
                          Contact us today to discuss your project and learn how
                          we can support your next submission.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <h4 className="mt-0 font-semibold text-gray-900">
                          Construction & Fit-Out Services
                        </h4>
                        <p className="text-gray-700">
                          Our team offers a comprehensive range of fit-out and
                          construction services tailored to transform and
                          enhance your existing residential and commercial
                          properties. Whether you are planning to extend or
                          renovate a villa, upgrade an office space, or redesign
                          a restaurant, café, spa, or salon, we deliver
                          customized solutions that meet your unique needs,
                          budget, and vision.
                        </p>
                        <h4 className="mt-4 font-semibold text-gray-900">
                          Residential Construction
                        </h4>
                        <p className="text-gray-700">
                          For villas and private residences, we specialize in:
                        </p>
                        <h5 className="mt-3 font-semibold text-gray-900">
                          Extensions and Structural Modifications
                        </h5>
                        <p className="text-gray-700">
                          Whether you want to add new rooms, expand living
                          spaces, or modify the layout of your villa, our
                          experienced construction team manages the entire
                          process—from detailed planning to final execution. We
                          ensure that every addition seamlessly integrates with
                          your existing structure, enhancing both functionality
                          and aesthetics.
                        </p>
                        <h5 className="mt-3 font-semibold text-gray-900">
                          Outdoor Enhancements
                        </h5>
                        <p className="text-gray-700">
                          Enhance your property’s outdoor areas with expertly
                          constructed swimming pools, pergolas, car sheds,
                          patios, and landscaped gardens. We focus on creating
                          inviting, beautiful outdoor spaces that complement
                          your lifestyle and add value to your home.
                        </p>
                        <h5 className="mt-3 font-semibold text-gray-900">
                          Renovations and Upgrades
                        </h5>
                        <p className="text-gray-700">
                          Refresh interiors with comprehensive renovation work,
                          including flooring, ceiling, partition walls, and
                          façade upgrades—all executed to the highest standards
                          and compliant with Dubai’s building regulations.
                        </p>
                        <h4 className="mt-4 font-semibold text-gray-900">
                          Commercial Construction
                        </h4>
                        <p className="text-gray-700">
                          For businesses and commercial properties, our
                          construction services cover a wide variety of sectors:
                        </p>
                        <h5 className="mt-3 font-semibold text-gray-900">
                          Office Renovations and Fit-Outs
                        </h5>
                        <p className="text-gray-700">
                          We work with you to design and build workspaces that
                          enhance employee productivity and reflect your brand
                          identity. Our services include partitioning, furniture
                          installation, lighting solutions, and
                          mechanical/electrical system upgrades—all tailored for
                          efficiency and style.
                        </p>
                        <h5 className="mt-3 font-semibold text-gray-900">
                          Warehouse Modifications
                        </h5>
                        <p className="text-gray-700">
                          Our team handles warehouse construction needs,
                          including mezzanine floor additions, multi-level
                          racking installations, and layout redesign to optimize
                          storage capacity and workflow efficiency.
                        </p>
                        <h5 className="mt-3 font-semibold text-gray-900">
                          Hospitality and Wellness Facilities
                        </h5>
                        <p className="text-gray-700">
                          From restaurants and cafés to spas and salons, we
                          provide full-service construction and fit-out
                          solutions. We understand the importance of creating
                          welcoming, functional environments that comply with
                          local health and safety standards, helping you attract
                          and retain customers.
                        </p>
                        <h5 className="mt-3 font-semibold text-gray-900">
                          Retail and Commercial Spaces
                        </h5>
                        <p className="text-gray-700">
                          We undertake interior and exterior construction
                          projects for retail outlets, showrooms, and other
                          commercial venues, ensuring spaces are visually
                          appealing and operationally effective.
                        </p>
                        <h4 className="mt-4 font-semibold text-gray-900">
                          Our Process
                        </h4>
                        <p className="text-gray-700">
                          We believe that successful construction projects are
                          built on clear communication, thorough planning, and
                          skilled execution. Our team collaborates closely with
                          you from the initial consultation through design,
                          permitting, construction, and final handover.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>
                            Detailed Planning & Consultation — We begin with a
                            thorough understanding of your goals, site
                            conditions, and regulatory requirements.
                          </li>
                          <li>
                            Permits & Approvals Management — Our experts
                            coordinate with local authorities to obtain all
                            necessary permits, ensuring compliance and avoiding
                            delays.
                          </li>
                          <li>
                            Quality Control & Skilled Craftsmanship — Throughout
                            construction, we maintain strict quality standards,
                            using premium materials and skilled tradespeople to
                            deliver durable and precise workmanship.
                          </li>
                          <li>
                            Timely Completion & Handover — Project management
                            practices and clear timelines keep your project on
                            track, minimizing disruptions and ensuring you can
                            move into your upgraded space as planned.
                          </li>
                        </ul>
                        <h4 className="mt-4 font-semibold text-gray-900">
                          Why Choose Us?
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>
                            Tailored Solutions: Every project is customized to
                            meet your specific needs, preferences, and budget.
                          </li>
                          <li>
                            Expert Team: Skilled architects, engineers, and
                            builders collaborate to deliver exceptional results.
                          </li>
                          <li>
                            Compliance & Safety: Strict adherence to Dubai’s
                            building codes and safety standards.
                          </li>
                          <li>
                            Comprehensive Service: From design and permits to
                            construction and finishing, we handle it all.
                          </li>
                          <li>
                            Customer-Centric Approach: Transparent communication
                            and ongoing updates throughout the project.
                          </li>
                          <li>
                            Long-Term Support: Post-completion assistance and
                            maintenance options available.
                          </li>
                        </ul>
                        <p className="text-gray-700 mt-3">
                          At every stage, we are committed to quality,
                          professionalism, and delivering spaces that exceed
                          your expectations. Whether a small upgrade or a major
                          transformation, we help you realize your vision with
                          precision and care.
                        </p>
                        <p className="text-gray-700">
                          Ready to start your construction project? Contact us
                          today to schedule a consultation and discover how we
                          can bring your ideas to life.
                        </p>
                      </div>
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative py-20 bg-gradient-to-r from-brand-50 to-brand-400 overflow-hidden">
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

      <ClientFeedback />

      <ServiceContext />

      <SectorsSection />
    </div>
  );
}
