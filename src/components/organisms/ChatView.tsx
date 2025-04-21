"use client"
import MessageBubble from "../molecules/MessageBubble";
import BlocketLogo from "../svgs/BlocketLogo";
import { motion as m } from "framer-motion"
import { useForm } from "react-hook-form";
import { MessageType, TextInputMessage } from "@/utils/types/messageTypes";
import useMessages from "@/utils/hooks/useMessages";

type UserSearchInput = {
  query: string
}

export default function ChatView() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserSearchInput>()

  const { messages, handleSendMessage, isTyping, scrollRef } = useMessages();

  const submitInput = async (inputData: UserSearchInput) => {
    const message: TextInputMessage = {
      messageType: MessageType.TEXT_INPUT,
      content: inputData.query,
      sender: "user"
    };

    reset();
    handleSendMessage(message);
  };

  return (
    <section className="w-full h-full flex flex-col items-center">
      {/* Upper logo section */}
      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, }}
        transition={{ type: "spring", delay: 0.2 }}
        exit={{ opacity: 0, y: 10, transition: { delay: 0.6 } }}
        className="border-b border-[#D9D9D9] w-full">
        <div
          className="scale-50 w-max mx-auto">
          <BlocketLogo />
        </div>
      </m.div>
      <m.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, }}
        transition={{ type: "spring", delay: 0.4 }}
        exit={{ opacity: 0, y: 10, transition: { delay: 0.4 } }}
        ref={scrollRef}
        className="chat-section safari_only w-full flex-grow py-2 overflow-y-scroll overflow-x-hidden flex flex-col gap-2">
        {messages?.map((msg, i) => {
          return (
            <MessageBubble key={i} message={msg} />
          )
        })}
        {isTyping && <p className="mt-auto animate-pulse font-bold">Johan skriver...</p>}
      </m.section>
      {/* Chat input */}
      <m.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, }}
        transition={{ type: "spring", delay: 0.6 }}
        exit={{ opacity: 0, y: 10, transition: { delay: 0.2 } }}
        onSubmit={handleSubmit(submitInput)} className="w-full flex gap-2">
        <input
          {...register("query", { required: true })}
          placeholder="Beskriv din drömbil"
          className="bg-[#FAFAFA] border-[#D9D9D9] border-2 rounded-[10px] px-5 py-2 flex-grow outline-none" />
        <button className="bg-[#EF404F] px-4 py-0 rounded-[10px] text-white">Skicka</button>
      </m.form>
    </section>
  )
}