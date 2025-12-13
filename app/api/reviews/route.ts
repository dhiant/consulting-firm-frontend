import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { checkAuth } from "@/lib/auth-utils";

// GET all reviews
export async function GET() {
  try {
    const reviews = db
      .prepare(
        "SELECT * FROM reviews ORDER BY display_order ASC, created_at DESC"
      )
      .all();

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

// POST create review
export async function POST(request: NextRequest) {
  try {
    if (!(await checkAuth())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const { project, quote, author, rating, display_order } = data;

    if (!project || !quote || !author) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = db
      .prepare(
        `INSERT INTO reviews (project, quote, author, rating, display_order)
         VALUES (?, ?, ?, ?, ?)`
      )
      .run(project, quote, author, rating || 5, display_order || 0);

    return NextResponse.json({ id: result.lastInsertRowid, success: true });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}
