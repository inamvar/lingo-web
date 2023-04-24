import {useState , useEffect} from "react";
import router from "next/router";
import appRoutes from '/common/appRoutes';
import getUser from './getUser';
import userContext from "../context/userContext";

export default function useUser() {

    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        async function getUserDetails() {
            const { authenticated, user } = await getUser();
            setUser(user);
            setAuthenticated(authenticated);
        }
        getUserDetails();
    }, []);

    return {
        user, authenticated
    };
}