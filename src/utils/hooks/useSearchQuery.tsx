"use client"
import { useState, useTransition } from "react";
import { createDataFromUserPrompt } from "../functions/api-functions/createDataFromUserPrompt";
import { generateCarSearchURL } from "../functions/generateCarSearchURL";
import { findCarModel } from "../functions/api-functions/findCarModel";

export type UrlState = "loading" | "success" | "error";

type HookResponse = {
  urlState: UrlState | null,
  finalUrl: string | null,
  createBlocketLinkWithUserSearchFilters: (input: string | null) => Promise<null | undefined>
}

export function useSearchQuery(): HookResponse {
  const [finalUrl, setFinalUrl] = useState<string | null>(null);
  const [urlState, setUrlState] = useState<UrlState | null>(null)

  const createBlocketLinkWithUserSearchFilters = async (input: string | null) => {
    setUrlState(null);
    if (!input) {
      return null;
    }

    setUrlState("loading");
    try {
      const result = await createDataFromUserPrompt(input);
      if (!result) {
        setFinalUrl(null);
        setUrlState("error");
        return null;
      }
      console.log(result)
      const blocketUrl = generateCarSearchURL(result);
      setUrlState("success");
      setFinalUrl(blocketUrl);
    } catch (e) {
      setUrlState("error");
    }
  }


  return { urlState, finalUrl, createBlocketLinkWithUserSearchFilters }
}