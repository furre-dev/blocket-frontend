import { z } from "zod";
const file = require("../../../makes_models.json");

// Your input data (example)
const allCarBrandsAndModels: { make_brand: string, make_models: string[] }[] = file;

export const allBrands = allCarBrandsAndModels.map((entry) => entry.make_brand) as [string, ...string[]];

export const getAllModelsForCurrentBrand = (brand: string) => {
  const currentCar = allCarBrandsAndModels.find((car) => car.make_brand === brand);
  if (!currentCar) return null;

  return currentCar.make_models

}
