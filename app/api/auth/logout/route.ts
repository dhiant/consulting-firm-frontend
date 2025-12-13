import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { invalidateSession } from "@/lib/auth";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    // Invalidate session in database if token exists
    if (session?.value) {
      invalidateSession(session.value);
    }

    // Delete cookie
    cookieStore.delete("admin_session");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
