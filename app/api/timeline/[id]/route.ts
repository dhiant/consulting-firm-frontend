import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// GET single timeline event
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const event = db.prepare('SELECT * FROM timeline_events WHERE id = ?').get(params.id);
    
    if (!event) {
      return NextResponse.json({ error: 'Timeline event not found' }, { status: 404 });
    }

    const parsedEvent = {
      ...event,
      images: JSON.parse((event as any).images || '[]'),
      stats: JSON.parse((event as any).stats || '[]'),
    };

    return NextResponse.json(parsedEvent);
  } catch (error) {
    console.error('Error fetching timeline event:', error);
    return NextResponse.json({ error: 'Failed to fetch timeline event' }, { status: 500 });
  }
}

// PUT update timeline event
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { year, title, description, badge_text, badge_color, images, stats, display_order } = body;

    db.prepare(`
      UPDATE timeline_events 
      SET year = ?, title = ?, description = ?, badge_text = ?, badge_color = ?, 
          images = ?, stats = ?, display_order = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(
      year,
      title,
      description,
      badge_text || null,
      badge_color || null,
      JSON.stringify(images || []),
      JSON.stringify(stats || []),
      display_order || 0,
      params.id
    );

    return NextResponse.json({ message: 'Timeline event updated successfully' });
  } catch (error: any) {
    console.error('Error updating timeline event:', error);
    return NextResponse.json({ error: error.message || 'Failed to update timeline event' }, { status: 500 });
  }
}

// DELETE timeline event
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    db.prepare('DELETE FROM timeline_events WHERE id = ?').run(params.id);
    return NextResponse.json({ message: 'Timeline event deleted successfully' });
  } catch (error) {
    console.error('Error deleting timeline event:', error);
    return NextResponse.json({ error: 'Failed to delete timeline event' }, { status: 500 });
  }
}


