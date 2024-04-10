import axios from "axios";
import AutoPlaceCompleteAPI from "../auto-complete-response";

import { OPENWEATHER_API_KEY } from "./api-keys";

/**
 * Fetches autocomplete places based on the provided search term using the Radar.io API.
 * @param {string} searchTerm The search term to be used for autocomplete.
 * @returns {Promise<AutoPlaceCompleteAPI.Response | undefined>} A promise that resolves to an object representing autocomplete response, or undefined .
 */
export async function fetchAutoCompletePlaces(
  searchTerm: string,
): Promise<AutoPlaceCompleteAPI.Response | undefined> {
  try {
    const res = await axios.get(
      `https://api.radar.io/v1/search/autocomplete?query=${searchTerm}&limit=5`,
      {
        headers: {
          Accept: "application/json",
          Authorization: OPENWEATHER_API_KEY,
        },
      },
    );
    return res.data;
  } catch {
    console.log("Could not fetch auto complete places");
  }
}
