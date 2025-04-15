import BlocketLogo from "../svgs/BlocketLogo";
import { motion as m } from "framer-motion"
import Link from "next/link";

export default function LandingView() {
  return (
    <>
      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, }}
        transition={{ type: "spring", delay: 0.2 }}
        exit={{ opacity: 0, y: 10, transition: { delay: 0.5 } }}
      >
        <BlocketLogo />
      </m.div>
      <m.div
        className="mt-10 bg-[#EF404F] px-8 py-6 rounded-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, }}
        transition={{ type: "spring", delay: 0.5 }}
        exit={{ opacity: 0, y: 10, transition: { delay: 0.2 } }}
      >
        <Link
          /*  */
          href={"/?chatMode=true"}
          className="text-white text-xl">Chatta med Johan
        </Link>
      </m.div>
    </>
  )
}