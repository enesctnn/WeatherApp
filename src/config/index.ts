import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";

/**
 * Application Routes
 */
export default {
  searchLocation: '/',
  weatherDetails: '/weather/:cityName',
} as const;

export interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof searchLocation>>;
}
