import { ICarSearchQueryType } from "../enums/promptDataResponse";


export function generateCarSearchURL(obj: ICarSearchQueryType) {
  let baseUrl = "https://www.blocket.se/bilar/sok";
  let filters = [];

  if (obj.minModelYear !== null && obj.maxModelYear !== null) {
    filters.push(`filter=${JSON.stringify({ key: "modelYear", range: { start: `${obj.minModelYear}`, end: `${obj.maxModelYear}` } })}`);
  }

  if (obj.minModelYear === null && obj.maxModelYear) {
    filters.push(`filter=${JSON.stringify({ key: "modelYear", range: { start: "", end: `${obj.maxModelYear}` } })}`);
  }

  if (obj.maxModelYear === null && obj.minModelYear) {
    filters.push(`filter=${JSON.stringify({ key: "modelYear", range: { start: `${obj.minModelYear}`, end: "" } })}`);
  }

  if (obj.car_model?.make_brand) {
    filters.push(`filter=${JSON.stringify({ key: "make", values: [obj.car_model?.make_brand] })}`);
  }

  if (obj.car_model?.make_model) {
    filters.push(`filter=${JSON.stringify({ key: "models", values: [obj.car_model?.make_model] })}`);
  }

  if (obj.fuelType) {
    filters.push(`filter=${JSON.stringify({ key: "fuel", values: [obj.fuelType] })}`);
  }

  if (obj.chassiType) {
    filters.push(`filter=${JSON.stringify({ key: "chassi", values: [obj.chassiType] })}`);
  }

  if (obj.minPrice !== null && obj.maxPrice !== null) {
    filters.push(`filter=${JSON.stringify({ key: "price", range: { start: `${obj.minPrice}`, end: `${obj.maxPrice}` } })}`);
  }

  if (obj.minPrice === null && obj.maxPrice) {
    filters.push(`filter=${JSON.stringify({ key: "price", range: { start: "", end: `${obj.maxPrice}` } })}`);
  }

  if (obj.minPrice && obj.maxPrice === null) {
    filters.push(`filter=${JSON.stringify({ key: "price", range: { start: `${obj.minPrice}`, end: "" } })}`);
  }

  if (obj.minMileage !== null && obj.maxMileage !== null) {
    filters.push(`filter=${JSON.stringify({ key: "milage", range: { start: `${obj.minMileage}`, end: `${obj.maxMileage}` } })}`);
  }

  if (obj.minMileage === null && obj.maxMileage) {
    filters.push(`filter=${JSON.stringify({ key: "milage", range: { start: "", end: `${obj.maxMileage}` } })}`);
  }

  if (obj.minMileage && obj.maxMileage === null) {
    filters.push(`filter=${JSON.stringify({ key: "milage", range: { start: `${obj.minMileage}`, end: "" } })}`);
  }

  if (obj.transmissionType) {
    filters.push(`filter=${JSON.stringify({ key: "gearbox", values: [obj.transmissionType] })}`);
  }

  const finalUrl = `${baseUrl}?${filters.join("&")}`;
  return finalUrl;

}

