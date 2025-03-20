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
      <form onSubmit={handleSubmit(submitInput)} className="max-w-[450px] mx-auto mt-4 md:mt-20">
        <div className="flex flex-col sm:flex-row gap-2 border-gray-300 md:border md:bg-white rounded-lg p-2">
          <input
            autoComplete="off"
            {...register("description", { required: "Skriv en beskrivning om bilen du söker!" })}
            placeholder="Vilken BMW är du ute efter?"
            className="flex-1 px-2 py-2 rounded-lg border border-gray-300 bg-transparent bg-white md:border-none text-black placeholder:text-gray-500 focus:ring-0 outline-none" />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-black/80">Search</button>
        </div>
        {errors.description && <p className="text-[#ef4050] absolute">{errors.description.message}</p>}
      </form>
    </>
  )
}