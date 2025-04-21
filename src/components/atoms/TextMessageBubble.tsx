"use client"
import { TextInputMessage } from "@/utils/types/messageTypes";
import { motion as m } from "framer-motion";

export default function TextMessageBubble({ message }: { message: TextInputMessage }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={
        `${message.sender === "system" ? "bg-[#F1F5F9] border-[#A4A4A4] border rounded-bl-none" : "bg-[#EF404F] text-white rounded-br-none ml-auto"} 
        w-max max-w-[90%] md:max-w-[60%] px-4 py-3 font-medium rounded-[10px]`}>
      {message.content}
    </m.div>
  )
}