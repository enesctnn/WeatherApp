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
 * console.log(routes.searchLocation); // Output: '/'
 * console.log(routes.weatherDetails.replace(':cityName', 'London')); // Output: '/weather/London'
 */
export default {
  searchLocation: "/",
  weatherDetails: "/weather/:coords",
} as const;
