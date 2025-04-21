"use client"
import { messageWithError } from "../messageWithError";
import { ExampleListing } from "../types/exampleListing";
import { Message, MessageType } from "../types/messageTypes";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const getBlocketLinkAndExampleListing = async (input: string): Promise<Message[]> => {

  if (!BACKEND_URL) {
    return [{
      content: "Vi upplever just nu tekniska problem med tjänsten. Vänligen försök igen om en stund.",
      sender: "system",
      messageType: MessageType.TEXT_INPUT
    }]
  }

  try {
    const response = await fetch(`${BACKEND_URL}/create-filters-from-query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ search_query: input })
    });

    if (!response.ok) {
      const errorMessageToUser = messageWithError(response.status)
      return [errorMessageToUser];
    }

    const data: { web_url: string, example_listing: ExampleListing } | null = await response.json();

    if (!data) {
      const errorMessageToUser = messageWithError(500)
      return [errorMessageToUser];
    }

    return [
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
      }]
  } catch (e) {
    console.log(e)
    return [messageWithError(500)];
  }
}
