"use client"
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { ICarSearchQueryType } from "../enums/promptDataResponse";
import { createDataFromUserPrompt } from "../functions/api-functions/createDataFromUserPrompt";
import { generateCarSearchURL } from "../functions/generateCarSearchURL";

type HookError = { message: "Something went wrong!" | "Input not provided!" | "Could not connect to API" | "Connected but could not get any data", e?: unknown } | false

type HookResponse = {
  data: ICarSearchQueryType | null,
  loading: boolean,
  error: HookError
}

export function useHouseQuery(input: string | null): HookResponse {
  const [data, setData] = useState<ICarSearchQueryType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<HookError>(false);


  useEffect(() => {
    if (data) {
      const blocketUrl = generateCarSearchURL(data)
      redirect(blocketUrl)
    }
  }, [data])

  useEffect(() => {
    if (input === null) {
      return;
    }

    (async () => {
      setLoading(true);
      try {
        const result = await createDataFromUserPrompt(input);
        if (!result) {
          setData(null);
          setLoading(false);
          setError({ message: "Connected but could not get any data" });
          return;
        }
        setData(result)
      } catch (e) {
        setError({ message: "Something went wrong!", e });
      } finally {
        setLoading(false)
      }
    })()

  }, [input]);

  return { data, loading, error }
}