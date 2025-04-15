"use server"
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod.mjs";
import { z } from "zod";
import { getAllModelsForCurrentBrand } from "@/utils/enums/allCarBrandsAndModels";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY_BLOCKET });

export async function findCarModel({ make_brand, input }: { make_brand: string | null, input: string }) {
  if (!make_brand) {
    return null
  }
  const completion = await openai.beta.chat.completions.parse({
    model: "o3-mini",
    messages: [
      {
        role: "system", content: `
You are a semantic search field for a Swedish car marketplace where user gives you a car BRAND and a text message, and you try to figure out what 'model' the user is trying to search for. For example if BRAND is BMW and user has entered 'I want a bmw 525d' you should return make_model: 525.

**AUTO TYPE THE CAR MODEL, FOR EXAMPLE IF USER WRITES E46 BMW, ASSIGN 3-Serien, because you obviously know E46 is a 3 series**
** BUT BE CAREFUL WHEN USER WRITES THE MODEL NAME AS 340i DON'T ASSING 3-Serien, assign 340 as Model **
` },
      {
        role: "user",
        content: `
        Car brand that is already selected: ${make_brand}
        The whole message: ${input}
        `
      },
    ],
    response_format: zodResponseFormat(createZodSchema(make_brand), "CarModelResponseFormat")
  });

  console.log(completion.choices[0].message.parsed)

  return completion.choices[0].message.parsed
}

const createZodSchema = (make_brand: string) => {
  const models = getAllModelsForCurrentBrand(make_brand) as [string, ...string[]];

  if (!models) {
    return z.object({
      make_model: z.null()
    })
  }
  const CarModelResponseFormat = z.object({
    make_model: z.union([z.enum(models), z.null()])
  })
  return CarModelResponseFormat
}