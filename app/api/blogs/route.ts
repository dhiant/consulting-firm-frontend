import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { checkAuth } from "@/lib/auth-utils";

// GET all blogs
export async function GET() {
  try {
    const blogs = db
      .prepare("SELECT * FROM blogs ORDER BY created_at DESC")
      .all();

    // Convert tags to comma-separated string for admin panel
    const processedBlogs = blogs.map((blog) => {
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
      return {
        ...(blog as Record<string, unknown>),
        tags: tagsString,
      };
    });

    return NextResponse.json(processedBlogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST create blog
export async function POST(request: NextRequest) {
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

    if (
      !slug ||
      !title ||
      !excerpt ||
      !content ||
      !image ||
      !date ||
      !category
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save tags as comma-separated string
    const tagsString =
      typeof tags === "string" ? tags : (tags || []).join(", ");

    const result = db
      .prepare(
        `INSERT INTO blogs (slug, title, excerpt, content, image, date, author, read_time, category, tags, related_posts)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
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
        JSON.stringify(related_posts || [])
      );

    return NextResponse.json({ id: result.lastInsertRowid, success: true });
  } catch (error) {
    console.error("Error creating blog:", error);
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
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
