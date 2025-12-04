import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// GET single blog
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const blog = db.prepare('SELECT * FROM blogs WHERE id = ? OR slug = ?').get(params.id, params.id);
    
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const parsedBlog = {
      ...blog,
      tags: JSON.parse((blog as any).tags || '[]'),
      relatedPosts: JSON.parse((blog as any).related_posts || '[]'),
    };

    return NextResponse.json(parsedBlog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

// PUT update blog
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { slug, title, excerpt, content, image, date, author, read_time, category, tags, related_posts } = body;

    db.prepare(`
      UPDATE blogs 
      SET slug = ?, title = ?, excerpt = ?, content = ?, image = ?, date = ?, 
          author = ?, read_time = ?, category = ?, tags = ?, related_posts = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ? OR slug = ?
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
      JSON.stringify(related_posts || []),
      params.id,
      params.id
    );

    return NextResponse.json({ message: 'Blog updated successfully' });
  } catch (error: any) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ error: error.message || 'Failed to update blog' }, { status: 500 });
  }
}

// DELETE blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    db.prepare('DELETE FROM blogs WHERE id = ? OR slug = ?').run(params.id, params.id);
    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}


