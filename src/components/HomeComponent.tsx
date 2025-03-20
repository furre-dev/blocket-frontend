"use client"
import DescriptionForm from "./molecules/DescriptionForm";
import { useHouseQuery } from "@/utils/hooks/useHouseQuery";
import { useState } from "react";



export default function HomeComponent() {
  const [userQuery, setUserQuery] = useState<string | null>(null);

  const { loading, error } = useHouseQuery(userQuery);

  if (loading) return <div>Loading</div>

  return (
    <main
      className="max-w-[85%] min-h-screen flex flex-col justify-center mx-auto">
      <div className="bg-black w-full h-[80vh] rounded-2xl bg-gradient-to-br from-[#DBEAFE] to-[#F2E8FF] pt-10 px-4 lg:px-0 md:pt-24">
        <h1 className="text-[#CD7BE7] text-4xl md:text-7xl lg:text-8xl font-semibold text-center md:!leading-[100px] lg:!leading-[120px]
        text-transparent bg-clip-text bg-gradient-to-br from-[#766BF6] to-[#CD7BE7]">The Intelligent Searcher</h1>
        <DescriptionForm setUserQuery={setUserQuery} />
        <p className="w-full max-w-[500px] text-center mx-auto font-medium mt-4 md:mt-9">
          This was a project I created for Strawberry in under 1 hour. So it’s obviously very limited. For now you can only search for BMW cars on the Swedish car sales platform Blocket.
        </p>
        <p className="w-full max-w-[500px] text-center mx-auto font-medium mt-3 md:mt-4">
          Search for any BMW you want. For example
          <br />
          <span className="font-bold">"BMW F10 M5 max 500k och 10k mil"</span> or <span className="font-bold">"E90 M3"</span>
          <br /> The AI search engine will saerch the internet to find relevant filtering information.
        </p>
      </div>
    </main>
  )
}