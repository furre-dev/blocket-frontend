"use client"
import { useState, useTransition } from "react";
import { createDataFromUserPrompt } from "../functions/api-functions/createDataFromUserPrompt";
import { generateCarSearchURL } from "../functions/generateCarSearchURL";
import { findCarModel } from "../functions/api-functions/findCarModel";
import { CarListing, findFirstCarFormRelevantListings } from "../functions/api-functions/findFirstCarFromRelevantListings";

export type UrlState = "loading" | "success" | "error";

type CarListingMessageResponse = {
  listings_url: string | null,
  example_car: CarListing | null
} | null

export function useSearchQuery() {
  const [urlState, setUrlState] = useState<UrlState | null>(null)

  const createBlocketLinkWithUserSearchFilters = async (input: string | null): Promise<CarListingMessageResponse | null> => {
    setUrlState(null);
    if (!input) {
      return null;
    }

    setUrlState("loading");
    try {
      const result = await createDataFromUserPrompt(input);
      if (!result || !result.car_data) {
        setUrlState("error");
        return null;
      }
      const blocketUrl = generateCarSearchURL(result.car_data);
      const firstListing = await findFirstCarFormRelevantListings(result.car_data);
      setUrlState("success");
      return {
        listings_url: blocketUrl,
        example_car: firstListing.data ? firstListing.data : null
      };
    } catch (e) {
      setUrlState("error");
      return null
    }
  }


  return { urlState, createBlocketLinkWithUserSearchFilters }
}