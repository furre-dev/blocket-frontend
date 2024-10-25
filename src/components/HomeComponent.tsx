"use client"
import DescriptionForm from "./molecules/DescriptionForm";
import HomeUpperSection from "./molecules/HomeUpperSection";
import { useHouseQuery } from "@/utils/hooks/useHouseQuery";
import { useState } from "react";
import ErrorToast from "./organisms/ErrorToast";



export default function HomeComponent() {
  const [userQuery, setUserQuery] = useState<string | null>(null);

  const { loading, error } = useHouseQuery(userQuery);

  if (loading) return <div>Loading</div>

  return (
    <main
      className="max-w-[85%] w-[1059px] min-h-screen flex flex-col justify-center mx-auto">
      {/* Custom toast with error message */}
      {error && <ErrorToast errMsg="Connected but could not get any data" />}
      <HomeUpperSection />
      <DescriptionForm setUserQuery={setUserQuery} />
    </main>
  )
}