import LinkWrapper from "./LinkWrapper";
import { motion as m } from "framer-motion";

export default function LinkToAllListings({ linkToListing }: { linkToListing: string }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <LinkWrapper href={linkToListing}>
        <div className="px-4 py-3 bg-[#F1F5F9] border-[#A4A4A4] border w-max max-w-full rounded-xl text-blue-800 text-sm md:text-base flex justify-center gap-2">
          <span className="material-symbols-rounded my-auto !text-[20px]">
            arrow_outward
          </span>
          Klicka här för att komma till alla annonser som matchar din sökning.
        </div>
      </LinkWrapper>
    </m.div>
  )
}