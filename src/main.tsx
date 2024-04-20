import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { FavoriteSearchsContextProvider } from "./context/favorite-searchs-context.tsx";
import "./index.css";

import { ThemeContextProvider } from "./context/theme-context.tsx";
import { WeatherUnitsContextProvider } from "./context/units-context.tsx";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Suspense fallback={<h2>Loading...</h2>}>
    <ThemeContextProvider>
      <FavoriteSearchsContextProvider>
        <WeatherUnitsContextProvider>
          <App />
        </WeatherUnitsContextProvider>
      </FavoriteSearchsContextProvider>
    </ThemeContextProvider>
  </React.Suspense>,
);
