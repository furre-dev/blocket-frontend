import Link from "next/link";
import { ReactNode } from "react";

// this component is important because we want to keep consistency in our application. 
// I want one source of truth for the anchor attributes.

export default function LinkWrapper({ children, href }: { children: ReactNode, href: string }) {
  return (
    <Link href={href} target={"_blank"} className="max-w-[80%]">
      {children}
    </Link>
  )
}