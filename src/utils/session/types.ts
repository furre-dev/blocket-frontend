import { BlocketAPIError } from "../types/dataApiResponses"

export type SessionTokenResponse = { token: string, error: null }

export type SessionResponse = SessionTokenResponse | {
  token: null,
  error: BlocketAPIError
}

// ----------------------------------------------------------------------------------------------

export type SessionTokenValidationResponse = { token_is_valid: boolean, error: null }

export type ValidationResponse = SessionTokenValidationResponse | {
  token_is_valid: null,
  error: BlocketAPIError
}


export enum SessionState {
  ALREADY_VALID = "already_valid",
  ERROR = "error",
  NEW_TOKEN_CREATED = "new_token_created"
}

export type CurrentToken = string | undefined