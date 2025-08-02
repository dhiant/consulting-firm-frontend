import { notFound } from "next/navigation";
import { blogPosts, featuredPost } from "../data";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const allPosts = [featuredPost, ...blogPosts];
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const allPosts = [featuredPost, ...blogPosts];
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <>
      <section className="relative h-[100vh] bg-black to-white text-white flex justify-between items-center">
        <div className="container mx-auto max-w-screen-xl">
          <div className="absolute inset-0">
            <Image
              src="/images/about.jpg"
              alt="Construction Site Showcase"
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
        <Link
          href="/blogs"
          className="cursor-pointer inline-flex items-center text-gray-500 hover:text-black mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full h-[400px] object-cover"
        />

        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="prose max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
