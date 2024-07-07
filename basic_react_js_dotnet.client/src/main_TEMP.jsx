import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
    issuer: `https://dev-27564739.okta.com/oauth2/default`,
    clientId: '0oai6arvbt8U1667p5d7',
    redirectUri: `${window.location.origin}/callback`,
});

function restoreOriginalUri(oktaAuth, originalUri) {
    window.location.replace(
        toRelativeUrl(originalUri || "/", window.location.origin)
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        {/*<Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/*</Security>*/}
  </React.StrictMode>,
)
