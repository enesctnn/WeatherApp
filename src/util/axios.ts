import axios from "axios";

/**
 * Axios instance configured to make requests to the OpenWeatherMap API.
 * @see {@link https://openweathermap.org/ OpenWeatherMap API Documentation}
 * @example
 * // Import the axios instance
 * import weatherApi from './weatherApi';
 *
 * // Make a GET request to the OpenWeatherMap API
 * weatherApi.get('/path/to/endpoint')
 *   .then(response => {
 *     // Handle the response
 *   })
 *   .catch(error => {
 *     // Handle errors
 *   });
 */
export default axios.create({
  baseURL: "https://api.openweathermap.org/",
  headers: {
    Accept: "application/json",
  },
});
