// import SlideUpAnimation from "@/components/animations/slide-up-variants";
// import ZoomInAnimation from "@/components/animations/zoom-in-variants";
// import { Testimonials } from "@/components/testimonials";
import HeroCarousel from "./hero-carousel";
import SectorsSection from "./carousel";
import ServicePreview from "./servicespreview";
import ServiceContext from "./serviceContext";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Apartment",
    category: "Residential",
    description:
      "A sleek, minimalist design for a city apartment that maximizes space and light.",
    image: "/images/project1.jpg",
    testimonial:
      "The team transformed my small apartment into a spacious, functional haven. I love coming home now!",
  },
  {
    id: 2,
    title: "Rustic Mountain Retreat",
    category: "Landscaping",
    description:
      "A cozy mountain home that combines rustic charm with modern comforts.",
    image: "/images/project6.jpg",

    testimonial:
      "Our mountain home is the perfect getaway. It's warm, inviting, and beautifully integrated with the natural surroundings.",
  },
  {
    id: 3,
    title: "Eco-Friendly Office Space",
    category: "Retail",
    description:
      "A sustainable office design that promotes productivity and employee well-being.",
    image: "/images/project2.jpg",
    testimonial:
      "Our new office has boosted team morale and impressed our clients. It's both beautiful and environmentally responsible.",
  },
  {
    id: 4,
    title: "Luxury Beachfront Villa",
    category: "Residential",
    description:
      "An opulent beachfront property that blends indoor and outdoor living seamlessly.",
    image: "/images/project3.jpg",
    testimonial:
      "The attention to detail in our villa is extraordinary. It's the perfect vacation home we've always dreamed of.",
  },
];
export default function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <div className="p-4 mt-6 ">
        <div className=" grid grid-cols-4 mb-12 border">
          {projects.map((card) => (
            <ServicePreview
              key={card.id}
              title={card.title}
              subtitle={card.category}
              image={card.image}
              desc={card.description}
            />
          ))}
        </div>
      </div>
      <ServiceContext />

      <SectorsSection />
    </div>
  );
}
