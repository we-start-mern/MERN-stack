import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContextProvider } from './context/app-context';
import App from './pages/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppContextProvider>
    <App/>
  </AppContextProvider>
);

