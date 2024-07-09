import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';

import Loading from '../components/Loading';

function Authenticated({ success }) {
    const { oktaAuth, authState } = useOktaAuth()

    useEffect(() => {
        if (authState?.isAuthenticated === false) {
            const originalUri = toRelativeUrl(
                globalThis.location.href,
                globalThis.location.origin,
            )
            oktaAuth.setOriginalUri(originalUri)
            oktaAuth.signInWithRedirect()
        }
    }, [oktaAuth, authState?.isAuthenticated])

    return authState?.isAuthenticated === true ? success : Loading
}

export default Authenticated