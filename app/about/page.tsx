import Image from "next/image";
import InspiringLuxury from "./components/inspiring-luxury";
import { CompanyTimeline } from "./components/company-timeline";

export default function AboutPage() {
  return (
    <div>
      {/* Dynamic Hero Section */}
      <section className="relative h-[70vh] bg-gray-800 to-white text-white flex justify-between items-center">
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
            <h1 className="text-5xl font-bold mb-4">who we are</h1>
            <p className="text-xl mb-8">
              Innovative designs that reflect your style and enhance your life.
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <CompanyTimeline />

      {/* Team Profiles */}
      {/* <section className="mb-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Jane Doe", role: "Founder & Lead Designer" },
            { name: "John Smith", role: "Senior Interior Architect" },
            { name: "Emily Brown", role: "Color Specialist" },
            { name: "Michael Johnson", role: "Project Manager" },
            { name: "Sarah Lee", role: "Sustainable Design Expert" },
            { name: "David Wilson", role: "Client Relations Manager" },
          ].map((member, index) => (
            <Card key={index}>
              <Image
                src={`/placeholder.svg?height=300&width=300&text=${member.name}`}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>{member.role}</CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Achievements Showcase */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Best Construction Site Firm 2023",
            "Sustainable Design Award 2022",
            "Innovation in Commercial Spaces 2021",
            "Client Satisfaction Excellence 2020",
            "Young Designer of the Year 2019",
          ].map((achievement, index) => (
            <Card key={index}>
              <CardContent className="text-center py-8">
                {achievement}
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* insipring luxury  */}
      <InspiringLuxury />

      {/* Culture Description */}
      {/* <section>
        <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
        <Card>
          <CardContent className="prose max-w-none">
            <p>
              {
                "At Construction Site Co., we believe in creating spaces that inspire and transform. Our culture is built on creativity, collaboration, and a deep commitment to our clients' visions."
              }
            </p>
            <p>We value:</p>
            <ul>
              <li>Innovation in design</li>
              <li>Sustainability and eco-consciousness</li>
              <li>Attention to detail</li>
              <li>Open communication</li>
              <li>Continuous learning and growth</li>
            </ul>
            <p>
              {
                "Our team works in a supportive environment that encourages bold ideas and pushes the boundaries of Construction Site. We're not just colleagues; we're a family of passionate creatives dedicated to making the world more beautiful, one space at a time."
              }
            </p>
          </CardContent>
        </Card>
      </section> */}
    </div>
  );
}
