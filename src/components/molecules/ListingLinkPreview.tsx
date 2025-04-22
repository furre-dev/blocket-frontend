import Image from "next/image";
import { ExampleListing } from "@/utils/types/exampleListing";
import LinkWrapper from "../atoms/LinkWrapper";
import { motion as m } from "framer-motion";

export default function ListingLinkPreview({ linkListing }: { linkListing: ExampleListing }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <LinkWrapper href={linkListing.link}>
        <div className="bg-[#F1F5F9] border-[#A4A4A4] border rounded-[10px] pb-2 w-[380px] max-w-full overflow-hidden flex-shrink-0">
          {linkListing.thumbnail_image && (
            <Image
              className="h-[150px] md:h-[250px] object-cover bg-top"
              width={2000}
              height={1000}
              alt="ebem"
              src={`${linkListing.thumbnail_image}`}
            />
          )}
          <div className="px-2 pt-2">
            <h4 className="md:text-xl font-semibold break-all">{linkListing.heading}</h4>
            <span className="text-[#4A4A4A] text-sm">{linkListing.preview_data}</span>
            <h3 className="font-bold md:text-xl mt-2">{linkListing.price}</h3>
          </div>
        </div>
      </LinkWrapper>
    </m.div>
  )
}