import React from 'react';
import { useNavigate, BrowserRouter, Link } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import './App.css';
import Routes from './components/Routes';

const oktaAuth = new OktaAuth({
    issuer: `https://dev-27564739.okta.com/oauth2/default`,
    clientId: '0oai7ty9trmkJxLhG5d7',
    redirectUri: `${window.location.origin}/callback`,
});

function App() {
    const navigate = useNavigate();
    const restoreOriginalUri = (_oktaAuth, originalUri) => {
        navigate(toRelativeUrl(originalUri || '/', window.location.origin));
    };

    return (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <div>
                <Link to="/">Home</Link><br />
                <Link to="/about">About</Link><br />
                <Link to="/weatherforecastpage">Weather Forecast</Link><br />
            </div>
            <Routes />
        </Security>
    );
}

export default App