import { ExampleListing } from "./exampleListing";

export enum MessageType {
  TEXT_INPUT = "text_input",
  LINK_INPUT = "link_input"
}

export type TextInputMessage = {
  messageType: MessageType.TEXT_INPUT,
  sender: "user" | "system",
  content: string,
};

export type LinkInputMessage = {
  messageType: MessageType.LINK_INPUT,
  isLink: {
    listing: ExampleListing
    link_to_listings: string
  }
}

export type Message = TextInputMessage | LinkInputMessage;
