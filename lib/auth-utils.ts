import { cookies } from "next/headers";
import { verifySession } from "./auth";

/**
 * Check if the current request is authenticated
 * Returns true if valid session exists, false otherwise
 */
export async function checkAuth(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    if (!session?.value) {
      return false;
    }

    const { valid } = verifySession(session.value);
    return valid;
  } catch (error) {
    console.error("Auth check error:", error);
    return false;
  }
}
