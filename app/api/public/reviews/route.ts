import { NextResponse } from "next/server";
import db from "@/lib/db";

// GET all reviews (public)
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
