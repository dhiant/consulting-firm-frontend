import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    title: "10 Interior Design Trends for 2024",
    excerpt: "Discover the hottest interior design trends that will dominate homes in 2024.",
    author: "Jane Doe",
    date: "2024-01-15",
    image: "/placeholder.svg?height=400&width=600&text=2024+Trends",
    categories: ["Trends", "Inspiration"],
  },
  {
    title: "How to Choose the Perfect Color Palette for Your Home",
    excerpt: "Learn the art of selecting a harmonious color scheme that reflects your personality and style.",
    author: "John Smith",
    date: "2024-01-10",
    image: "/placeholder.svg?height=400&width=600&text=Color+Palettes",
    categories: ["Color Theory", "Tips"],
  },
  {
    title: "Sustainable Materials in Modern Interior Design",
    excerpt: "Explore eco-friendly materials that are both beautiful and kind to the environment.",
    author: "Emily Brown",
    date: "2024-01-05",
    image: "/placeholder.svg?height=400&width=600&text=Sustainable+Materials",
    categories: ["Sustainability", "Materials"],
  },
  {
    title: "Maximizing Small Spaces: Tips and Tricks",
    excerpt: "Discover clever design solutions to make the most of compact living areas.",
    author: "Michael Johnson",
    date: "2023-12-28",
    image: "/placeholder.svg?height=400&width=600&text=Small+Spaces",
    categories: ["Space Planning", "Tips"],
  },
  {
    title: "The Psychology of Interior Design: How Your Home Affects Your Mood",
    excerpt: "Uncover the ways your living space can impact your emotions and well-being.",
    author: "Sarah Lee",
    date: "2023-12-20",
    image: "/placeholder.svg?height=400&width=600&text=Design+Psychology",
    categories: ["Psychology", "Wellness"],
  },
  {
    title: "Mixing Styles: How to Blend Different Design Aesthetics",
    excerpt: "Learn the art of combining various design styles to create a unique and personalized space.",
    author: "David Wilson",
    date: "2023-12-15",
    image: "/placeholder.svg?height=400&width=600&text=Mixing+Styles",
    categories: ["Style Guide", "Creativity"],
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                By {post.author} on {new Date(post.date).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category, i) => (
                  <Badge key={i} variant="secondary">{category}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-600 hover:underline">
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

