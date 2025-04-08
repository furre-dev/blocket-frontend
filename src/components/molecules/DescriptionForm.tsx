import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import "material-symbols"

export type UserInput = {
  description: string;
}



export default function DescriptionForm({ handleSearch }: { handleSearch: (input: string | null) => Promise<null | undefined> }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserInput>()

  const submitInput = async (inputData: UserInput) => {
    handleSearch(inputData.description);
  };



  return (
    <>
      <form onSubmit={handleSubmit(submitInput)} className="w-full mt-4 md:mt-10">
        <div className="w-full relative">
          <input
            autoComplete="off"
            {...register("description", { required: "Skriv en beskrivning om bilen du söker!" })}
            placeholder="Beskriv din drömbil"
            className="w-full text-xl py-5 px-4 outline-none rounded-xl border-2 border-[#9F9D9C] placeholder:text-[#9F9D9C]" />
          <button
            type="submit"
            className="absolute right-3 top-2/4 -translate-y-2/4 h-[75%] text-xl px-5 bg-[#EF404F] text-white rounded-xl">Sök</button>
        </div>
        {errors.description && <p className="text-[#ef4050] absolute">{errors.description.message}</p>}
      </form>
    </>
  )
}