import { ArrowUpRight, Eye, Heart, Target } from "lucide-react";
import Image from "next/image";

const sections = [
  {
    icon: Target,
    title: "Our Mission",
    content: [
      "Our mission is to serve as your comprehensive solution for all engineering needs. With a highly skilled in-house team comprising consultants, contractors, and interior designers, we are committed to delivering a seamless experience. We expertly manage every phase of your project with precision and care, ensuring a smooth and hassle-free process from start to finish.",
      "AIMTERIOR is dedicated to providing stellar results with wholehearted commitment to every project and to surpassing expectations. By focusing on quality, efficiency, and attention to detail, AIMTERIOR ensures that every project is accomplished with the highest standards of excellence.",
    ],
  },
  {
    icon: Eye,
    title: "Our Vision",
    content: [
      "AIMTERIOR is a trusted partner, known for its reliability and efficiency in delivering high-quality services. With a strong commitment to each project and dedicated resources, AIMTERIOR ensures a positive and accommodating experience. We take pride in building long-term relationships with our clients by consistently meeting their expectations and delivering results that stand the test of time.",
    ],
  },
  {
    icon: Heart,
    title: "Our Values",
    content: [
      "At AIMTERIOR, we believe in creating a healthy work environment where our team thrives both professionally and personally. We foster a culture of work-life balance, allowing our team to love what they do while maintaining their well-being. Our commitment to excellence is reflected in our unwavering focus on listening to our clients needs and delivering tailored solutions. With complete transparency in all our processes, we ensure our clients are always informed and confident in our work, building trust and long-lasting partnerships.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Dynamic Hero Section */}
      <section className="relative h-[100vh] bg-black to-white text-white flex justify-between items-center ">
        <div className="container mx-auto max-w-screen-xl">
          <div className="absolute inset-0">
            <Image
              src="/images/about.jpg"
              alt="Consturction Site Showcase"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
              loading="eager"
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-7xl font-bold mb-4 transition-all duration-700">
              Crafting Innovative Design
            </h1>{" "}
            <p className="text-lg mb-8 transition-all duration-700 delay-100">
              Experienced professionals dedicated to providing expert solutions
              with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-3 px-6 max-w-screen-xl mx-auto text-center md:text-left mb-12 mt-12">
        <h2 className="text-[40px] font-semibold text-primary mb-6">
          Who We Are
        </h2>
        <div className=" text-lg">
          <p className="mb-3 text-justify">
            <span className="text-bold text-black font-bold">AIMTERIOR</span> is
            a Dubai-based company that specializes in providing comprehensive
            consultation services for construction approvals, interior design,
            and design-build projects, all in compliance with Dubai&apos;s
            regulatory authorities. With a team of experienced professionals, we
            manage every stage of the project seamlessly from securing necessary
            government permits and approvals to delivering meticulous design and
            planning services. We offer hassle-free solutions throughout the
            entire process, catering to projects of any complexity or scope
            across Dubai and ensuring smooth execution from start to finish.
          </p>
          <p className="mb-3 text-justify">
            Our approach is built on a foundation of trust, transparency, and
            collaboration. We understand the intricacies of Dubai&apos;s
            regulatory environment and are committed to ensuring that all our
            clients’ projects comply with the highest standards. From
            residential to commercial developments, our expertise spans a wide
            range of fields, including hospitality, retail, and office spaces.
            We prioritize clear communication and work closely with our clients
            to understand their vision, ensuring that every detail is carefully
            considered and executed. With a focus on efficiency and excellence,
            we are your trusted partner in achieving successful project outcomes
            on time and within budget.
          </p>

          <p className="text-justify">
            At <span className="text-bold text-black font-bold">AIMTERIOR</span>
            , we believe that every project is an opportunity to create
            something exceptional. We combine innovation with industry expertise
            to provide practical, sustainable solutions that meet the evolving
            needs of our clients. By leveraging the latest technologies and
            design trends, we ensure that each project not only meets regulatory
            requirements but also aligns with our clients long-term goals.
            Whether you&apos;re embarking on a new construction, renovation, or
            a specialized build, we are dedicated to delivering results that
            stand the test of time
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-[#0D1B2A] mx-auto max-w-screen-xl text-white mb-6 rounded-lg">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What Drives AIMTERIOR
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.title}
                className={`
                relative group h-full
                ${
                  index < sections.length - 1
                    ? "lg:border-r-2 lg:border-white/20 lg:pr-8"
                    : ""
                }
                hover:bg-white/5 transition-all duration-300 rounded-lg p-6
              `}
              >
                {/* Icon and Title */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/20 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {section.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/40 ml-auto opacity-0 group-hover:opacity-100 group-hover:text-blue-300 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-white/90 leading-relaxed text-lg group-hover:text-white transition-colors duration-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/60 text-sm font-bold group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
                  {index + 1}
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        {/* <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-white/40 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
