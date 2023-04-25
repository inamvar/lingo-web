import {useState , useEffect} from "react";
import getUser from './getUser';
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