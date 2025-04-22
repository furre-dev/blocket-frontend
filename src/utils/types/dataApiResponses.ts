import HttpStatusCode from "../HttpsStatusCode";
import { ExampleListing } from "./exampleListing";

type BlocketAPIDataType = { web_url: string, example_listing: ExampleListing }

export type BlocketAPIError = Error & { code: HttpStatusCode, feedback: string | null }

export type BlocketAPIResponse = {
  data: BlocketAPIDataType,
  error: null
} | {
  data: null,
  error: BlocketAPIError
}

