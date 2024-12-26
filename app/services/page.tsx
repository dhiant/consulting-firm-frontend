"use client";
import Image from "next/image";
import {
  Bolt,
  BrickWall,
  Construction,
  Drill,
  Hammer,
  HardHat,
  Pickaxe,
  Wrench,
} from "lucide-react";
import ServiceList from "./components/service-list";

// const services = [
//   {
//     title: "Residential Design",
//     description: "Transform your home into a personalized sanctuary that reflects your style and meets your needs.",
//     image: "/placeholder.svg?height=400&width=600&text=Residential+Design",
//     benefits: ["Customized living spaces", "Improved functionality", "Increased property value"],
//     pricing: "Starting from $X,XXX",
//   },
//   {
//     title: "Commercial Spaces",
//     description: "Create inspiring work environments that boost productivity and impress clients.",
//     image: "/placeholder.svg?height=400&width=600&text=Commercial+Spaces",
//     benefits: ["Enhanced brand image", "Optimized workspace efficiency", "Employee satisfaction"],
//     pricing: "Custom quotes based on project scope",
//   },
//   {
//     title: "Renovation",
//     description: "Breathe new life into existing spaces with our expert renovation services.",
//     image: "/placeholder.svg?height=400&width=600&text=Renovation",
//     benefits: ["Updated aesthetics", "Improved functionality", "Increased property value"],
//     pricing: "Tailored to project size and complexity",
//   },
//   {
//     title: "Space Planning",
//     description: "Optimize your layout for maximum efficiency and flow.",
//     image: "/placeholder.svg?height=400&width=600&text=Space+Planning",
//     benefits: ["Improved traffic flow", "Maximized space utilization", "Enhanced functionality"],
//     pricing: "Hourly rate or flat fee based on square footage",
//   },
//   {
//     title: "Color Consultation",
//     description: "Find the perfect color palette to set the right mood and atmosphere in your space.",
//     image: "/placeholder.svg?height=400&width=600&text=Color+Consultation",
//     benefits: ["Cohesive design scheme", "Psychological benefits", "Increased aesthetic appeal"],
//     pricing: "Fixed rate per consultation",
//   },
//   {
//     title: "Furniture Selection",
//     description: "Choose the ideal furnishings to complement your space and lifestyle.",
//     image: "/placeholder.svg?height=400&width=600&text=Furniture+Selection",
//     benefits: ["Curated selections", "Ergonomic considerations", "Style cohesion"],
//     pricing: "Percentage of furniture cost or hourly rate",
//   },
// ]

const data = [
  {
    title: "Civil Defense Approval",
    description:
      "Get hassle-free Civil Defense Approval in Dubai with our expert consultancy services.",
    icon: Construction,
  },
  {
    title: "DEWA Approval",
    description:
      "Expert assistance for obtaining DEWA Approval for your projects in Dubai.",
    icon: BrickWall,
  },
  {
    title: "DSO Approval",
    description:
      "Simplified Dubai Silicon Oasis (DSO) Approval process with professional guidance.",
    icon: Drill,
  },
  {
    title: "Dubai Development Authority Approval",
    description:
      "Professional services to secure Dubai Development Authority (DDA) Approvals quickly.",
    icon: Hammer,
  },
  {
    title: "Dubai Municipality Approval",
    description:
      "Smooth and efficient Dubai Municipality Approval services for your projects.",
    icon: HardHat,
  },
  {
    title: "Emaar Approval",
    description:
      "Get Emaar Approval for your projects with our streamlined consultancy solutions.",
    icon: Pickaxe,
  },
  {
    title: "Food Control Department Approval",
    description:
      "Ensure compliance with Food Control Department standards and get quick approvals.",
    icon: Wrench,
  },
  {
    title: "JAFZA Approval",
    description:
      "Obtain Jebel Ali Free Zone Authority (JAFZA) Approval with ease through our services.",
    icon: Bolt,
  },
  {
    title: "Nakheel Approval",
    description:
      "Professional assistance for Nakheel Approval for your residential or commercial projects.",
    icon: Construction,
  },
  {
    title: "Sand Transfer Permit",
    description:
      "Quick and reliable Sand Transfer Permit approvals for your construction needs.",
    icon: BrickWall,
  },
  {
    title: "Shisha Cafe License Dubai",
    description:
      "Obtain your Shisha Cafe License in Dubai with expert consultancy services.",
    icon: Drill,
  },
  {
    title: "Signage Approval",
    description:
      "Get your signage approved in Dubai with our hassle-free consultancy services.",
    icon: Hammer,
  },
  {
    title: "Smoking Permit",
    description:
      "Secure a Smoking Permit in Dubai with professional assistance.",
    icon: HardHat,
  },
  {
    title: "SPA Approval",
    description:
      "Expert services to obtain SPA Approval for your wellness center in Dubai.",
    icon: Pickaxe,
  },
  {
    title: "Swimming Pool Approval",
    description:
      "Simplify your Swimming Pool Approval process with our expert consultancy.",
    icon: Wrench,
  },
  {
    title: "TECOM and DCCA Approval",
    description:
      "Efficient TECOM and Dubai Creative Clusters Authority (DCCA) Approval services.",
    icon: Bolt,
  },
  {
    title: "Third Party Consultants Approval",
    description:
      "Professional guidance for obtaining Third Party Consultants Approval in Dubai.",
    icon: Construction,
  },
  {
    title: "Trakhees Approval",
    description:
      "Get Trakhees Approval for your project with our experienced consultants.",
    icon: BrickWall,
  },
  {
    title: "RTA Permit and Approval",
    description:
      "Expert assistance for obtaining RTA permits and approvals in Dubai.",
    icon: Drill,
  },
  {
    title: "Solar Approval",
    description:
      "Professional consultancy for acquiring Solar Approval for your renewable energy projects.",
    icon: Hammer,
  },
  {
    title: "Tent Approval",
    description:
      "Secure Tent Approval in Dubai for your event or project with ease.",
    icon: HardHat,
  },
  {
    title: "DHA Approval",
    description:
      "Get Dubai Health Authority (DHA) Approval with expert guidance for your healthcare project.",
    icon: Pickaxe,
  },
  {
    title: "Property Snagging and Inspection",
    description:
      "Ensure quality and compliance with our Property Snagging and Inspection services in Dubai.",
    icon: Wrench,
  },
];

const data2 = [
  {
    title: "Test title 1",
    description: "Test description 1",
    icon: Construction,
  },
  { title: "Test title 2", description: "Test description 2", icon: BrickWall },
  {
    title: "Test title 3",
    description: "Test description 3",
    icon: Construction,
  },
  { title: "Test title 4", description: "Test description 4", icon: BrickWall },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative h-[70vh] text-white bg-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/images/services.jpg"
            alt="Service Image"
            layout="fill"
            className="opacity-50"
            objectFit="cover"
            loading="eager"
          />
        </div>
      </section>
      <div className="container max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center uppercase mb-8 underline underline-offset-16 decoration-primary decoration-6">
          Our Services
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">Benefits:</h4>
              <ul className="list-disc list-inside mb-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <p><strong>Pricing:</strong> {service.pricing}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button>Request Consultation</Button>
            </CardFooter>
          </Card>
        ))}
      </div> */}

        <ServiceList data={data} />

        <section className="service-list-2 my-12">
          <h2 className="text-3xl font-bold text-center uppercase mb-8 underline underline-offset-16 decoration-primary decoration-6">
            Service List 2
          </h2>
          <ServiceList data={data2} enableSearch={false} />
        </section>
      </div>
    </main>
  );
}
