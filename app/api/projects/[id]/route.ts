import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { checkAuth } from "@/lib/auth-utils";

// GET single project
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const project = db
      .prepare("SELECT * FROM projects WHERE id = ?")
      .get(params.id);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Parse JSON fields
    const projectRow = project as { sections?: string; [key: string]: unknown };
    const parsedProject = {
      ...(project as Record<string, unknown>),
      sections: JSON.parse(projectRow.sections || "[]"),
    };

    return NextResponse.json(parsedProject);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

// PUT update project
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const result = db
      .prepare(
        `UPDATE projects SET 
         slug = ?, title = ?, location = ?, category = ?, image = ?, 
         sections = ?, cta_prompt = ?, cta_link_text = ?, cta_href = ?, 
         display_order = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ?`
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
        display_order || 0,
        params.id
      );

    if (result.changes === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating project:", error);
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
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE project
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!(await checkAuth())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = db
      .prepare("DELETE FROM projects WHERE id = ?")
      .run(params.id);

    if (result.changes === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
