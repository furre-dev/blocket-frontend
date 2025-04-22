import { createNewOrValidateCurrentSessionToken } from "@/utils/session/createNewOrValidateCurrentSessionToken";
import { SessionState } from "@/utils/session/types";
import { NextResponse } from "next/server";

export async function GET() {
  // create new or validate current session token
  const state = await createNewOrValidateCurrentSessionToken();

  // if the state is not error-state, return success: true
  return NextResponse.json({ success: state !== SessionState.ERROR ? true : false })
}