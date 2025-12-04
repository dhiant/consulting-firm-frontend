import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// GET all projects
export async function GET() {
  try {
    const projects = db.prepare(`
      SELECT * FROM projects 
      ORDER BY display_order ASC, created_at DESC
    `).all();
    
    // Parse JSON fields
    const parsedProjects = projects.map((project: any) => ({
      ...project,
      sections: JSON.parse(project.sections || '[]'),
      cta: {
        prompt: project.cta_prompt,
        linkText: project.cta_link_text,
        href: project.cta_href,
      },
    }));

    return NextResponse.json(parsedProjects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

// POST create new project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, title, location, category, image, sections, cta, display_order } = body;

    const result = db.prepare(`
      INSERT INTO projects (slug, title, location, category, image, sections, cta_prompt, cta_link_text, cta_href, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
      display_order || 0
    );

    return NextResponse.json({ id: result.lastInsertRowid, message: 'Project created successfully' });
  } catch (error: any) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: error.message || 'Failed to create project' }, { status: 500 });
  }
}


