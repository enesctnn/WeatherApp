import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { FavoriteSearchsContextProvider } from "./context/favorite-searchs-context.tsx";
import "./index.css";

import "./i18n";
import { ThemeContextProvider } from "./context/theme-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Suspense fallback={<h2>Loading...</h2>}>
    <ThemeContextProvider>
      <FavoriteSearchsContextProvider>
        <App />
      </FavoriteSearchsContextProvider>
    </ThemeContextProvider>
  </React.Suspense>,
);
