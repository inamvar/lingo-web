import '/styles/globals.css';
import Layout from '/components/layout'
import AuthContext from "../context/authContext";
import {useEffect, useState} from "react";
import {Constants} from "../common/constants";
import getAuthenticatedUser from "../hooks/getUser";

function MyApp({ Component, pageProps }) {

    const [user,setUser]=useState(null);

    useEffect( () => {
        let storedUser ;
        getAuthenticatedUser().then(x=>storedUser=x);
        console.log(storedUser);
        if (storedUser)
        {
            setUser(storedUser);
            console.log('loged in');
        }
        else {
            console.log('not logedin');
        }
    });

        return (
            <AuthContext.Provider value={user}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthContext.Provider>

        );
}

export default MyApp