import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import ScrollIndicator from "@/components/scroll-indicator";

// Extended blog data with full content
const blogData = {
  "benefits-of-working-with-engineering-consultants": {
    date: "May 10, 2023",
    title:
      "The Benefits of Working with Engineering Consultants for Home Renovations",
    excerpt:
      "Home renovations can be a significant investment for homeowners, and it's crucial to get them right the first time. When considering a home renovation project, many homeowners may wonder whether they need to hire engineering consultants. In this article, we will discuss the benefits of working with engineering consultants for home renovations.",
    image: "/images/project1.jpg",
    slug: "benefits-of-working-with-engineering-consultants",
    author: "Sarah Johnson",
    readTime: "8 min read",
    category: "Design Trends",
    content: `
      <p>Home renovations can be a significant investment for homeowners, and it's crucial to get them right the first time. When considering a home renovation project, many homeowners may wonder whether they need to hire engineering consultants. In this article, we will discuss the benefits of working with engineering consultants for home renovations.</p>

      <h2>Why Engineering Consultants Matter</h2>
      <p>Engineering consultants bring specialized knowledge and expertise to your home renovation project. They understand the technical aspects of construction, structural integrity, and building codes that are essential for a successful renovation.</p>

      <h3>Structural Assessment and Safety</h3>
      <p>One of the primary benefits of working with engineering consultants is their ability to assess the structural integrity of your home. They can identify potential issues before they become major problems, ensuring your renovation is safe and compliant with local building codes.</p>

      <h3>Cost Optimization</h3>
      <p>Engineering consultants can help optimize your renovation costs by providing accurate estimates and identifying the most efficient solutions. Their expertise can prevent costly mistakes and ensure your project stays within budget.</p>

      <h2>Design Integration</h2>
      <p>Engineering consultants work closely with architects and designers to ensure that your vision is both beautiful and structurally sound. They can suggest modifications that enhance both aesthetics and functionality.</p>

      <h3>Code Compliance</h3>
      <p>Navigating building codes and regulations can be complex. Engineering consultants ensure your renovation meets all local requirements, preventing delays and potential legal issues.</p>

      <h2>Project Management</h2>
      <p>From planning to completion, engineering consultants provide valuable project management services. They coordinate with contractors, suppliers, and other professionals to ensure smooth project execution.</p>

      <h3>Quality Assurance</h3>
      <p>With their technical expertise, engineering consultants can monitor construction quality and ensure that all work meets professional standards. This attention to detail results in a higher quality final product.</p>

      <h2>Conclusion</h2>
      <p>Working with engineering consultants for your home renovation project offers numerous benefits, from structural safety to cost optimization. Their expertise ensures your renovation is not only beautiful but also safe, compliant, and built to last. When planning your next home renovation, consider the value that engineering consultants can bring to your project.</p>
    `,
    tags: ["Engineering", "Home Renovation", "Safety", "Design"],
    relatedPosts: [
      {
        title: "How To Reduce Villa Renovation Costs",
        slug: "reduce-villa-renovation-costs",
        image: "/images/project2.jpg",
        date: "December 16, 2021",
      },
      {
        title:
          "Japanese Style Interior Design Offers Modesty to Villas in Dubai",
        slug: "japanese-style-interior-design",
        image: "/images/project3.jpg",
        date: "October 18, 2021",
      },
    ],
  },
  "reduce-villa-renovation-costs": {
    date: "December 16, 2021",
    title: "How To Reduce Villa Renovation Costs",
    excerpt:
      "With the amelioration of material and service costs, searching for ways for cost-effective solutions for home renovation projects will be a huge relief to clients. It may be challenging to properly...",
    image: "/images/project2.jpg",
    slug: "reduce-villa-renovation-costs",
    author: "Michael Chen",
    readTime: "6 min read",
    category: "Expert Tips",
    content: `
      <p>With the amelioration of material and service costs, searching for ways for cost-effective solutions for home renovation projects will be a huge relief to clients. It may be challenging to properly plan and execute a renovation project while staying within budget, but with the right strategies, you can significantly reduce villa renovation costs.</p>

      <h2>Strategic Planning and Budgeting</h2>
      <p>Effective planning is the cornerstone of cost-effective renovation. Start by creating a detailed budget that accounts for all aspects of your project, including materials, labor, permits, and unexpected expenses.</p>

      <h3>Material Selection</h3>
      <p>Choosing the right materials can make a significant difference in your renovation costs. Consider alternatives that offer similar quality and aesthetics at a lower price point. Research different suppliers and compare prices before making decisions.</p>

      <h3>Timing Your Renovation</h3>
      <p>Timing can significantly impact renovation costs. Consider scheduling your project during off-peak seasons when contractors and suppliers may offer better rates. Avoid peak periods when demand is high and prices are inflated.</p>

      <h2>DIY vs Professional Services</h2>
      <p>Evaluate which aspects of your renovation you can handle yourself versus those that require professional expertise. While DIY can save money, some tasks are better left to professionals to ensure quality and safety.</p>

      <h3>Reusing and Repurposing</h3>
      <p>Look for opportunities to reuse existing materials and fixtures. Refinishing, repainting, or repurposing items can give them new life while saving money. This approach is both cost-effective and environmentally friendly.</p>

      <h2>Contractor Selection</h2>
      <p>Choosing the right contractor is crucial for cost-effective renovation. Get multiple quotes, check references, and ensure they have experience with similar projects. A good contractor can help you find cost-saving solutions without compromising quality.</p>

      <h3>Phased Approach</h3>
      <p>Consider breaking your renovation into phases. This approach allows you to spread costs over time and make adjustments based on your budget and changing needs. It also reduces the financial burden of a large, single project.</p>

      <h2>Conclusion</h2>
      <p>Reducing villa renovation costs requires careful planning, smart material selection, and strategic decision-making. By implementing these strategies, you can achieve your renovation goals while staying within budget. Remember, the goal is not just to save money, but to create a beautiful, functional space that adds value to your home.</p>
    `,
    tags: ["Cost Reduction", "Budget Planning", "Villa Renovation", "Tips"],
    relatedPosts: [
      {
        title:
          "The Benefits of Working with Engineering Consultants for Home Renovations",
        slug: "benefits-of-working-with-engineering-consultants",
        image: "/images/project1.jpg",
        date: "May 10, 2023",
      },
      {
        title: "How To Glam Up Your Interior Design",
        slug: "glam-up-your-interior-design",
        image: "/images/project4.jpg",
        date: "August 28, 2021",
      },
    ],
  },
  "japanese-style-interior-design": {
    date: "October 18, 2021",
    title: "Japanese Style Interior Design Offers Modesty to Villas in Dubai",
    excerpt:
      "When talking about minimalist living, Japanese-style interior designs first come into mind. Minimalist modern interior designs often highlight a lot of open spaces promoting natural lighting, basic...",
    image: "/images/project3.jpg",
    slug: "japanese-style-interior-design",
    author: "Yuki Tanaka",
    readTime: "7 min read",
    category: "Design Trends",
    content: `
      <p>When talking about minimalist living, Japanese-style interior designs first come into mind. Minimalist modern interior designs often highlight a lot of open spaces promoting natural lighting, basic color schemes, and clean lines. This design philosophy has gained popularity in Dubai's villa market, offering a serene and sophisticated living environment.</p>

      <h2>The Philosophy of Japanese Design</h2>
      <p>Japanese interior design is rooted in the principles of wabi-sabi, which embraces imperfection and transience. This philosophy creates spaces that are both beautiful and functional, emphasizing simplicity, natural materials, and a connection to nature.</p>

      <h3>Key Design Elements</h3>
      <p>Japanese interior design incorporates several key elements that create its distinctive aesthetic. These include clean lines, natural materials, neutral color palettes, and a focus on functionality over decoration.</p>

      <h3>Space and Light</h3>
      <p>One of the most important aspects of Japanese design is the use of space and light. Large windows, sliding doors, and open floor plans create a sense of spaciousness and connection to the outdoors, even in urban environments like Dubai.</p>

      <h2>Materials and Textures</h2>
      <p>Japanese design emphasizes natural materials such as wood, stone, and bamboo. These materials bring warmth and texture to spaces while maintaining a clean, uncluttered aesthetic. The use of natural materials also promotes sustainability and environmental consciousness.</p>

      <h3>Color Palette</h3>
      <p>The Japanese color palette is typically neutral, featuring whites, beiges, and natural wood tones. This creates a calming atmosphere and allows natural materials to take center stage. Accent colors are used sparingly and thoughtfully.</p>

      <h2>Furniture and Layout</h2>
      <p>Japanese furniture is designed for functionality and flexibility. Low-profile pieces, modular designs, and built-in storage solutions maximize space efficiency. The layout emphasizes flow and movement, creating a sense of harmony and balance.</p>

      <h3>Integration with Dubai's Climate</h3>
      <p>Adapting Japanese design principles to Dubai's climate requires careful consideration of temperature, humidity, and natural light. Strategic use of materials, ventilation, and shading can create comfortable living spaces that embrace Japanese aesthetics while addressing local environmental conditions.</p>

      <h2>Benefits for Villa Living</h2>
      <p>Japanese interior design offers several benefits for villa living in Dubai. It creates a sense of tranquility and order, promotes efficient use of space, and provides a sophisticated aesthetic that stands the test of time. The design philosophy also encourages mindfulness and appreciation for simple pleasures.</p>

      <h2>Conclusion</h2>
      <p>Japanese-style interior design offers a unique approach to villa living in Dubai, combining aesthetic beauty with functional design. Its emphasis on simplicity, natural materials, and spatial harmony creates living environments that are both sophisticated and serene. For those seeking a minimalist lifestyle with a focus on quality and mindfulness, Japanese interior design provides an ideal solution.</p>
    `,
    tags: ["Japanese Design", "Minimalism", "Villa Design", "Dubai"],
    relatedPosts: [
      {
        title: "How To Glam Up Your Interior Design",
        slug: "glam-up-your-interior-design",
        image: "/images/project4.jpg",
        date: "August 28, 2021",
      },
      {
        title:
          "The Benefits of Working with Engineering Consultants for Home Renovations",
        slug: "benefits-of-working-with-engineering-consultants",
        image: "/images/project1.jpg",
        date: "May 10, 2023",
      },
    ],
  },
  "glam-up-your-interior-design": {
    date: "August 28, 2021",
    title: "How To Glam Up Your Interior Design",
    excerpt:
      "Do you love sophistication and a luxurious lifestyle? Hence, a glam interior design in Dubai is perfect for your home. Glam desig...",
    image: "/images/project4.jpg",
    slug: "glam-up-your-interior-design",
    author: "Emma Rodriguez",
    readTime: "5 min read",
    category: "Design Trends",
    content: `
      <p>Do you love sophistication and a luxurious lifestyle? Hence, a glam interior design in Dubai is perfect for your home. Glam design combines elegance, luxury, and sophistication to create stunning living spaces that reflect your personal style and taste.</p>

      <h2>Understanding Glam Design</h2>
      <p>Glam interior design is characterized by its luxurious aesthetic, featuring rich materials, bold patterns, and sophisticated color schemes. This style creates spaces that are both elegant and inviting, perfect for those who appreciate the finer things in life.</p>

      <h3>Key Elements of Glam Design</h3>
      <p>Glam design incorporates several key elements that create its distinctive look. These include metallic accents, luxurious fabrics, bold patterns, and sophisticated lighting. The goal is to create a space that feels both opulent and comfortable.</p>

      <h3>Color Schemes</h3>
      <p>Glam design typically features rich, sophisticated color palettes. Deep jewel tones, metallic accents, and neutral bases create a luxurious atmosphere. Popular color combinations include black and gold, navy and silver, and cream with metallic accents.</p>

      <h2>Materials and Textures</h2>
      <p>Luxurious materials are essential to glam design. Velvet, silk, leather, and high-quality woods create texture and depth. Metallic finishes, crystal elements, and mirrored surfaces add sparkle and sophistication to the space.</p>

      <h3>Furniture Selection</h3>
      <p>Glam furniture is typically bold and statement-making. Look for pieces with clean lines, luxurious upholstery, and metallic details. Comfort is important, but style takes precedence in glam design.</p>

      <h2>Lighting and Accessories</h2>
      <p>Lighting plays a crucial role in glam design. Chandeliers, sconces, and table lamps with metallic finishes create ambient lighting that enhances the luxurious atmosphere. Accessories should be carefully curated to complement the overall design.</p>

      <h3>Patterns and Textiles</h3>
      <p>Bold patterns and luxurious textiles are hallmarks of glam design. Geometric patterns, animal prints, and floral designs can add visual interest and sophistication. Mixing patterns requires careful consideration to maintain balance and harmony.</p>

      <h2>Implementing Glam Design in Dubai</h2>
      <p>Adapting glam design to Dubai's unique environment requires consideration of local tastes, climate, and cultural influences. The city's love for luxury and sophistication makes it an ideal location for glam interior design.</p>

      <h3>Cultural Considerations</h3>
      <p>When implementing glam design in Dubai, consider local cultural preferences and traditions. The design should reflect both international glamour and local sensibilities, creating a space that feels both sophisticated and culturally appropriate.</p>

      <h2>Conclusion</h2>
      <p>Glam interior design offers a sophisticated approach to home decoration that combines luxury, elegance, and personal style. By carefully selecting materials, colors, and accessories, you can create a stunning living space that reflects your taste for the finer things in life. In Dubai's luxury market, glam design provides the perfect solution for those seeking a sophisticated and elegant home environment.</p>
    `,
    tags: ["Glam Design", "Luxury", "Interior Design", "Dubai"],
    relatedPosts: [
      {
        title:
          "Japanese Style Interior Design Offers Modesty to Villas in Dubai",
        slug: "japanese-style-interior-design",
        image: "/images/project3.jpg",
        date: "October 18, 2021",
      },
      {
        title: "How To Reduce Villa Renovation Costs",
        slug: "reduce-villa-renovation-costs",
        image: "/images/project2.jpg",
        date: "December 16, 2021",
      },
    ],
  },
};

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = blogData[params.slug as keyof typeof blogData];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blogs"
            className="inline-flex items-center px-6 py-3 bg-brand-50 text-white rounded-lg hover:bg-brand-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 h-full flex items-center max-w-screen-xl z-10 min-h-screen">
          <div className="max-w-4xl w-full py-16 sm:py-20">
            {/* Back Button */}
            <div className="mb-6 sm:mb-8">
              <Link
                href="/blogs"
                className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/30 hover:bg-white/25 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium">
                  Back to Blogs
                </span>
              </Link>
            </div>

            {/* Category Badge */}
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/30">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-semibold">
                  {blog.category}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              {blog.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl leading-relaxed text-gray-100">
              {blog.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-200">
              <div className="flex items-center space-x-2">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{blog.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{blog.readTime}</span>
              </div>
              <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-brand-50 hover:text-brand-400 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blog.relatedPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-400 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brand-50 to-brand-400">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Let&apos;s collaborate to bring your vision to life with our
            expertise in architecture, design, and construction excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group bg-white text-brand-50 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center justify-center space-x-3">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-50 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
