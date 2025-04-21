"use client"
import { useState } from "react";
import { ExampleListing } from "../types/exampleListing";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export type UrlState = "loading" | "success" | "error";

type ExampleListingMessageResponse = {
  web_url: string | null,
  example_listing: ExampleListing | null
} | null

export function useSearchQuery() {
  const [urlState, setUrlState] = useState<UrlState | null>(null)

  const getBlocketLinkAndExampleListing = async (input: string | null): Promise<ExampleListingMessageResponse | null> => {
    setUrlState(null);

    if (!input) {
      return null;
    }

    setUrlState("loading");

    if (!BACKEND_URL) {
      setUrlState("error");
      return {
        example_listing: null,
        web_url: null
      }
    }

    try {
      const response = await fetch(`${BACKEND_URL}/create-filters-from-query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ search_query: input })
      });

      const data: {
        web_url: string | null,
        example_listing: ExampleListing | null
      } = await response.json();

      return {
        web_url: data.web_url,
        example_listing: data.example_listing
      }
    } catch (e) {
      setUrlState("error");
      return null
    }
  }


  return { urlState, getBlocketLinkAndExampleListing }
}