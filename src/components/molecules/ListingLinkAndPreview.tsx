import { LinkInputMessage } from "@/utils/types/messageTypes";
import ListingLinkPreview from "./ListingLinkPreview";
import LinkToAllListings from "../atoms/LinkToAllListings";

export default function ListingLinkAndPreview({ message }: { message: LinkInputMessage }) {
  return (
    <>
      <ListingLinkPreview linkListing={message.isLink.listing} />
      <LinkToAllListings linkToListing={message.isLink.link_to_listings} />
    </>
  )
}