import { useEffect, useState } from "react";

/**
 * Custom React hook for retrieving the current geolocation coordinates.
 * @returns {{
 *   lat?: number;
 *   lon?: number;
 *   permission?: boolean;
 * }} - An object containing latitude, longitude, and permission status.
 */
export function useGeolocation() {
  const [coords, setCoords] = useState<{
    lat?: number;
    lon?: number;
    permission?: boolean;
  }>({});

  useEffect(() => {
    const successCallback = (position: GeolocationPosition) => {
      setCoords({
        lat: +position.coords.latitude,
        lon: +position.coords.longitude,
        permission: true,
      });
    };

    /**
     * Handles errors encountered while retrieving geolocation coordinates and updates the state.
     */
    const errorCallback = () => {
      setCoords((prevCoords) => ({ ...prevCoords, permission: false }));
    };

    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
      // Retrieve the current position
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, []);

  return coords;
}
