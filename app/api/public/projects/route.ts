import { NextResponse } from "next/server";
import db from "@/lib/db";

// GET all projects (public)
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
        cta_prompt?: string;
        cta_link_text?: string;
        cta_href?: string;
        [key: string]: unknown;
      };
      return {
        ...(project as Record<string, unknown>),
        sections: JSON.parse(projectRow.sections || "[]"),
        cta: {
          prompt: projectRow.cta_prompt || "",
          linkText: projectRow.cta_link_text || "",
          href: projectRow.cta_href || "",
        },
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
