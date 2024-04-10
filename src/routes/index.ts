/**
 * Object containing routes for the application.
 * @typedef {Object} AppRoutes
 * @property {string} searchLocation - The route for searching locations.
 * @property {string} weatherDetails - The route for weather details of a specific city.
 */

/**
 * Application routes.
 * @type {AppRoutes}
 * @example
 * // Import the routes object
 * import routes from './routes';
 *
 * // Access the routes
 * routes.searchLocation '/'
 * replace':coords', 'lat:39.9048704, lon:32.9416704' // Output: '/weather/39.9048704,32.9416704' (this coordinates fetches weather for Mamak,TR)
 */
export default {
  /**
   * The route for searching locations.
   * @type {string}
   */
  searchLocation: "/",
  /**
   * The route for weather details of a specific city.
   * @type {string}
   */
  weatherDetails: "/weather/:coords",
} as const;
