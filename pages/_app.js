import '/styles/globals.css';
import Layout from '/components/layout'
import AuthContext from "../context/authContext";
import {useEffect, useState} from "react";
import getAuthenticatedUser from "../hooks/getUser";
import { ChakraProvider } from '@chakra-ui/react';
import {getSiteSetting} from "../services/appServices";
import App from "next/app";

function MyApp({ Component, pageProps,siteSetting }) {

    const [authState,setAuthState]=useState({});

    useEffect(() => {
        getAuthenticatedUser().then(res => {
           setAuthState(res);
        });
    },[authState.authenticated]);

        return (
            <ChakraProvider>
                <AuthContext.Provider value={{authState,setAuthState}}>
                    <Layout siteSetting={siteSetting}>
                        <Component {...pageProps} />
                    </Layout>
                </AuthContext.Provider>
            </ChakraProvider>
        );
}
MyApp.getInitialProps = async (appContext) => {
    const siteSetting = await getSiteSetting();
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps, siteSetting }
}

export default MyApp;