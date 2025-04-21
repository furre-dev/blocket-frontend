import ListingLinkPreview from "./ListingLinkPreview";
import { motion as m } from "framer-motion"
import Link from "next/link";
import "material-symbols"
import { Message, MessageType } from "@/utils/types/messageTypes";
import TextMessageBubble from "../atoms/TextMessageBubble";
import ListingLinkAndPreview from "./ListingLinkAndPreview";

export default function MessageBubble({ message }: { message: Message }) {
  if (!message) return null;

  // if message is of type link, render the links.
  if (message.messageType === MessageType.LINK_INPUT) {
    return (
      <ListingLinkAndPreview message={message} />
    )
  }

  // otherwise render a text message
  return (
    <TextMessageBubble message={message} />
  )
}