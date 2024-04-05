namespace AutoPlaceCompleteAPI {
  interface Geometry {
      type: string;
      coordinates: [number, number]; // longitude, latitude
  }

  export interface Address {
      latitude: number;
      longitude: number;
      geometry: Geometry;
      country: string;
      countryCode: string;
      countryFlag: string;
      county: string;
      confidence: string;
      borough: string;
      city: string;
      number: string;
      neighborhood: string;
      postalCode: string;
      stateCode: string;
      state: string;
      street: string;
      layer: string;
      formattedAddress: string;
      addressLabel: string;
  }

  export interface Response {
      meta: {
          code: number;
      };
      addresses: Address[];
  }
}

export default AutoPlaceCompleteAPI;