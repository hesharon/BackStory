import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import envvar from 'envvar'
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate()

  const domain = envvar.string('REACT_APP_AUTH0_DOMAIN')
  const clientId = envvar.string('REACT_APP_AUTH0_CLIENT_ID')
  const redirectUri = envvar.string('REACT_APP_AUTH0_CALLBACK_URL')

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname)
  };

  if (!(domain && clientId && redirectUri)) {
    return null
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};