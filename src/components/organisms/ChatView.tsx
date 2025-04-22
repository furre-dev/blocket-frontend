"use client"

import useMessages from "@/utils/hooks/useMessages";
import LogoSection from "../atoms/LogoSection";
import ChatSection from "../molecules/chat-sections/ChatSection";
import ChatFormSection from "../molecules/chat-sections/ChatFormSection";
import { useEffect } from "react";
import { setSessionCookie } from "@/utils/session/setSessionCookie";
import { getSessionTokenCookie } from "@/utils/session/getSessionTokenCookie";

export default function ChatView() {
  const { messages, handleSendMessage, isTyping, scrollRef } = useMessages();

  useEffect(() => {
    (async () => {
      await setSessionCookie()
    })()
  }, [])

  return (
    <section className="w-full h-full flex flex-col items-center">
      {/* Upper logo section */}
      <LogoSection />
      {/* Chat section */}
      <ChatSection
        messages={messages}
        isTyping={isTyping}
        scrollRef={scrollRef}
      />
      {/* Chat input */}
      <ChatFormSection
        handleSendMessage={handleSendMessage}
      />
    </section>
  )
}