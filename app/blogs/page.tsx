import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredPost = {
  date: "May 10, 2023",
  title:
    "The Benefits of Working with Engineering Consultants for Home Renovations",
  excerpt:
    "Home renovations can be a significant investment for homeowners, and it's crucial to get them right the first time. When considering a home renovation project, many homeowners may wonder whether they need to hire engineering consultants. In this article, we will discuss the benefits of working with engineering consultants for home renovations.",
  image: "/images/project1.jpg",
  slug: "benefits-of-working-with-engineering-consultants",
};

const blogPosts = [
  {
    date: "December 16, 2021",
    title: "How To Reduce Villa Renovation Costs",
    excerpt:
      "With the amelioration of material and service costs, searching for ways for cost-effective solutions for home renovation projects will be a huge relief to clients. It may be challenging to properly...",
    image: "/images/project2.jpg",
    slug: "reduce-villa-renovation-costs",
  },
  {
    date: "October 18, 2021",
    title: "Japanese Style Interior Design Offers Modesty to Villas in Dubai",
    excerpt:
      "When talking about minimalist living, Japanese-style interior designs first come into mind. Minimalist modern interior designs often highlight a lot of open spaces promoting natural lighting, basic...",
    image: "/images/project3.jpg",

    slug: "japanese-style-interior-design",
  },
  {
    date: "August 28, 2021",
    title: "How To Glam Up Your Interior Design",
    excerpt:
      "Do you love sophistication and a luxurious lifestyle? Hence, a glam interior design in Dubai is perfect for your home. Glam desig...",
    image: "/images/project4.jpg",

    slug: "glam-up-your-interior-design",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="relative h-[100vh] bg-black to-white text-white flex justify-between items-center">
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
            <h1 className="text-5xl font-bold mb-4">Latest News and Blogs</h1>
            <p className="text-xl mb-8">
              Innovative designs that reflect your style and enhance your life.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-5 text-center">BLOG & INSIGHTS</h1>
        <p className="text-primary/80 text-center">
          Look out for this space for new and original design ideas that come
          straight from the minds of our team and for stories of our experience
          and knowledge gained during a project.
        </p>
        <div className="grid md:grid-cols-2 gap-8 my-20">
          <div className="featured-image overflow-hidden rounded-lg transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src={featuredPost.image || "/placeholder.svg"}
              alt={featuredPost.title}
              width={600}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-500 mb-2">{featuredPost.date}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {featuredPost.title}
            </h2>
            <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group inline-flex items-center font-semibold text-black hover:text-gray-700 transition-colors duration-300"
            >
              READ THE BLOG
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Blog Listing Section */}
        <section className="mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="blog-card group flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-gray-700">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group inline-flex items-center font-semibold text-black hover:text-gray-700 transition-colors duration-300"
                  >
                    READ THE BLOG
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
