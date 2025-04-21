import Image from "next/image";
import { motion as m } from "framer-motion"
import { ExampleListing } from "@/utils/types/exampleListing";

export default function ListingLinkPreview({ linkListing }: { linkListing: ExampleListing }) {

  return (
    <m.a
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      href={linkListing.link}
      target="_blank"
      className="bg-[#F1F5F9] border-[#A4A4A4] border rounded-[10px] pb-2 w-max max-w-[380px] overflow-hidden flex-shrink-0">
      {linkListing.thumbnail_image && (
        <Image
          className="h-[170px] object-cover"
          width={2000}
          height={1000}
          alt="ebem"
          src={`${linkListing.thumbnail_image}?type=images_477x327`}
        />
      )}
      <div className="px-2 pt-2">
        <h4 className="text-xl font-semibold break-all">{linkListing.heading}</h4>
        <span className="text-[#4A4A4A] text-sm">{linkListing.preview_data}</span>
        <h3 className="font-bold text-xl mt-2">{linkListing.price}</h3>
      </div>
    </m.a>
  )
}