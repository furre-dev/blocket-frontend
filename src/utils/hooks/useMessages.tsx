import { useEffect, useRef, useState } from "react";
import { getBlocketLinkAndExampleListing } from "./useSearchQuery";
import { Message, MessageType, TextInputMessage } from "../types/messageTypes";
import { randomDelay } from "../getRandomDelay";

export default function useMessages() {
  const scrollRef = useRef<HTMLElement>(null);

  const [messages, setMessages] = useState<Message[] | null>([{
    sender: "system",
    content: "Hej, Johan heter jag och är bil-expert på Blocket! Berätta gärna vad du är ute efter för bil, så ska jag hjälpa dig att hitta rätt.",
    messageType: MessageType.TEXT_INPUT,
  }]);
  const [isTyping, setIsTyping] = useState<boolean>(false)


  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    })
  }, [messages?.length, isTyping]);

  const handleSendMessage = async (msg: TextInputMessage) => {
    newMessage(msg);

    await randomDelay();

    setIsTyping(true);

    const responseMessages = await getBlocketLinkAndExampleListing(msg.content);

    responseMessages.forEach((message) => {
      newMessage(message)
    })

    setIsTyping(false);
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