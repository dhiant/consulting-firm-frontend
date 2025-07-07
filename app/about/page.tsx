import Image from "next/image";

// const people = [
//   {
//     id: 1,
//     name: "John Doe",
//     designation: "Software Engineer",
//     image:
//       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   },
//   {
//     id: 2,
//     name: "Robert Johnson",
//     designation: "Product Manager",
//     image:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     designation: "Data Scientist",
//     image:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     designation: "UX Designer",
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 5,
//     name: "Tyler Durden",
//     designation: "Soap Developer",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   },
//   {
//     id: 6,
//     name: "Dora",
//     designation: "The Explorer",
//     image:
//       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
//   },
// ];

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
            <h1 className="text-5xl font-bold mb-4">
              {" "}
              Crafting Innovative Design and Build Solutions
            </h1>
            <p className="text-xl mb-8">
              Experienced professionals dedicated to providing expert solutions
              with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-3 px-6 max-w-screen-xl mx-auto text-center md:text-left mb-12 mt-12">
        <h2 className="text-[40px] font-semibold text-primary mb-6">Who We Are</h2>
        <div className=" text-lg">
          <p className="mb-3">
            <span className="text-bold text-black font-bold font-sans ">AIMTERIOR</span> is a
            Dubai-based company that specializes in providing comprehensive
            consultation services for construction approvals, interior design,
            and design-build projects, all in compliance with Dubai&apos;s
            regulatory authorities. With a team of experienced professionals, we
            manage every stage of the project seamlessly—from securing necessary
            government permits and approvals to delivering meticulous design and
            planning services. We offer hassle-free solutions throughout the
            entire process, catering to projects of any complexity or scope
            across Dubai and ensuring smooth execution from start to finish.
          </p>
          <p className="mb-3">
            Our approach is built on a foundation of trust, transparency, and
            collaboration. We understand the intricacies of Dubai&apos;s
            regulatory environment and are committed to ensuring that all our
            clients’ projects comply with the highest standards. From
            residential to commercial developments, our expertise spans a wide
            range of fields, including hospitality, retail, and office spaces.
            We prioritize clear communication and work closely with our clients
            to understand their vision, ensuring that every detail is carefully
            considered and executed. With a focus on efficiency and excellence,
            we are your trusted partner in achieving successful project
            outcomes—on time and within budget.
          </p>

          <p>
            At <span className="text-bold text-black font-bold">AIMTERIOR</span>, we
            believe that every project is an opportunity to create something
            exceptional. We combine innovation with industry expertise to
            provide practical, sustainable solutions that meet the evolving
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
      <section className="py-3 px-6  bg-[#0D1B2A] mx-auto max-w-screen-xl text-white mb-6">
        <h2 className="text-[40px] font-semibold text-white mb-10">
          What Drives AIMTERIOR
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[20px] mx-auto">
          <div className="border-r-2 mr-3">
            <h1>Our Mission</h1>
            <p>
              Our mission is to serve as your comprehensive solution for all
              engineering needs. With a highly skilled in-house team comprising
              consultants, contractors, and interior designers, we are committed
              to delivering a seamless experience. We expertly manage every
              phase of your project with precision and care, ensuring a smooth
              and hassle-free process from start to finish.
            </p>
            <br />
            <div className=" mt-2 ">
              AIMTERIOR is dedicated to providing stellar results with wholehearted
              commitment to every project and to surpassing expectations. By
              focusing on quality, efficiency, and attention to detail, AIMTERIOR
              ensures that every project is accomplished with the highest
              standards of excellence.
            </div>
          </div>
          <div className="border-r-2 mr-3">
            <h1>Our Vision</h1>
            <p>
              AIMTERIOR is a trusted partner, known for its reliability and efficiency
              in delivering high-quality services. With a strong commitment to
              each project and dedicated resources, AIMTERIOR ensures a positive and
              accommodating experience. We take pride in building long-term
              relationships with our clients by consistently meeting their
              expectations and delivering results that stand the test of time.
            </p>
          </div>
          <div>
            <h1>Our Values</h1>
            <p>
              At AIMTERIOR, we believe in creating a healthy work environment where
              our team thrives both professionally and personally. We foster a
              culture of work-life balance, allowing our team to love what they
              do while maintaining their well-being. Our commitment to
              excellence is reflected in our unwavering focus on listening to
              our clients needs and delivering tailored solutions. With complete
              transparency in all our processes, we ensure our clients are
              always informed and confident in our work, building trust and
              long-lasting partnerships.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
