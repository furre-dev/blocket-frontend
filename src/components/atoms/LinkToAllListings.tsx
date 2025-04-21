import LinkWrapper from "./LinkWrapper";

export default function LinkToAllListings({ linkToListing }: { linkToListing: string }) {
  return (
    <LinkWrapper href={linkToListing}>
      <div className="px-4 py-3 bg-[#F1F5F9] border-[#A4A4A4] border w-max max-w-[90%] rounded-xl text-blue-800 text-sm md:text-base flex justify-center gap-2">
        <span className="material-symbols-rounded my-auto !text-[20px]">
          arrow_outward
        </span>
        Klicka här för att komma till alla annonser som matchar din sökning.
      </div>
    </LinkWrapper>
  )
}