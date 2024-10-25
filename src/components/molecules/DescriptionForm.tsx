import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import "material-symbols"

export type UserInput = {
  description: string;
}



export default function DescriptionForm({ setUserQuery }: { setUserQuery: Dispatch<SetStateAction<string | null>> }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserInput>()

  const submitInput = async (inputData: UserInput) => {
    setUserQuery(inputData.description)
    reset();
  };



  return (
    <>
      <form onSubmit={handleSubmit(submitInput)} className="mt-14">
        <div className="w-full flex items-center border-[2px] border-[#9F9D9C] rounded-[11px] p-3 relative">
          <span className="material-symbols-rounded text-[#9F9D9C] !text-[38px] pr-3">
            search
          </span>
          <input
            autoComplete="off"
            {...register("description", { required: "Skriv en beskrivning om bilen du söker!" })}
            placeholder="Vilken bil är du ute efter?"
            className="text-2xl font-normal w-full outline-none bg-transparent" />
          <button type="submit" className="w-[100px] bg-[#0071EB] text-white rounded-[11px] absolute right-2 h-[80%] hover:opacity-80">Sök</button>
        </div>
        {errors.description && <p className="text-[#ef4050] absolute">{errors.description.message}</p>}
      </form>
    </>
  )
}