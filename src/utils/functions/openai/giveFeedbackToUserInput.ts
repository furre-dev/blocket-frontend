"use server"
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY_BLOCKET });

export async function giveFeedbackOnUserInput(user_input: string | null) {
  if (!user_input) return null

  const completion = await openai.beta.chat.completions.parse({
    model: "gpt-4o-2024-08-06",
    messages: [
      {
        role: "system", content: `
        You will get an 'input' from a user when they have searched for a car in natural language. If the user input results in no cars being listed it means their input was unclear or bad. Your job is to give them feedback about their input. Analyze their input and send them a message in swedish. 
        If user is talking conversational, for example "Which car information should I send to get relevant listings?, you can EXAMPLE respond with 'Jag kan hjälpa dig hitta rätt bil, men jag behöver lite information. Du kan till exempel skicka med, bilmärke, modell, årsmodell, miltal och pris.' DONT RESPOND LIKE THIS, FIND YOUR OWN WORDS.

        Example: Testa att höja miltalen, det är svårt att hitta en bil som är 23 år gammal men inte åkt mer än 5.000 mil.

        **IMPORTANT: SWEDISH RESPOSNE ONLY**
        **IMPORTANT: DONT COPY THE TEXT I'VE WRITTEN IN THE EXAMPLES, CREATE YOUR OWN TEXT AND MAKE SURE IT'S CONVERSATIONAL AND HELPFUL TONE**
` },
      {
        role: "user",
        content: `
        User query input which resulted in 0 results: ${user_input}
        `
      },
    ],
  });

  return completion.choices[0].message.content
}