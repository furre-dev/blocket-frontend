import { useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"
import { motion as m } from "framer-motion"
import { MessageType, TextInputMessage } from "@/utils/types/messageTypes"

type UserSearchInput = {
  query: string
}

export default function ChatFormSection({ handleSendMessage }: {
  handleSendMessage: (msg: TextInputMessage) => Promise<void>
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserSearchInput>()

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
    <m.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, }}
      transition={{ type: "spring", delay: 0.6 }}
      exit={{ opacity: 0, y: 10, transition: { delay: 0.2 } }}
      onSubmit={handleSubmit(submitInput)} className="w-full flex gap-2 pt-2 md:pt-3 border-t border-[#D9D9D9]">
      <input
        {...register("query", { required: true })}
        placeholder="Beskriv din drömbil"
        className="bg-[#FAFAFA] border-[#D9D9D9] border-2 rounded-[10px] px-5 py-2 flex-grow outline-none" />
      <button className="bg-[#EF404F] px-4 py-0 rounded-[10px] text-white">Skicka</button>
    </m.form>
  )
}