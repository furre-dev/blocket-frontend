import { createSessionToken } from "@/utils/session/createSessionToken";
import { SessionState } from "@/utils/session/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const state = await createSessionToken();

  // if the state is not error-state, return success: true
  return NextResponse.json({ success: state !== SessionState.ERROR ? true : false })
}