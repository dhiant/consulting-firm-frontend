import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  { title: "Civil Defense Approval", description: "", image: "" },
  { title: "DEWA Approval", description: "", image: "" },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative h-[70vh] text-white bg-primary">
        <div className="absolute inset-0">
          {/* <Image
            src="/images/service.jpg "
            alt="Service Image"
            layout="fill"
            objectFit="cover"
            loading="eager"
          /> */}
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
      </div>
    </main>
  );
}
