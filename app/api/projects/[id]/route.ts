import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// GET single project
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const project = db.prepare('SELECT * FROM projects WHERE id = ? OR slug = ?').get(params.id, params.id);
    
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    const parsedProject = {
      ...project,
      sections: JSON.parse((project as any).sections || '[]'),
      cta: {
        prompt: (project as any).cta_prompt,
        linkText: (project as any).cta_link_text,
        href: (project as any).cta_href,
      },
    };

    return NextResponse.json(parsedProject);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 });
  }
}

// PUT update project
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { slug, title, location, category, image, sections, cta, display_order } = body;

    db.prepare(`
      UPDATE projects 
      SET slug = ?, title = ?, location = ?, category = ?, image = ?, 
          sections = ?, cta_prompt = ?, cta_link_text = ?, cta_href = ?, 
          display_order = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ? OR slug = ?
    `).run(
      slug,
      title,
      location,
      category,
      image,
      JSON.stringify(sections || []),
      cta?.prompt || '',
      cta?.linkText || '',
      cta?.href || '',
      display_order || 0,
      params.id,
      params.id
    );

    return NextResponse.json({ message: 'Project updated successfully' });
  } catch (error: any) {
    console.error('Error updating project:', error);
    return NextResponse.json({ error: error.message || 'Failed to update project' }, { status: 500 });
  }
}

// DELETE project
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    db.prepare('DELETE FROM projects WHERE id = ? OR slug = ?').run(params.id, params.id);
    return NextResponse.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}


