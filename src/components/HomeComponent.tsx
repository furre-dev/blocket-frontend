"use client"
import DescriptionForm from "./molecules/DescriptionForm";
import { useSearchQuery } from "@/utils/hooks/useSearchQuery";
import BlocketLogo from "./svgs/BlocketLogo";
import BlocketLink from "./molecules/BlocketLink";
import ErrorToast from "./organisms/ErrorToast";



export default function HomeComponent() {
  const { finalUrl, urlState, createBlocketLinkWithUserSearchFilters } = useSearchQuery();

  return (
    <main
      className="max-w-[85%] min-h-screen flex justify-center mx-auto">
      {urlState === "error" && <ErrorToast />}
      <section className="flex flex-col justify-center items-center w-full max-w-[505px] relative">
        <BlocketLogo />
        <DescriptionForm
          handleSearch={createBlocketLinkWithUserSearchFilters}
        />
        <BlocketLink
          href={finalUrl}
          state={urlState} />
      </section>
    </main>
  )
}
