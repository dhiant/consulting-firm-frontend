import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollIndicator from "@/components/scroll-indicator";

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
      {/* Enhanced Blogs Hero Section */}
      <section className="relative h-screen text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/blog.png"
            alt="AIMTERIOR Insights & Stories"
            fill
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          {/* Blog Pattern - Floating Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/5 left-1/4 w-32 h-4 bg-white rotate-12 animate-pulse"></div>
            <div
              className="absolute top-1/3 right-1/4 w-24 h-4 bg-white rotate-45 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/3 w-40 h-4 bg-white -rotate-12 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/5 w-28 h-4 bg-white rotate-6 animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center max-w-screen-xl z-10">
          <div className="max-w-4xl">
            {/* Blog Badge */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center space-x-3 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 shadow-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-brand-50 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-brand-100 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-brand-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Insights & Stories
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up">
              Design Stories &
              <span className="block bg-gradient-to-r from-brand-50 via-brand-200 to-brand-400 bg-clip-text text-transparent">
                Industry Insights
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed text-gray-100 animate-slide-up-delay">
              Discover the latest trends, design philosophies, and expert
              insights from AIMTERIOR&apos;s team.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-delay">
              <button className="group bg-gradient-to-r from-brand-50 to-brand-400 hover:from-brand-100 hover:to-brand-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center space-x-2">
                  <span>Latest Articles</span>
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  </div>
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Subscribe to Updates
              </button>
            </div>

            {/* Blog Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Design Trends", icon: "✨" },
                { name: "Project Stories", icon: "🏗️" },
                { name: "Industry News", icon: "📰" },
                { name: "Expert Tips", icon: "💡" },
              ].map((category) => (
                <div key={category.name} className="group text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-indigo-400/50">
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-sm font-medium">{category.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Blog Elements */}
        <div className="absolute top-20 right-20 w-24 h-32 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 rotate-12 animate-float"></div>
        <div className="absolute bottom-32 left-16 w-20 h-28 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 -rotate-6 animate-float-delayed"></div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
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
              href={`/blogs/${featuredPost.slug}`}
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
                    href={`/blogs/${post.slug}`}
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
