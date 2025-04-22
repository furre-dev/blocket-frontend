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
    // we push the user message to the chat window
    newMessage(msg);

    // then we actually try to filter the search query
    const responseMessages = await getBlocketLinkAndExampleListing(msg.content);

    // when we've got the data, we give user the feedback that the Johan is done serching 
    // and is now sending this data to the chat.
    setIsTyping(true);

    // random delay to "replicate" a humans writing time
    await randomDelay();

    responseMessages.forEach((message) => {
      newMessage(message)
    })

    // now Johan has sent all the messages to the chat and can stop writing.
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