import BlocketLogo from "../svgs/BlocketLogo";
import { motion as m } from "framer-motion"

export default function LogoSection() {
  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, }}
      transition={{ type: "spring", delay: 0.2 }}
      exit={{ opacity: 0, y: 10, transition: { delay: 0.6 } }}
      className="border-b border-[#D9D9D9] w-full">
      <div
        className="scale-50 w-max mx-auto">
        <BlocketLogo />
      </div>
    </m.div>
  )
}