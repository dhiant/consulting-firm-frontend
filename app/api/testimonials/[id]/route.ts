import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// GET single testimonial
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const testimonial = db.prepare('SELECT * FROM testimonials WHERE id = ?').get(params.id);
    
    if (!testimonial) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }

    return NextResponse.json(testimonial);
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonial' }, { status: 500 });
  }
}

// PUT update testimonial
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { quote, name, designation, image_url, display_order } = body;

    db.prepare(`
      UPDATE testimonials 
      SET quote = ?, name = ?, designation = ?, image_url = ?, display_order = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(
      quote,
      name,
      designation,
      image_url,
      display_order || 0,
      params.id
    );

    return NextResponse.json({ message: 'Testimonial updated successfully' });
  } catch (error: any) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json({ error: error.message || 'Failed to update testimonial' }, { status: 500 });
  }
}

// DELETE testimonial
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    db.prepare('DELETE FROM testimonials WHERE id = ?').run(params.id);
    return NextResponse.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
  }
}


