import { motion as m } from "framer-motion"
import { RefObject } from "react"
import MessageBubble from "../MessageBubble"
import { Message } from "@/utils/types/messageTypes"

export default function ChatSection({ messages, isTyping, scrollRef }: { messages: Message[] | null, scrollRef: RefObject<HTMLElement>, isTyping: boolean }) {
  return (
    <m.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, }}
      transition={{ type: "spring", delay: 0.4 }}
      exit={{ opacity: 0, y: 10, transition: { delay: 0.4 } }}
      layout
      ref={scrollRef}
      className="chat-section safari_only w-full flex-grow pt-2 pb-1 overflow-y-scroll overflow-x-hidden flex flex-col gap-2">
      {messages?.map((msg, i) => {
        return (
          <MessageBubble key={i} message={msg} />
        )
      })}
      {isTyping && (
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-auto animate-pulse font-bold">
          Johan skriver...
        </m.p>
      )}
    </m.section>
  )
}