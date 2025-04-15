import { useEffect, useState } from "react";
import { useSearchQuery } from "./useSearchQuery";
import { CarListing } from "../functions/api-functions/findFirstCarFromRelevantListings";
import { giveFeedbackOnUserInput } from "../functions/openai/giveFeedbackToUserInput";
import { createLinkMessage, createMessage, defaultErrorMessage } from "../functions/messageFunctions";

export type Message = {
  sender: "user" | "system",
  content: string | null,
  isLink: {
    listing: CarListing | null
    link_to_listings: string | null
  }
}

export default function useMessages() {
  const { createBlocketLinkWithUserSearchFilters, urlState } = useSearchQuery();

  const [messages, setMessages] = useState<Message[] | null>([{
    sender: "system",
    content: "Hej, Johan heter jag och är bil-expert på Blocket! Berätta gärna vad du är ute efter för bil, så ska jag hjälpa dig att hitta rätt.",
    isLink: {
      listing: null,
      link_to_listings: null
    }
  }]);
  const [isTyping, setIsTyping] = useState<boolean>(false)

  const handleSendMessage = async (msg: Message | null) => {
    if (!msg) return null;

    newMessage(msg);

    setIsTyping(true);
    const data = await createBlocketLinkWithUserSearchFilters(msg.content);


    // if there was no car data, respond with an 'error' message to the user
    if (!data?.example_car) {
      const feedback = await giveFeedbackOnUserInput(msg.content);
      const feedbackMessage = createMessage(feedback ?? defaultErrorMessage, "system");
      newMessage(feedbackMessage);

      return setIsTyping(false);
    }

    const responseMessage = createMessage(
      "Här är ett exempel som matchar din sökning. Om du tycker att det stämmer, kan du gå direkt till alla annonser. Annars är du välkommen att formulera din sökning på nytt.",
      "system")

    newMessage(responseMessage)

    const linkMessage = createLinkMessage({
      listing: data.example_car,
      link_to_listings: null
    })
    newMessage(linkMessage)

    const listingsLinkMessage = createLinkMessage({
      listing: null,
      link_to_listings: data.listings_url
    })
    newMessage(listingsLinkMessage)

    return setIsTyping(false);
  }

  const newMessage = (msg: Message | null) => {
    if (!msg) return;

    setMessages((prev) => {
      if (!prev) {
        return [msg]
      }

      const newArr = [...prev];
      newArr.push(msg);
      return newArr;
    })
  }

  return { messages, handleSendMessage, isTyping };
}