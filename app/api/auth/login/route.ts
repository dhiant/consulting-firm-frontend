import { NextRequest, NextResponse } from "next/server";
import {
  verifyAdmin,
  isLockedOut,
  recordLoginAttempt,
  createSession,
  getUserIdByEmail,
} from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Get IP address for rate limiting
    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check if account is locked out
    if (isLockedOut(email)) {
      recordLoginAttempt(email, false, ipAddress);
      return NextResponse.json(
        {
          error:
            "Too many failed login attempts. Please try again in 15 minutes.",
        },
        { status: 429 }
      );
    }

    // Verify credentials
    const isValid = verifyAdmin(email, password);

    if (!isValid) {
      recordLoginAttempt(email, false, ipAddress);
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Get user ID and create session
    const userId = getUserIdByEmail(email);
    if (!userId) {
      recordLoginAttempt(email, false, ipAddress);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create secure session token
    const sessionToken = createSession(userId);
    recordLoginAttempt(email, true, ipAddress);

    // Set secure session cookie
    const cookieStore = await cookies();
    cookieStore.set("admin_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
