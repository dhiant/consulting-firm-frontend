import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { checkAuth } from "@/lib/auth-utils";

// GET all projects
export async function GET() {
  try {
    const projects = db
      .prepare(
        "SELECT * FROM projects ORDER BY display_order ASC, created_at DESC"
      )
      .all();

    // Parse JSON fields
    const parsedProjects = projects.map((project) => {
      const projectRow = project as {
        sections?: string;
        [key: string]: unknown;
      };
      return {
        ...(project as Record<string, unknown>),
        sections: JSON.parse(projectRow.sections || "[]"),
      };
    });

    return NextResponse.json(parsedProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST create project
export async function POST(request: NextRequest) {
  try {
    if (!(await checkAuth())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const {
      slug,
      title,
      location,
      category,
      image,
      sections,
      cta_prompt,
      cta_link_text,
      cta_href,
      display_order,
    } = data;

    if (
      !slug ||
      !title ||
      !location ||
      !category ||
      !image ||
      !sections ||
      !cta_prompt ||
      !cta_link_text ||
      !cta_href
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = db
      .prepare(
        `INSERT INTO projects (slug, title, location, category, image, sections, 
         cta_prompt, cta_link_text, cta_href, display_order)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .run(
        slug,
        title,
        location,
        category,
        image,
        JSON.stringify(sections),
        cta_prompt,
        cta_link_text,
        cta_href,
        display_order || 0
      );

    return NextResponse.json({ id: result.lastInsertRowid, success: true });
  } catch (error) {
    console.error("Error creating project:", error);
    if (
      error instanceof Error &&
      "code" in error &&
      error.code === "SQLITE_CONSTRAINT_UNIQUE"
    ) {
      return NextResponse.json(
        { error: "Project with this slug already exists" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
