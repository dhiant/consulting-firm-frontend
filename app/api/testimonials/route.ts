import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// GET all testimonials
export async function GET() {
  try {
    const testimonials = db.prepare(`
      SELECT * FROM testimonials 
      ORDER BY display_order ASC, created_at DESC
    `).all();

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

// POST create new testimonial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { quote, name, designation, image_url, display_order } = body;

    const result = db.prepare(`
      INSERT INTO testimonials (quote, name, designation, image_url, display_order)
      VALUES (?, ?, ?, ?, ?)
    `).run(
      quote,
      name,
      designation,
      image_url,
      display_order || 0
    );

    return NextResponse.json({ id: result.lastInsertRowid, message: 'Testimonial created successfully' });
  } catch (error: any) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json({ error: error.message || 'Failed to create testimonial' }, { status: 500 });
  }
}


