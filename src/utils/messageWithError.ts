import { Message, MessageType } from "./types/messageTypes"

export const messageWithError = (status: number): Message => {
  switch (status) {
    case 400:
      return {
        content: "Skriv gärna in vad du vill söka efter ovan så hjälper vi dig att hitta det du letar efter.",
        sender: "system",
        messageType: MessageType.TEXT_INPUT
      }
    case 404:
      return {
        content: "Jag hittade tyvärr inga annonser som matchar din sökning. Prova gärna med andra ord eller justera dina filter.",
        sender: "system",
        messageType: MessageType.TEXT_INPUT
      }
    default:
      return {
        content: "Vi upplever just nu tekniska problem med tjänsten. Vänligen försök igen om en stund.",
        sender: "system",
        messageType: MessageType.TEXT_INPUT
      }
  }
}