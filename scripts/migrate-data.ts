import db from '../lib/db';
import { projectData, projectOrder } from '../app/projects/data';
import { blogData } from '../app/blogs/data';

// Migrate projects
function migrateProjects() {
  console.log('Migrating projects...');
  const insertProject = db.prepare(`
    INSERT OR REPLACE INTO projects (slug, title, location, category, image, sections, cta_prompt, cta_link_text, cta_href, display_order)
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

// Migrate blogs
function migrateBlogs() {
  console.log('Migrating blogs...');
  const insertBlog = db.prepare(`
    INSERT OR REPLACE INTO blogs (slug, title, excerpt, content, image, date, author, read_time, category, tags, related_posts)
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

// Migrate timeline events
function migrateTimeline() {
  console.log('Migrating timeline events...');
  const insertEvent = db.prepare(`
    INSERT OR REPLACE INTO timeline_events (year, title, description, badge_text, badge_color, images, stats, display_order)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const events = [
    {
      year: '2025',
      title: 'Architectural Excellence & Tailored Interior Solutions',
      description: 'Expanded portfolio to include luxury villa interiors, innovative co-working spaces, efficient warehouse and mezzanine office designs, stylish cafes, bespoke retail environments, dynamic office spaces, and thoughtfully crafted outdoor living areas. Successfully delivered over 30 projects across Dubai, blending modern aesthetics with functional precision and sustainable materials, establishing our reputation for versatile and refined architectural solutions.',
      badge_text: 'Current Year',
      badge_color: 'purple',
      images: ['/images/a1.png', '/images/a2.png', '/images/a3.png', '/images/a4.png'],
      stats: [],
      display_order: 0,
    },
    {
      year: '2024',
      title: 'Innovative Designs & Trusted Collaborations',
      description: 'Completed and delivered over 30 diverse projects, including residential villas, commercial offices, retail spaces, and industrial facilities. Partnered with leading manufacturers and local artisans to source premium materials and advanced technologies, ensuring quality, sustainability, and lasting impact in every design.',
      badge_text: 'Growth Year',
      badge_color: 'blue',
      images: ['/images/b1.png', '/images/b2.png', '/images/b3.png', '/images/b4.png'],
      stats: [],
      display_order: 1,
    },
    {
      year: '2023',
      title: 'The Beginning of Excellence',
      description: 'Founded with a vision to redefine Dubai\'s architectural landscape, the company undertook a series of complex projects involving multi-phase residential developments, bespoke interior fit-outs, and integrated infrastructure works. These foundational achievements demonstrated our capability to manage diverse scopes with precision and innovation, establishing a solid base for our continued growth and reputation.',
      badge_text: 'Company Launch',
      badge_color: 'gradient',
      images: [],
      stats: [
        { label: 'Initial Projects', value: '3' },
        { label: 'Success Rate', value: '100%' },
        { label: 'Home Base', value: 'Dubai' },
      ],
      display_order: 2,
    },
  ];

  events.forEach((event) => {
    insertEvent.run(
      event.year,
      event.title,
      event.description,
      event.badge_text,
      event.badge_color,
      JSON.stringify(event.images),
      JSON.stringify(event.stats),
      event.display_order
    );
  });
  console.log(`Migrated ${events.length} timeline events`);
}

// Migrate testimonials
function migrateTestimonials() {
  console.log('Migrating testimonials...');
  const insertTestimonial = db.prepare(`
    INSERT OR REPLACE INTO testimonials (quote, name, designation, image_url, display_order)
    VALUES (?, ?, ?, ?, ?)
  `);

  const testimonials = [
    {
      quote: 'The attention to detail and innovative features have completely transformed our workflow. This is exactly what we\'ve been looking for.',
      name: 'Sarah Chen',
      designation: 'Product Manager at TechFlow',
      image_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      display_order: 0,
    },
    {
      quote: 'Implementation was seamless and the results exceeded our expectations. The platform\'s flexibility is remarkable.',
      name: 'Michael Rodriguez',
      designation: 'CTO at InnovateSphere',
      image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      display_order: 1,
    },
    {
      quote: 'This solution has significantly improved our team\'s productivity. The intuitive interface makes complex tasks simple.',
      name: 'Emily Watson',
      designation: 'Operations Director at CloudScale',
      image_url: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      display_order: 2,
    },
    {
      quote: 'Outstanding support and robust features. It\'s rare to find a product that delivers on all its promises.',
      name: 'James Kim',
      designation: 'Engineering Lead at DataPro',
      image_url: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      display_order: 3,
    },
    {
      quote: 'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
      name: 'Lisa Thompson',
      designation: 'VP of Technology at FutureNet',
      image_url: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      display_order: 4,
    },
  ];

  testimonials.forEach((testimonial) => {
    insertTestimonial.run(
      testimonial.quote,
      testimonial.name,
      testimonial.designation,
      testimonial.image_url,
      testimonial.display_order
    );
  });
  console.log(`Migrated ${testimonials.length} testimonials`);
}

// Run all migrations
function runMigrations() {
  try {
    migrateProjects();
    migrateBlogs();
    migrateTimeline();
    migrateTestimonials();
    console.log('All migrations completed successfully!');
  } catch (error) {
    console.error('Migration error:', error);
    process.exit(1);
  }
}

runMigrations();


