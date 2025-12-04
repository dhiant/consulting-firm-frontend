import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// GET all blogs
export async function GET() {
  try {
    const blogs = db.prepare(`
      SELECT * FROM blogs 
      ORDER BY date DESC, created_at DESC
    `).all();
    
    // Parse JSON fields
    const parsedBlogs = blogs.map((blog: any) => ({
      ...blog,
      tags: JSON.parse(blog.tags || '[]'),
      relatedPosts: JSON.parse(blog.related_posts || '[]'),
    }));

    return NextResponse.json(parsedBlogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

// POST create new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, title, excerpt, content, image, date, author, read_time, category, tags, related_posts } = body;

    const result = db.prepare(`
      INSERT INTO blogs (slug, title, excerpt, content, image, date, author, read_time, category, tags, related_posts)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      slug,
      title,
      excerpt,
      content,
      image,
      date,
      author || null,
      read_time || null,
      category,
      JSON.stringify(tags || []),
      JSON.stringify(related_posts || [])
    );

    return NextResponse.json({ id: result.lastInsertRowid, message: 'Blog created successfully' });
  } catch (error: any) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: error.message || 'Failed to create blog' }, { status: 500 });
  }
}


