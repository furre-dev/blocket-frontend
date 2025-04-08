import LoadingSpinner from "../svgs/LoadingSpinner";
import ClickLink from "../svgs/ClickLink";
import { UrlState } from "@/utils/hooks/useSearchQuery";
import { motion as m } from "framer-motion";

type Components = {
  [K in UrlState]: JSX.Element[];
};

const components: Components = {
  loading: [
    <p>Vänligen vänta medan din länk skapas</p>,
    <LoadingSpinner />
  ],
  success: [
    <p>Din länk är redo, klicka här!</p>,
    <ClickLink />
  ],
  error: []
}

export default function BlocketLink({ state, href }: { state: UrlState | null, href: string | null }) {
  if (state === "error" || !state) {
    return <div className="h-[51px] mt-10" />
  }

  const linkIsReady = (href && (state === "success"))

  return (
    <m.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      href={href ? href : "#"}
      target="_blank"
      className={`flex justify-between w-full max-w-[360px] text-base font-semibold text-[#EF404F] py-3 px-4 border border-[#EF404F] rounded-full mt-10 transition-all duration-500
      ${!linkIsReady ? "pointer-events-none cursor-not-allowed" : ""} ${state === "success" ? "border-opacity-0 bg-[#EF404F] !text-white" : ""}`}>
      {components[state].map((component) => {
        return component
      })}
    </m.a>
  )
}