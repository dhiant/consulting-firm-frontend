import Image from "next/image";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const coreValues = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Our mission is to serve as your comprehensive solution for all engineering needs. With a highly skilled in-house team comprising consultants, contractors, and interior designers, we are committed to delivering a seamless experience. We expertly manage every phase of your project with precision and care, ensuring a smooth and hassle-free process from start to finish.",
    highlight:
      "AIMTERIOR is dedicated to providing stellar results with wholehearted commitment to every project and to surpassing expectations. By focusing on quality, efficiency, and attention to detail, AIMTERIOR ensures that every project is accomplished with the highest standards of excellence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "AIMTERIOR is a trusted partner, known for its reliability and efficiency in delivering high-quality services. With a strong commitment to each project and dedicated resources, AIMTERIOR ensures a positive and accommodating experience. We take pride in building long-term relationships with our clients by consistently meeting their expectations and delivering results that stand the test of time.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "At AIMTERIOR, we believe in creating a healthy work environment where our team thrives both professionally and personally. We foster a culture of work-life balance, allowing our team to love what they do while maintaining their well-being. Our commitment to excellence is reflected in our unwavering focus on listening to our clients' needs and delivering tailored solutions. With complete transparency in all our processes, we ensure our clients are always informed and confident in our work, building trust and long-lasting partnerships.",
  },
];

const achievements = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years of Excellence" },
  { number: "200+", label: "Satisfied Clients" },
  { number: "98%", label: "Success Rate" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] bg-black text-white flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about.jpg"
            alt="AIMTERIOR - Crafting Innovative Design Solutions"
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-6 h-full flex flex-col justify-center max-w-screen-xl">
          <div className="max-w-4xl animate-slide-up">
            <h1
              className="text-display-lg md:text-display-xl mb-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Crafting Innovative Design and Build Solutions
            </h1>
            <p
              className="text-body-lg md:text-heading-md text-gray-200 mb-8 max-w-3xl animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              Experienced professionals dedicated to providing expert solutions
              with precision and care, transforming visions into exceptional
              realities across Dubai and beyond.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 hover-lift shadow-md hover:shadow-lg"
              >
                Get Started Today
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white hover:bg-white hover:text-black rounded-lg transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-md mb-6 text-gray-900 animate-slide-up">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8"></div>
            </div>

            <div className="space-y-8 text-body-lg text-gray-700 leading-relaxed">
              <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="text-2xl font-bold text-primary">
                  AIMTERIOR
                </span>{" "}
                is a Dubai-based company that specializes in providing
                comprehensive consultation services for construction approvals,
                interior design, and design-build projects, all in compliance
                with Dubai's regulatory authorities. With a team of experienced
                professionals, we manage every stage of the project
                seamlessly—from securing necessary government permits and
                approvals to delivering meticulous design and planning services.
              </p>

              <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                We offer hassle-free solutions throughout the entire process,
                catering to projects of any complexity or scope across Dubai and
                ensuring smooth execution from start to finish. Our approach is
                built on a foundation of trust, transparency, and collaboration.
                We understand the intricacies of Dubai's regulatory environment
                and are committed to ensuring that all our clients' projects
                comply with the highest standards.
              </p>

              <div
                className="bg-gray-50 p-8 rounded-xl animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <p className="text-center text-lg italic text-gray-800">
                  "From residential to commercial developments, our expertise
                  spans a wide range of fields, including hospitality, retail,
                  and office spaces. We prioritize clear communication and work
                  closely with our clients to understand their vision, ensuring
                  that every detail is carefully considered and executed."
                </p>
              </div>

              <p className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                At <span className="font-bold text-primary">AIMTERIOR</span>, we
                believe that every project is an opportunity to create something
                exceptional. We combine innovation with industry expertise to
                provide practical, sustainable solutions that meet the evolving
                needs of our clients. By leveraging the latest technologies and
                design trends, we ensure that each project not only meets
                regulatory requirements but also aligns with our clients'
                long-term goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6 max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-heading-xl mb-4">Our Track Record</h2>
            <p className="text-body-lg text-blue-100 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and client
              satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-display-md mb-6 animate-slide-up">
              What Drives AIMTERIOR
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we
              undertake
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover-lift h-full">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-primary/20 rounded-lg mr-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-heading-md font-semibold">
                        {value.title}
                      </h3>
                    </div>

                    <p className="text-body-md text-gray-300 leading-relaxed mb-6">
                      {value.description}
                    </p>

                    {value.highlight && (
                      <div className="pt-6 border-t border-gray-700">
                        <p className="text-body-sm text-blue-200 italic leading-relaxed">
                          {value.highlight}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6 max-w-screen-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-md mb-6 text-gray-900 animate-slide-up">
              Ready to Transform Your Vision?
            </h2>
            <p
              className="text-body-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Whether you're embarking on a new construction, renovation, or
              specialized build, we're dedicated to delivering results that
              stand the test of time.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 hover-lift shadow-md hover:shadow-lg"
              >
                Start Your Project
                <CheckCircle className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary bg-transparent border-2 border-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
