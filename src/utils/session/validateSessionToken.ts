import { ValidationResponse } from "./types";
import { BACKEND_URL } from "../backendUrl";
import { getSessionTokenCookie } from "./getSessionTokenCookie";

export const validateSessionToken = async () => {
  const currentToken = await getSessionTokenCookie();

  if (!currentToken) {
    return false
  }

  // validate via backend
  const response = await fetch(`${BACKEND_URL}/validate-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ token: currentToken })
  });

  const { token_is_valid, error }: ValidationResponse = await response.json();

  if (error) {
    return false
  }

  return token_is_valid
}