import React, {useEffect, useState} from 'react';
import {Routes} from './routes'
import {useKeycloak} from "@react-keycloak/web";

function App() {
    const [auth, setAuth] = useState({
        keycloak: null,
        authenticated: false,
    });

    const {keycloak, initialized} = useKeycloak();

    useEffect(() => {
        console.log(keycloak);
        // keycloak
        //     .init({ onLoad: 'login-required' })
        //     .then((authenticated) => {
        //         console.log(authenticated);
        //
        //         setAuth({
        //             keycloak: keycloak,
        //             authenticated: true
        //         })
        //
        //         // localStorage.setItem('AT', keycloak.token);
        //     })
    }, []);



    return (
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
