import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { reduxStore } from './redux/redux-store';
import AppRoutes from './routes/app-routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={reduxStore}>
       <BrowserRouter>
          <AppRoutes/>
       </BrowserRouter>
    </Provider>
);


