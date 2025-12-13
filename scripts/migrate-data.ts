import db from "../lib/db";
import { projectData, projectOrder } from "../app/projects/data";
import { blogData } from "../app/blogs/data";

// Import reviews from client-feedback
const reviewsData = [
  {
    project: "Interior Project",
    quote:
      "It finally feels like our home. We had a rough idea of what we wanted, but we didn't know how to put it all together. The team listened to every little detail and somehow turned our scattered thoughts into a space that feels warm, comfortable, and very 'us.' We love coming home now — it just feels right.",
    author: "Anna & Leo",
    rating: 5,
  },
  {
    project: "Racking + Mezzanine Combination Project",
    quote:
      "Our storage capacity doubled, and our team finally has a proper workspace. Before this project, everything felt cramped. Now we have a mezzanine office overlooking the warehouse and a racking system that actually makes sense. The installation team listened to our concerns and worked around our operating hours, which we really appreciated. It's been a game changer for efficiency.",
    author: "S. Tan, Logistics Coordinator",
    rating: 5,
  },
  {
    project: "Villa Extension",
    quote:
      "They were upfront and honest from day one. We appreciated that they didn't just say 'yes' to everything we wanted. They explained what the municipality would approve and what might cause delays. Their suggestions improved our layout, and the extension ended up looking cleaner and more functional because of their input.",
    author: "S. Deeb",
    rating: 5,
  },
  {
    project: "As-Built Compliance Made Easy",
    quote:
      "Professional, reliable, and knowledgeable. The previous contractor had done extensions without permits. The team helped us create accurate as-built plans and coordinated the approvals with the authorities. They were knowledgeable about all the requirements and made the process stress-free for us.",
    author: "R. Mansoor",
    rating: 5,
  },
  {
    project: "Smooth Renovation",
    quote:
      "Stress-free and professional. Renovating can be overwhelming, but the team made it easy. They coordinated all the work, kept us updated, and made sure every detail was perfect. The result is beautiful, practical, and really suits our lifestyle.",
    author: "S. Rahman",
    rating: 5,
  },
];

function migrateProjects() {
  console.log("Migrating projects...");
  const insertProject = db.prepare(`
    INSERT OR IGNORE INTO projects (slug, title, location, category, image, sections, 
      cta_prompt, cta_link_text, cta_href, display_order)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  projectOrder.forEach((slug, index) => {
    const project = projectData[slug];
    insertProject.run(
      slug,
      project.title,
      project.location,
      project.category,
      project.image,
      JSON.stringify(project.sections),
      project.cta.prompt,
      project.cta.linkText,
      project.cta.href,
      index
    );
  });

  console.log(`Migrated ${projectOrder.length} projects`);
}

function migrateBlogs() {
  console.log("Migrating blogs...");
  const insertBlog = db.prepare(`
    INSERT OR IGNORE INTO blogs (slug, title, excerpt, content, image, date, 
      author, read_time, category, tags, related_posts)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  Object.entries(blogData).forEach(([slug, blog]) => {
    insertBlog.run(
      slug,
      blog.title,
      blog.excerpt,
      blog.content,
      blog.image,
      blog.date,
      blog.author || null,
      blog.readTime || null,
      blog.category,
      JSON.stringify(blog.tags),
      JSON.stringify(blog.relatedPosts)
    );
  });

  console.log(`Migrated ${Object.keys(blogData).length} blogs`);
}

function migrateReviews() {
  console.log("Migrating reviews...");
  const insertReview = db.prepare(`
    INSERT OR IGNORE INTO reviews (project, quote, author, rating, display_order)
    VALUES (?, ?, ?, ?, ?)
  `);

  reviewsData.forEach((review, index) => {
    insertReview.run(
      review.project,
      review.quote,
      review.author,
      review.rating,
      index
    );
  });

  console.log(`Migrated ${reviewsData.length} reviews`);
}

// Run migrations
try {
  console.log("Starting data migration...");
  migrateProjects();
  migrateBlogs();
  migrateReviews();
  console.log("Migration completed successfully!");
} catch (error) {
  console.error("Migration error:", error);
  process.exit(1);
}
