"use server"

import { SessionResponse, SessionState } from "./types";
import { BACKEND_URL } from "../backendUrl";
import { validateSessionToken } from "./validateSessionToken";
import { cookies } from "next/headers";

export const createNewOrValidateCurrentSessionToken = async (): Promise<SessionState> => {
  const tokenIsValid = await validateSessionToken();

  if (tokenIsValid) {
    return SessionState.ALREADY_VALID
  }

  const response = await fetch(`${BACKEND_URL}/create-session`);
  const { error, token }: SessionResponse = await response.json();

  if (error) {
    return SessionState.ERROR
  }

  cookies().set("session-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60,
    sameSite: "lax",
  });

  return SessionState.NEW_TOKEN_CREATED
}