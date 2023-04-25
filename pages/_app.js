import '/styles/globals.css';
import Layout from '/components/layout'
import AuthContext from "../context/authContext";
import {useEffect, useState} from "react";
import {Constants} from "../common/constants";
import getAuthenticatedUser from "../hooks/getUser";

function MyApp({ Component, pageProps }) {

    let storedUser = {};

    useEffect( () => {

        getAuthenticatedUser().then((res)=>
        {
            storedUser = res;
            if (storedUser)
            {
                console.log('loged in');
                console.log(storedUser);
            }
            else {
                console.log('not logedin');
            }
        });
    },[storedUser]);

        return (
            <AuthContext.Provider value={storedUser}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthContext.Provider>
        );
}

export default MyApp;