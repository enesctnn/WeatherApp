import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FavoriteSearchsContextProvider } from './context/favorite-searchs-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FavoriteSearchsContextProvider>
      <App />
    </FavoriteSearchsContextProvider>
  </React.StrictMode>
);
