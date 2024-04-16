![TypeWeather Logo](public/logo.png)

# TypeWeather

TypeWeather is a weather application built using Vite, React, and TypeScript.

## Description

TypeWeather fetches weather data from the OpenWeather API and provides current weather & weather forecast information to users for different locations. TypeWeather is powered by geolocation for automatic location detection and allows users to search for weather forecasts by city name.

---

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

- Toggle Units: Users can choose between imperial or metric units.

- Light-Dark Theme: Enjoy a personalized experience with the option to switch between light and dark themes for better readability and comfort.

- Place Autocompletion: Integrated with the Radar.io API to provide place autocompletion, making it easier for users to input locations.

- Live Weather Map: Integrated a live weather map powered by Ventusky, providing real-time weather visualization and forecasts directly within the app using an iframe.

---

### Supported Languages:

- English
- Turkish

---

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

---

## Dependencies

- **[@phosphor-icons/react](https://www.npmjs.com/package/@phosphor-icons/react)** [![npm](https://img.shields.io/npm/v/@phosphor-icons/react)](https://www.npmjs.com/package/@phosphor-icons/react)
- **[@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)** [![npm](https://img.shields.io/npm/v/@tanstack/react-query)](https://www.npmjs.com/package/@tanstack/react-query)
- **[axios](https://www.npmjs.com/package/axios)** [![npm](https://img.shields.io/npm/v/axios)](https://www.npmjs.com/package/axios)
- **[clsx](https://www.npmjs.com/package/clsx)** [![npm](https://img.shields.io/npm/v/clsx)](https://www.npmjs.com/package/clsx)
- **[framer-motion](https://www.npmjs.com/package/framer-motion)** [![npm](https://img.shields.io/npm/v/framer-motion)](https://www.npmjs.com/package/framer-motion)
- **[i18next](https://www.npmjs.com/package/i18next)** [![npm](https://img.shields.io/npm/v/i18next)](https://www.npmjs.com/package/i18next)
- **[i18next-browser-languagedetector](https://www.npmjs.com/package/i18next-browser-languagedetector)** [![npm](https://img.shields.io/npm/v/i18next-browser-languagedetector)](https://www.npmjs.com/package/i18next-browser-languagedetector)
- **[i18next-http-backend](https://www.npmjs.com/package/i18next-http-backend)** [![npm](https://img.shields.io/npm/v/i18next-http-backend)](https://www.npmjs.com/package/i18next-http-backend)
- **[localforage](https://www.npmjs.com/package/localforage)** [![npm](https://img.shields.io/npm/v/localforage)](https://www.npmjs.com/package/localforage)
- **[react](https://www.npmjs.com/package/react)** [![npm](https://img.shields.io/npm/v/react)](https://www.npmjs.com/package/react)
- **[react-country-flag](https://www.npmjs.com/package/react-country-flag)** [![npm](https://img.shields.io/npm/v/react-country-flag)](https://www.npmjs.com/package/react-country-flag)
- **[react-dom](https://www.npmjs.com/package/react-dom)** [![npm](https://img.shields.io/npm/v/react-dom)](https://www.npmjs.com/package/react-dom)
- **[react-i18next](https://www.npmjs.com/package/react-i18next)** [![npm](https://img.shields.io/npm/v/react-i18next)](https://www.npmjs.com/package/react-i18next)
- **[react-icons](https://www.npmjs.com/package/react-icons)** [![npm](https://img.shields.io/npm/v/react-icons)](https://www.npmjs.com/package/react-icons)
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** [![npm](https://img.shields.io/npm/v/react-router-dom)](https://www.npmjs.com/package/react-router-dom)
- **[recharts](https://www.npmjs.com/package/recharts)** [![npm](https://img.shields.io/npm/v/recharts)](https://www.npmjs.com/package/recharts)
- **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)** [![npm](https://img.shields.io/npm/v/tailwind-merge)](https://www.npmjs.com/package/tailwind-merge)

## Dev Dependencies

- **[@types/react](https://www.npmjs.com/package/@types/react)** [![npm](https://img.shields.io/npm/v/@types/react)](https://www.npmjs.com/package/@types/react)
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)** [![npm](https://img.shields.io/npm/v/@types/react-dom)](https://www.npmjs.com/package/@types/react-dom)
- **[@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)** [![npm](https://img.shields.io/npm/v/@typescript-eslint/eslint-plugin)](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- **[@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)** [![npm](https://img.shields.io/npm/v/@typescript-eslint/parser)](https://www.npmjs.com/package/@typescript-eslint/parser)
- **[@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)** [![npm](https://img.shields.io/npm/v/@vitejs/plugin-react)](https://www.npmjs.com/package/@vitejs/plugin-react)
- **[autoprefixer](https://www.npmjs.com/package/autoprefixer)** [![npm](https://img.shields.io/npm/v/autoprefixer)](https://www.npmjs.com/package/autoprefixer)
- **[eslint](https://www.npmjs.com/package/eslint)** [![npm](https://img.shields.io/npm/v/eslint)](https://www.npmjs.com/package/eslint)
- **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)** [![npm](https://img.shields.io/npm/v/eslint-plugin-react-hooks)](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- **[eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)** [![npm](https://img.shields.io/npm/v/eslint-plugin-react-refresh)](https://www.npmjs.com/package/eslint-plugin-react-refresh)
- **[postcss](https://www.npmjs.com/package/postcss)** [![npm](https://img.shields.io/npm/v/postcss)](https://www.npmjs.com/package/postcss)
- **[prettier](https://www.npmjs.com/package/prettier)** [![npm](https://img.shields.io/npm/v/prettier)](https://www.npmjs.com/package/prettier)
- **[prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)** [![npm](https://img.shields.io/npm/v/prettier-plugin-tailwindcss)](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
- **[tailwindcss](https://www.npmjs.com/package/tailwindcss)** [![npm](https://img.shields.io/npm/v/tailwindcss)](https://www.npmjs.com/package/tailwindcss)
- **[typescript](https://www.npmjs.com/package/typescript)** [![npm](https://img.shields.io/npm/v/typescript)](https://www.npmjs.com/package/typescript)
- **[vite](https://www.npmjs.com/package/vite)** [![npm](https://img.shields.io/npm/v/vite)](https://www.npmjs.com/package/vite)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Deployment

This project is deployed and hosted on Vercel. You can access the live version by following this link: [TypeWeather Live Demo](https://typeweather-git-main-enesctnns-projects.vercel.app/)

---

## Local Usage (On your machine)

### Guidance for Updating API Key in Typeweather App

Dear User,

Thank you for choosing Typeweather for your weather application needs.To add missing Unsplash API key and update your API keys for OpenWeather and Radar please follow these steps:

1. **Obtaining Your OpenWeather API Key**:

   - Visit the [OpenWeather Website](https://openweathermap.org).
   - Log in to your account or sign up if you haven't already.
   - Once logged in, navigate to the API keys section.
   - Generate a new API key if you don't have one already.

2. **Obtaining Your Radar API Key**:

   - Visit the [Radar Website](https://www.radar.io).
   - Log in to your account or sign up if you haven't already.
   - Once logged in, navigate to the API keys section.
   - Generate a new API key if you don't have one already.

3. **Obtaining Your Unsplash API Key**:

   - Visit the [Unsplash Website](https://unsplash.com).
   - Log in to your account or sign up if you haven't already.
   - Once logged in, navigate to the Developers section.
   - Generate a new API key if you don't have one already.

4. **Updating Your OpenWeather & Radar API Keys in Typeweather**:

   - **Open `root/src/util/api-keys.ts`**.
   - Locate the fields where the OpenWeather and Radar API keys are entered.
   - Replace the existing API keys with the new ones you obtained from OpenWeather and Radar.

5. **Local Environment Setup For UnSplash API KEY**:

   - **Create a `.env` file** in the project root.
   - **Open your `.env` file**
   - Define the `VITE_UNSPLASH_API_KEY` variable in your local .env file and set it to your Unsplash API key.

6. **Verification**:
   - After updating the API keys, verify that the weather, radar, and image data are being fetched correctly in your app.
   - Test various locations, weather conditions, and image searches to ensure the integration is functioning as expected.

If you have any questions or encounter issues during this process, feel free to reach out for further assistance. Thank you!

---

## Assistance

If you encounter any issues or need further assistance, feel free to reach out to our support team at suppteam.typeweather@gmail.com.

Thank you for your attention to this matter.

Best regards,

Muhammet Enes Çetin

Project Owner & Sole Developer

TypeWeather Project
