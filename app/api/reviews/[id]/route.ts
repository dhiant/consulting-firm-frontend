import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { checkAuth } from "@/lib/auth-utils";

// GET single review
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const review = db
      .prepare("SELECT * FROM reviews WHERE id = ?")
      .get(params.id);

    if (!review) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    return NextResponse.json(review);
  } catch (error) {
    console.error("Error fetching review:", error);
    return NextResponse.json(
      { error: "Failed to fetch review" },
      { status: 500 }
    );
  }
}

// PUT update review
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!(await checkAuth())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const { project, quote, author, rating, display_order } = data;

    const result = db
      .prepare(
        `UPDATE reviews SET 
         project = ?, quote = ?, author = ?, rating = ?, 
         display_order = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ?`
      )
      .run(project, quote, author, rating || 5, display_order || 0, params.id);

    if (result.changes === 0) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json(
      { error: "Failed to update review" },
      { status: 500 }
    );
  }
}

// DELETE review
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!(await checkAuth())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = db
      .prepare("DELETE FROM reviews WHERE id = ?")
      .run(params.id);

    if (result.changes === 0) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json(
      { error: "Failed to delete review" },
      { status: 500 }
    );
  }
}
