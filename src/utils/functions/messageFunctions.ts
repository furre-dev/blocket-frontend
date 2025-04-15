import { Message } from "../hooks/useMessages";
import { CarListing } from "./api-functions/findFirstCarFromRelevantListings";

export const defaultErrorMessage = "Det verkar som att det inte finns några bilar som matchar din sökning just nu. Du kanske kan prova att ange fler detaljer som årsmodell, prisintervall eller önskad körsträcka för att få bättre resultat."

export const createLinkMessage = ({ listing, link_to_listings }: {
  listing: CarListing | null,
  link_to_listings: string | null
}): Message => {
  return {
    content: null,
    isLink: {
      listing: listing,
      link_to_listings: link_to_listings
    },
    sender: "system"
  }
}

export const createMessage = (content: string | null, sender: Message["sender"]): Message | null => {
  if (!content) return null;

  return {
    content: content,
    isLink: {
      listing: null,
      link_to_listings: null
    },
    sender: sender
  }
}