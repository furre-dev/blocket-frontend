"use client"
import { useSearchQuery } from "@/utils/hooks/useSearchQuery";
import ErrorToast from "./organisms/ErrorToast";
import LandingView from "./molecules/LandingView";
import { AnimatePresence } from "framer-motion"
import BlocketLogo from "./svgs/BlocketLogo";
import useMessages from "@/utils/hooks/useMessages";
import { useState } from "react";
import MessageBubble from "./atoms/MessageBubble";
import ChatView from "./molecules/ChatView";

export default function HomeComponent({ chatMode }: { chatMode: boolean }) {
  return (
    <main
      className="max-w-[85%] w-[1000px] h-screen flex justify-center mx-auto py-8">
      {/* {urlState === "error" && <ErrorToast />} */}
      <section className="flex flex-col justify-center items-center w-full relative">
        <AnimatePresence mode="wait">
          {!chatMode ?
            <LandingView key={"landing_view"} />
            :
            <ChatView key={"chat_view"} />}
        </AnimatePresence>
      </section>
    </main>
  )
}
