"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Modern Minimalist Apartment",
    category: "Residential",
    description: "A sleek, minimalist design for a city apartment that maximizes space and light.",
    image: "/placeholder.svg?height=400&width=600&text=Modern+Apartment",
    testimonial: "The team transformed my small apartment into a spacious, functional haven. I love coming home now!",
  },
  {
    title: "Eco-Friendly Office Space",
    category: "Commercial",
    description: "A sustainable office design that promotes productivity and employee well-being.",
    image: "/placeholder.svg?height=400&width=600&text=Eco+Office",
    testimonial: "Our new office has boosted team morale and impressed our clients. It's both beautiful and environmentally responsible.",
  },
  {
    title: "Luxury Beachfront Villa",
    category: "Residential",
    description: "An opulent beachfront property that blends indoor and outdoor living seamlessly.",
    image: "/placeholder.svg?height=400&width=600&text=Beachfront+Villa",
    testimonial: "The attention to detail in our villa is extraordinary. It's the perfect vacation home we've always dreamed of.",
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Commercial",
    description: "A chic and inviting lobby design for a boutique hotel, setting the tone for a luxurious stay.",
    image: "/placeholder.svg?height=400&width=600&text=Hotel+Lobby",
    testimonial: "The lobby design has significantly improved our guests' first impressions. It's elegant yet welcoming.",
  },
  {
    title: "Urban Loft Renovation",
    category: "Renovation",
    description: "A complete overhaul of an industrial loft space into a modern, multi-functional home.",
    image: "/placeholder.svg?height=400&width=600&text=Urban+Loft",
    testimonial: "I never thought my old loft could look this amazing. It's like living in a design magazine!",
  },
  {
    title: "Rustic Mountain Retreat",
    category: "Residential",
    description: "A cozy mountain home that combines rustic charm with modern comforts.",
    image: "/placeholder.svg?height=400&width=600&text=Mountain+Retreat",
    testimonial: "Our mountain home is the perfect getaway. It's warm, inviting, and beautifully integrated with the natural surroundings.",
  },
]

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>

      {/* Filter buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Residential", "Commercial", "Renovation"].map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant={filter === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <p className="italic text-sm">&quot;{project.testimonial}&quot;</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

