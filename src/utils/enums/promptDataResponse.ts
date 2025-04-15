import { z } from "zod"
import { allBrands } from "./allCarBrandsAndModels"

export const CarSearchObject = z.object({
  car_model: z.object({
    make_brand: z.union([
      z.enum(allBrands),
      z.null()
    ]),
    make_model: z.union([z.string(), z.null()]),
  }),
  fuelType: z.union([
    z.enum(["Bensin", "Diesel", "El", "Miljöbränsle/Hybrid"]),
    z.null()
  ]),
  chassiType: z.union([
    z.enum(["SUV", "Cab", "Coupé", "Familjbuss", "Halvkombi", "Kombi", "Sedan", "Yrkesfordon"]),
    z.null()
  ]),
  maxPrice: z.union([
    z.number(),
    z.null()
  ]),
  minPrice: z.union([
    z.number(),
    z.null()
  ]),
  minModelYear: z.union([
    z.number(),
    z.null()
  ]),
  maxModelYear: z.union([
    z.number(),
    z.null()
  ]),
  minMileage: z.union([
    z.number(),
    z.null()
  ]),
  maxMileage: z.union([
    z.number(),
    z.null()
  ]),
  transmissionType: z.union([
    z.enum(["Automat", "Manuell"]),
    z.null()
  ]),
  sellerType: z.union([
    z.enum(["Företag", "Privat"]),
    z.null()
  ]),
})

export const CarSearchResponse = z.object({
  car_data: z.union([CarSearchObject, z.null()])
})

//The enum is the expected schema response from the AI, and ICarSearchQueryType is the schema that we want to pass when setting data and creating blocket url.
export type ICarSearchQueryType = z.infer<typeof CarSearchObject>
