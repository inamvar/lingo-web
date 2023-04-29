import '/styles/globals.css';
import Layout from '/components/layout'
import AuthContext from "../context/authContext";
import {useEffect, useState} from "react";
import getAuthenticatedUser from "../hooks/getUser";

function MyApp({ Component, pageProps }) {

    const [authState,setAuthState]=useState({authenticated:false,user:null});

    useEffect(() => {

        getAuthenticatedUser().then(res => {
            setAuthState(res);
        });

    },[]);


        return (
            <AuthContext.Provider value={{authState,setAuthState}}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthContext.Provider>
        );
}

export default MyApp;