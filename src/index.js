import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { GlobalProvider } from './context/globalContext';
import { UserProvider } from './context/userContext';

import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </UserProvider>
  </Auth0Provider>
);
