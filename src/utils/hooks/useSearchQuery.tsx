"use server"
import HttpStatusCode from "../HttpsStatusCode";
import { createErrorMessage, messageWithError } from "../messageWithError";
import { BlocketAPIResponse } from "../types/apiResponse";
import { Message, MessageType } from "../types/messageTypes";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const getBlocketLinkAndExampleListing = async (input: string): Promise<Message[]> => {
  if (!BACKEND_URL) {
    return [messageWithError(HttpStatusCode.INTERNAL_SERVER_ERROR)]
  }

  try {
    const response = await fetch(`${BACKEND_URL}/create-filters-from-query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ search_query: input })
    });

    const { data, error }: BlocketAPIResponse = await response.json();

    if (error) {
      if (error.feedback) {
        return [createErrorMessage(error.feedback)];
      }

      return [messageWithError(error.code)];
    }

    const linkMessages: Message[] = [
      {
        messageType: MessageType.TEXT_INPUT,
        content: "Här är ett exempel som matchar din sökning. Om du tycker att det stämmer, kan du gå direkt till alla annonser. Annars är du välkommen att formulera din sökning på nytt.",
        sender: "system"
      },
      {
        messageType: MessageType.LINK_INPUT,
        isLink: {
          listing: data.example_listing,
          link_to_listings: data.web_url
        }
      }];

    return linkMessages;
  } catch (e) {
    console.log(e)
    return [messageWithError(HttpStatusCode.INTERNAL_SERVER_ERROR)];
  }
}
