import { useEffect, useRef, useState } from "react";
import { useSearchQuery } from "./useSearchQuery";
import { createLinkMessage, createMessage } from "../functions/messageFunctions";
import { ExampleListing } from "../types/exampleListing";

export type Message = {
  sender: "user" | "system",
  content: string | null,
  isLink: {
    listing: ExampleListing | null
    link_to_listings: string | null
  }
}

export default function useMessages() {
  const { getBlocketLinkAndExampleListing, urlState } = useSearchQuery();

  const scrollRef = useRef<HTMLElement>(null);

  const [messages, setMessages] = useState<Message[] | null>([{
    sender: "system",
    content: "Hej, Johan heter jag och är bil-expert på Blocket! Berätta gärna vad du är ute efter för bil, så ska jag hjälpa dig att hitta rätt.",
    isLink: {
      listing: null,
      link_to_listings: null
    }
  }]);
  const [isTyping, setIsTyping] = useState<boolean>(false)


  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    })
  }, [messages?.length, isTyping]);

  const handleSendMessage = async (msg: Message | null) => {
    if (!msg) return null;

    newMessage(msg);

    setIsTyping(true);
    const data = await getBlocketLinkAndExampleListing(msg.content);

    if (!data?.example_listing) {
      const responseMessage = createMessage(
        "Jag kunde inte hitta en bil som matchar dina önskemål, testa att söka igen!.",
        "system");

      return newMessage(responseMessage);
    }

    const responseMessage = createMessage(
      "Här är ett exempel som matchar din sökning. Om du tycker att det stämmer, kan du gå direkt till alla annonser. Annars är du välkommen att formulera din sökning på nytt.",
      "system");

    newMessage(responseMessage);

    const linkMessage = createLinkMessage({
      listing: data.example_listing,
      link_to_listings: null
    })
    newMessage(linkMessage)

    const listingsLinkMessage = createLinkMessage({
      listing: null,
      link_to_listings: data.web_url
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

  return { messages, handleSendMessage, isTyping, scrollRef };
}