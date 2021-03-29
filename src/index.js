import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="dev-amp58672.us.auth0.com"
    clientId="FdOceXati5c6zYZwc3QcZiQpt8f0AHo2"
    redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>,
document.getElementById('root')
);