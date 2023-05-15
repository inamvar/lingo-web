import '/styles/globals.css';
import Layout from '/components/layout'
import AuthContext from "../context/authContext";
import {useEffect, useState} from "react";
import getAuthenticatedUser from "../hooks/getUser";
import { ChakraProvider } from '@chakra-ui/react';
import {getSiteSetting} from "../services/appServices";
import App from "next/app";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps,siteSetting }) {

    const router = useRouter();
    const [authState,setAuthState]=useState({});

    useEffect(() => {
        getAuthenticatedUser().then(res => {
           setAuthState(res);
        });
    },[authState.authenticated]);

    useEffect(() => {

        const handleRouteChange = (url, { shallow }) => {
            document.getElementById("spinner").style.display = "block";
            return;
        };

        const handleRouteComplete = (url, { shallow }) => {
            document.getElementById("spinner").style.display = "none";
            return;
        };

        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteComplete)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, [])

        return (
            <ChakraProvider>
                <AuthContext.Provider value={{authState,setAuthState}}>
                    <Layout siteSetting={siteSetting} >
                        <Component {...pageProps} />
                    </Layout>
                </AuthContext.Provider>
            </ChakraProvider>
        );
}

MyApp.getInitialProps = async (appContext) => {
    const siteSetting = await getSiteSetting();
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps, siteSetting }
}

export default MyApp;