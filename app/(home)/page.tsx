import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SlideUpAnimation from "@/components/animations/slide-up-variants";
import ZoomInAnimation from "@/components/animations/zoom-in-variants";
import { Testimonials } from "@/components/testimonials";
import HeroCarousel from "./hero-carousel";

export default function HomePage() {
  return (
    <div>
      {/* Dynamic Hero Section */}
      {/* <section className="relative h-[100vh] bg-gray-800 to-white text-white flex justify-between items-center">
        <div className="container mx-auto max-w-screen-xl">
          <div className="absolute inset-0">
            <Image
              src="/images/home.jpg"
              alt="Consturction Site Showcase"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
              loading="eager"
            />
          </div>
          <SlideUpAnimation className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">Transform Your Space</h1>
            <p className="text-xl mb-8">
              Innovative designs that reflect your style and enhance your life.
            </p>
            <div>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="p-6 border border-white"
              >
                <Link href="/portfolio">Explore Our Work</Link>
              </Button>
            </div>
          </SlideUpAnimation>
        </div>
      </section> */}

      <HeroCarousel />

      {/* Services Preview */}
      <section className="pt-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          {/* <SlideUpAnimation> */}
          {/* <h2 className="text-3xl font-bold text-center uppercase mb-8 underline underline-offset-16 decoration-primary decoration-6"> */}

          <h2 className="text-3xl font-bold uppercase mb-8 text-primary">
            Find what you are looking with us
          </h2>
          {/* </SlideUpAnimation> */}
          {/* <ZoomInAnimation> */}
          <Carousel className="mx-10 my-12">
            <CarouselContent>
              {[
                "Residential Design",
                "Commercial Spaces",
                "Renovation",
                "Space Planning",
                "Color Consultation",
                "Furniture Selection",
              ].map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group cursor-pointer hover:drop-shadow-md hover:bg-primary/5 border-primary">
                    <div className="transition-transform transform duration-300 ease-in-out">
                      <CardHeader className="space-y-3">
                        <CardTitle>{service}</CardTitle>
                        <Image
                          src={`/images/project1.jpg`}
                          alt={`Project 1`}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover scale-95 rounded-md group-hover:scale-100 transition-transform transform duration-300 ease-in-out"
                        />
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <Button
                          asChild
                          variant="outline"
                          className="border-primary"
                        >
                          <Link href="/services">Learn More</Link>
                        </Button>
                        <p>
                          Expert {service.toLowerCase()} tailored to your needs
                          and preferences.
                        </p>
                      </CardContent>
                      {/* <CardFooter>
                          <Button asChild variant="outline">
                            <Link href="/services">Learn More</Link>
                          </Button>
                        </CardFooter> */}
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="rounded-md border-primary text-primary" />
            <CarouselNext className="rounded-md border-primary text-primary" />
          </Carousel>
          {/* </ZoomInAnimation> */}
        </div>
      </section>

      {/* Project Highlights */}
      <section className="pt-16">
        <div className="container mx-auto max-w-screen-xl px-4 ">
          {/* <SlideUpAnimation> */}
          <h2 className="text-3xl font-bold mb-8 uppercase text-primary">
            News & Blogs
          </h2>
          {/* </SlideUpAnimation> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card
                key={project}
                className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-primary"
              >
                <Image
                  src={`/images/project${project}.jpg`}
                  alt={`Project ${project}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Project {project}</h3>
                  <p className="text-sm text-gray-600">
                    A brief description of the project and its unique features.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="p-6">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 max-w-screen-xl mx-auto">
        {/* <SlideUpAnimation> */}
        {/* <h2 className="text-3xl font-bold text-center mb-8 uppercase underline underline-offset-16 decoration-primary decoration-6"> */}
        <h2 className="text-3xl font-bold mb-8 uppercase text-center text-primary">
          Testimonials
        </h2>
        {/* </SlideUpAnimation> */}
        <Testimonials />
      </section>
    </div>
  );
}
