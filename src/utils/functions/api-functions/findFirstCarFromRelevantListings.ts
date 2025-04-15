import { ICarSearchQueryType } from "@/utils/enums/promptDataResponse";
import { generateCarSearchAPIUrl } from "../generateCarSearchAPIUrl";


export type CarListing = {
  dealId: string;
  link: string;
  listTime: string; // ISO date string
  originalListTime: string; // ISO date string
  seller: {
    type: string;
    name: string;
    id: string;
  };
  heading: string;
  price: {
    amount: string;
    billingPeriod: string;
  };
  thumbnail: string | undefined;
  car: {
    images: {
      height: number;
      width: number;
      image: string;
    }[];
    location: {
      region: string;
      municipality: string;
      area: string;
    };
    fuel: string;
    gearbox: string;
    regDate: number;
    mileage: number;
    equipment: {
      label: string;
    }[];
  };
  dcb: boolean;
  description: string;
};

export async function findFirstCarFormRelevantListings(obj: ICarSearchQueryType) {
  const url = generateCarSearchAPIUrl(obj);

  try {
    const response = await fetch("https://blocket-api.onrender.com/get-example-listing", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json' // Specify the content type as JSON
      },

      body: JSON.stringify({ url: url })
    });
    const data: { car: CarListing } = await response.json();

    if (data.car === null) {
      return { data: null, error: "No car found" }
    }

    return { data: data.car, error: null }
  } catch (e) {
    return { data: null, error: "error" }
  }

}