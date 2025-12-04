import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// GET all timeline events
export async function GET() {
  try {
    const events = db.prepare(`
      SELECT * FROM timeline_events 
      ORDER BY display_order ASC, year DESC
    `).all();
    
    // Parse JSON fields
    const parsedEvents = events.map((event: any) => ({
      ...event,
      images: JSON.parse(event.images || '[]'),
      stats: JSON.parse(event.stats || '[]'),
    }));

    return NextResponse.json(parsedEvents);
  } catch (error) {
    console.error('Error fetching timeline events:', error);
    return NextResponse.json({ error: 'Failed to fetch timeline events' }, { status: 500 });
  }
}

// POST create new timeline event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { year, title, description, badge_text, badge_color, images, stats, display_order } = body;

    const result = db.prepare(`
      INSERT INTO timeline_events (year, title, description, badge_text, badge_color, images, stats, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      year,
      title,
      description,
      badge_text || null,
      badge_color || null,
      JSON.stringify(images || []),
      JSON.stringify(stats || []),
      display_order || 0
    );

    return NextResponse.json({ id: result.lastInsertRowid, message: 'Timeline event created successfully' });
  } catch (error: any) {
    console.error('Error creating timeline event:', error);
    return NextResponse.json({ error: error.message || 'Failed to create timeline event' }, { status: 500 });
  }
}


