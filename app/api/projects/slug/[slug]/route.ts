import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const project = db
      .prepare("SELECT * FROM projects WHERE slug = ?")
      .get(params.slug);

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
