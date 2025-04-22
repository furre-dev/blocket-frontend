"use server";

import { cookies } from "next/headers";

export const getSessionTokenCookie = async () => {
  const cookie = await cookies().get("session-token")?.value || null
  return cookie
}