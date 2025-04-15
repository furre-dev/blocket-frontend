import { Message } from "@/utils/hooks/useMessages";
import ListingLinkPreview from "../molecules/ListingLinkPreview";
import { motion as m } from "framer-motion"
import Link from "next/link";
import "material-symbols"

export default function MessageBubble({ message }: { message: Message }) {
  if (message.isLink.listing) {
    return <ListingLinkPreview linkListing={message.isLink.listing} />
  }

  if (message.isLink.link_to_listings) {
    return (
      <Link
        target="_blank"
        className="px-4 py-3 bg-[#F1F5F9] border-[#A4A4A4] border w-max rounded-xl text-blue-800 flex justify-center gap-2"
        href={message.isLink.link_to_listings}>
        <span className="material-symbols-rounded my-auto !text-[20px]">
          arrow_outward
        </span>
        Klicka här för att komma till alla annonser som matchar din sökning.
      </Link>

    )
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={
        `${message.sender === "system" ? "bg-[#F1F5F9] border-[#A4A4A4] border rounded-bl-none" : "bg-[#EF404F] text-white rounded-br-none ml-auto"} 
      w-max max-w-[60%] px-4 py-3 font-medium rounded-[10px]`}>
      {message.content}
    </m.div>
  )
}