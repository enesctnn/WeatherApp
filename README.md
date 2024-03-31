![TypeWeather Logo](public/logo.png)

# TypeWeather

TypeWeather is a weather application built using Vite, React, and TypeScript.

## Description

TypeWeather fetches weather data from the OpenWeather API and provides current weather & weather forecast information to users for different locations. TypeWeather is powered by geolocation for automatic location detection and allows users to search for weather forecasts by city name.

## Features

- Current Weather & 5-Day Forecast Display: View current weather conditions and a 5-day forecast for any selected location.

- Search by City Name: Easily search for weather information by entering the name of a city.

- City Suggestions Dropdown: Get suggestions for cities as you type, making location input easier and more convenient.

- Automatic Location Detection: Automatically detect the user's location for quick access to local weather information.

- Temperature & Probability of Rain Graphs: Interactive temperature & Probability of Rain graphs provide users with a visual representation of forecast trends for the upcoming days.

- Dynamic Backgrounds and Icons: Enjoy a visually engaging experience with backgrounds and icons that change based on weather conditions.

- Responsive Design: The application is optimized for various screen sizes, ensuring a seamless experience across devices.

- Caching Mechanism: Reduce API calls and improve speed with a caching mechanism that stores previously fetched weather data.

- State Management with React Query: Utilize React Query for efficient state management and data fetching.

- Routing with React Router: Implement routing for navigation between different pages of the application.

- Styling with Tailwind CSS: Benefit from the utility-first approach of Tailwind CSS for fast and easy styling.

- Favorite Section: Toggle the display of the favorite section to manage and access saved locations easily.

- Multiple languages: Including English and Turkish. Users can specify their preferred language in App requests to receive weather forecasts and information in the language of their choice.

### Supported Languages:

- English
- Turkish

## Installation

1. Clone the repository:

```bash
git clone https://github.com/enesctnn/WeatherApp

```

2. Navigate to the project directory:

```bash
cd WeatherApp
```

3. Install dependencies:

```bash
npm install
```

## Usage

To run the development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build
```

## Dependencies

- [@phosphor-icons/react](https://www.npmjs.com/package/@phosphor-icons/react)
- [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)
- [axios](https://www.npmjs.com/package/axios)
- [clsx](https://www.npmjs.com/package/clsx)
- [country-state-city](https://www.npmjs.com/package/country-state-city)
- [framer-motion](https://www.npmjs.com/package/framer-motion)
- [localforage](https://www.npmjs.com/package/localforage)
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
- [recharts](https://www.npmjs.com/package/recharts)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [i18next](https://www.npmjs.com/package/i18next)
- [i18next-browser-languagedetector](https://www.npmjs.com/package/i18next-browser-languagedetector)
- [i18next-http-backend](https://www.npmjs.com/package/i18next-http-backend)
- [react-country-flag](https://www.npmjs.com/package/react-country-flag)
- [react-i18next](https://www.npmjs.com/package/react-i18next)

## Dev Dependencies

- [@types/react](https://www.npmjs.com/package/@types/react)
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
- [postcss](https://www.npmjs.com/package/postcss)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)
- [typescript](https://www.npmjs.com/package/typescript)
- [vite](https://www.npmjs.com/package/vite)

## License

This project is licensed under the [MIT License](LICENSE).

---

### Guidance for Updating API Key in Typeweather App

Dear User,

Thank you for choosing Typeweather for your weather application needs. We've noticed that your API key for OpenWeather is approaching its expiration date. To ensure uninterrupted service, please follow the steps below to update your API key:

1. **Obtaining Your API Key**:

   - Go to the OpenWeather website at [OpenWeather Website](https://openweathermap.org).
   - Log in to your account or sign up if you haven't already.
   - Once logged in, navigate to the API keys section.
   - Generate a new API key if you don't have one already.

2. **Updating Your API Key in Typeweather**:

   - Open the settings or configuration panel in your Typeweather app.
   - Locate the field where the API key is entered.
   - Replace the existing API key with the new one you obtained from OpenWeather.

3. **Verification**:
   - After updating the API key, verify that the weather data is being fetched correctly in your app.
   - Test various locations and weather conditions to ensure the integration is functioning as expected.

By following these steps, you'll ensure that your Typeweather app continues to provide accurate and up-to-date weather information to your users.

If you encounter any issues or need further assistance, feel free to reach out to our support team at suppteam.typeweather@gmail.com.

Thank you for your attention to this matter.

Best regards,

Muhammet Enes Çetin
Project Owner & Sole Developer
TypeWeather Project
