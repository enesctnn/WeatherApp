import axios from "axios";
import { PhotoListResponse } from "../types/unsplash-api-response";

const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

export async function fetchImageBySearchTerm(
  searchTerm: string,
  signal: AbortSignal,
  params?: { [key: string]: string },
): Promise<PhotoListResponse | undefined> {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos/", {
      headers: {
        Accept: "application/json",
      },
      params: { client_id: UNSPLASH_API_KEY, query: searchTerm, ...params },
      signal,
    });
    return res.data;
  } catch {
    console.log(
      "Couldn't fetch photos check the .env file UNSPLASH_API_KEY may be missing/expired. To obtain missing Unsplash API KEY correctly please open README.md on project root and follow the steps for using typeweather on your local machine.",
    );
  }
}
