import HttpStatusCode from "./HttpsStatusCode"
import { Message, MessageType } from "./types/messageTypes"

export const createErrorMessage = (errorMessage: string): Message => {
  return {
    content: errorMessage,
    sender: "system",
    messageType: MessageType.TEXT_INPUT
  }
}

export const messageWithError = (status: HttpStatusCode): Message => {
  switch (status) {
    case HttpStatusCode.BAD_REQUEST:
      return {
        content: "Skriv gärna in vad du vill söka efter ovan så hjälper vi dig att hitta det du letar efter.",
        sender: "system",
        messageType: MessageType.TEXT_INPUT
      }
    case HttpStatusCode.NOT_FOUND:
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