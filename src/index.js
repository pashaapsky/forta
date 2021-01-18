import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import "./scss/styles.scss"
import keycloak from "./keycloak";

ReactDOM.render(
    <ReactKeycloakProvider authClient={keycloak}>
        <App />
    </ReactKeycloakProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
