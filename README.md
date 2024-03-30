![TypeWeather Logo](public/logo.png)

# TypeWeather

TypeWeather is a weather application built using Vite, React, and TypeScript.

## Description

TypeWeather fetches weather data from the OpenWeather API and provides current weather & weatherforecast information to users for different locations. TypeWeather powered by geolocation for automatic location detection and allows users to search for weather forecasts by city name.

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
