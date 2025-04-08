"use client"
import { useEffect, useState } from "react"

export default function ErrorToast() {
  const [errorVisible, setErrorVisible] = useState<boolean>(true)
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsFadingOut(true)
    }, 2000);
    setTimeout(() => {
      setErrorVisible(false)
    }, 3000);
  }, [])


  if (!errorVisible) return null

  return (
    <div
      className={`max-w-[90%] text-center w-[400px] bg-red-500 absolute left-2/4 -translate-x-2/4 top-10 px-10 py-4 text-xl font-bold text-white rounded-2xl transition-opacity duration-1000 ${isFadingOut ? "opacity-0" : "opacity-100"}`}>
      Något gick snett, var vänlig försök igen senare.
    </div>
  )
}