import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"
import { Red_Hat_Display } from "next/font/google"
const mainFont = Red_Hat_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blocket - Enhanced car search",
  description: "Find your dream car on Blocket by simply describing what you're looking for. Get instant, detailed previews of matching car listings including images, details, and prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <main className="max-w-[85%] w-[1000px] h-dvh flex justify-center mx-auto pt-4 pb-8">
          <section className="flex flex-col justify-center items-center w-full relative">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
