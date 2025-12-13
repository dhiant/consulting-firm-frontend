import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { checkAuth } from "@/lib/auth-utils";

// GET single blog
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const blog = db.prepare("SELECT * FROM blogs WHERE id = ?").get(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Convert tags to comma-separated string for admin panel
    const blogRow = blog as {
      tags?: string;
      [key: string]: unknown;
    };
    let tagsString = "";
    if (blogRow.tags) {
      // Handle both JSON array format (backward compatibility) and comma-separated string
      if (typeof blogRow.tags === "string") {
        if (blogRow.tags.startsWith("[")) {
          try {
            const parsed = JSON.parse(blogRow.tags);
            tagsString = Array.isArray(parsed)
              ? parsed.join(", ")
              : blogRow.tags;
          } catch {
            tagsString = blogRow.tags;
          }
        } else {
          tagsString = blogRow.tags;
        }
      }
    }

    return NextResponse.json({
      ...(blog as Record<string, unknown>),
      tags: tagsString,
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// PUT update blog
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
      excerpt,
      content,
      image,
      date,
      author,
      read_time,
      category,
      tags,
      related_posts,
    } = data;

    // Save tags as comma-separated string
    const tagsString =
      typeof tags === "string" ? tags : (tags || []).join(", ");

    const result = db
      .prepare(
        `UPDATE blogs SET 
         slug = ?, title = ?, excerpt = ?, content = ?, image = ?, 
         date = ?, author = ?, read_time = ?, category = ?, 
         tags = ?, related_posts = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ?`
      )
      .run(
        slug,
        title,
        excerpt,
        content,
        image,
        date,
        author || null,
        read_time || null,
        category,
        tagsString,
        JSON.stringify(related_posts || []),
        params.id
      );

    if (result.changes === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating blog:", error);
    if (
      error instanceof Error &&
      "code" in error &&
      error.code === "SQLITE_CONSTRAINT_UNIQUE"
    ) {
      return NextResponse.json(
        { error: "Blog with this slug already exists" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!(await checkAuth())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = db.prepare("DELETE FROM blogs WHERE id = ?").run(params.id);

    if (result.changes === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
