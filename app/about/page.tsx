import Image from "next/image";
// import InspiringLuxury from "./components/inspiring-luxury";
// import { CompanyTimeline } from "./components/company-timeline";
import { Construction, Leaf, ShieldCheck, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

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

      {/* Who We Are */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-semibold text-primary mb-6">Who We Are</h2>
        <div className="grid md:grid-cols-2 gap-8 text-muted-foreground text-lg">
          <p>
            Founded in 20XX, our firm provides full-service consulting across
            all phases of construction, from project planning and cost
            estimation to on-site supervision and project delivery.
          </p>
          <p>
            Our diverse team of engineers, architects, and project managers
            ensures each project meets high standards in quality, time, and
            cost-efficiency.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-background mx-auto max-w-screen-xl">
        <h2 className="text-3xl font-semibold text-center text-primary mb-10">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
          <Card className="text-center  border-primary">
            <CardContent className="p-6">
              <ShieldCheck className="mx-auto text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="text-muted-foreground mt-2">
                We operate with honesty and transparency in all aspects of our
                work.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center border-primary">
            <CardContent className="p-6">
              <Construction className="mx-auto text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold">Expertise</h3>
              <p className="text-muted-foreground mt-2">
                Our expert team delivers precise, data-driven construction
                guidance.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center border-primary">
            <CardContent className="p-6">
              <Users className="mx-auto text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold">Teamwork</h3>
              <p className="text-muted-foreground mt-2">
                Collaboration drives every successful project we undertake.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center border-primary">
            <CardContent className="p-6">
              <Leaf className="mx-auto text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="text-muted-foreground mt-2">
                We promote sustainable practices that support long-term
                development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-primary">15+</h3>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">200+</h3>
            <p className="text-muted-foreground">Completed Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">50+</h3>
            <p className="text-muted-foreground">Qualified Experts</p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      {/* <CompanyTimeline /> */}

      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          Our Teams
        </h2>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
}
