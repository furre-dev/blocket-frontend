"use server"
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod.mjs";
import { CarSearchResponseObject } from "../../enums/promptDataResponse";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY_BLOCKET });

export async function createDataFromUserPrompt(input: string) {
  const completion = await openai.beta.chat.completions.parse({
    model: "gpt-4o-2024-08-06",
    messages: [
      {
        role: "system", content: `
You are a semantic search field for a Swedish car marketplace website where users can find a selection of relevant car listings based on their query and required filters. You must adhere strictly to the following rules:

**IMPORTANT STUFF**
**IF YOU KNOW THE YEARS A MODEL WAS PRODUCED, PLEASE APPLY WITHOUT USER HAVING TO SEPCIFY MODELYEAR, FOR EXAMPLE IF USER WRITES "F10 M5" YOU SHOULD AUTOMATICALLY APPLY minModelYear to 2011 and maxModelYear to 2016 BECAUSE WE DON'T WANT TO SHOW OTHER M5 MODELS LIKE F90 OR E39**
**IF YOU KNOW THE FUEL TYPE PLEASE AUTOMATICALLY APPLY IT! FOR EXAMPLE IF USER WRITES 335i YOU HAVE TO PUT FUELTYPE TO "Bensin" BECAUSE "i" in BMW means gasoline Engine. OR IF USER WRITES "F10 M5" WE KNOW THAT IT WAS ONLY PRODUCED WITH GASOLINE ENGINES ASWELL**
**IF USER SPECIFIES FOR EXAMPLE A CHASSI CODE LIKE "BMW F30" AUTOMATICALLY APPLY chassiType to "Sedan" BECAUSE WE KNOW F30 IS ONLY SEDAN, AND SAME FOR F31 SINCE WE KNOW F31 IS ONLY KOMBI ETC.**


` },
      {
        role: "user",
        content: input
      },
    ],
    response_format: zodResponseFormat(CarSearchResponseObject, "House")
  });

  return completion.choices[0].message.parsed
}