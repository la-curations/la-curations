"use server";

import { sql } from "@vercel/postgres";

export async function joinWaitlist(email: string, platform: string) {
  try {
    // Basic server-side validation
    if (!email || !email.includes("@")) {
      return { success: false, error: "Please enter a valid email address." };
    }

    /**
     * UPDATED SQL FOR 'theater' TABLE:
     *
     * CREATE TABLE IF NOT EXISTS theater (
     *   id SERIAL PRIMARY KEY,
     *   email VARCHAR(255) UNIQUE NOT NULL,
     *   platform VARCHAR(50),
     *   type VARCHAR(50) DEFAULT 'waitlist',
     *   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
     * );
     */

    // Check if email already exists
    const existingUser = await sql`
      SELECT id FROM theater WHERE email = ${email} LIMIT 1;
    `;

    if (existingUser.rowCount && existingUser.rowCount > 0) {
      // Option A: Just return success because they ARE on the list
      // Option B: Return a special message. Let's go with B to fulfill the request.
      return {
        success: true,
        isDuplicate: true,
        message: "You're already on the list! We appreciate your patience.",
      };
    }

    await sql`
      INSERT INTO theater (email, platform, type)
      VALUES (${email}, ${platform}, 'waitlist');
    `;

    return { success: true, isDuplicate: false };
  } catch (error: any) {
    console.error("Database error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
