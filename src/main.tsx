import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FavoriteSearchsContextProvider } from './context/favorite-searchs-context.tsx';

import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <FavoriteSearchsContextProvider>
        <App />
      </FavoriteSearchsContextProvider>
    </React.Suspense>
  </React.StrictMode>
);
