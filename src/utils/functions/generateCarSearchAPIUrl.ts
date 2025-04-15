import { ICarSearchQueryType } from "../enums/promptDataResponse";

export function generateCarSearchAPIUrl(obj: ICarSearchQueryType) {
  const baseUrl = "https://api.blocket.se/motor-search-service/v4/search/car";
  let filters = [];

  if (obj.minModelYear !== null && obj.maxModelYear !== null) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "modelYear", range: { start: `${obj.minModelYear}`, end: `${obj.maxModelYear}` } }))}`);
  }

  if (obj.minModelYear === null && obj.maxModelYear) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "modelYear", range: { start: "", end: `${obj.maxModelYear}` } }))}`);
  }

  if (obj.maxModelYear === null && obj.minModelYear) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "modelYear", range: { start: `${obj.minModelYear}`, end: "" } }))}`);
  }

  if (obj.car_model?.make_brand) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "make", values: [obj.car_model?.make_brand] }))}`);
  }

  if (obj.car_model?.make_model) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "models", values: [obj.car_model?.make_model] }))}`);
  }

  if (obj.fuelType) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "fuel", values: [obj.fuelType] }))}`);
  }

  if (obj.chassiType) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "chassi", values: [obj.chassiType] }))}`);
  }

  if (obj.minPrice !== null && obj.maxPrice !== null) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "price", range: { start: `${obj.minPrice}`, end: `${obj.maxPrice}` } }))}`);
  }

  if (obj.minPrice === null && obj.maxPrice) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "price", range: { start: "", end: `${obj.maxPrice}` } }))}`);
  }

  if (obj.minPrice && obj.maxPrice === null) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "price", range: { start: `${obj.minPrice}`, end: "" } }))}`);
  }

  if (obj.minMileage !== null && obj.maxMileage !== null) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "milage", range: { start: `${obj.minMileage}`, end: `${obj.maxMileage}` } }))}`);
  }

  if (obj.minMileage === null && obj.maxMileage) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "milage", range: { start: "", end: `${obj.maxMileage}` } }))}`);
  }

  if (obj.minMileage && obj.maxMileage === null) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "milage", range: { start: `${obj.minMileage}`, end: "" } }))}`);
  }

  if (obj.transmissionType) {
    filters.push(`filter=${encodeURIComponent(JSON.stringify({ key: "gearbox", values: [obj.transmissionType] }))}`);
  }

  // Join the filters array with "&" but without wrapping everything in encodeURIComponent
  const finalUrl = `${baseUrl}?${filters.join("&")}`;
  return finalUrl;
}
