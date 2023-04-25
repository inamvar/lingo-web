import {useState,createContext} from 'react'

const authContext = createContext({
    isAuthenticated:false, user:null,
});
export default authContext;