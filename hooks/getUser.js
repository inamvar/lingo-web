import {pushAlert} from "../common/notifier";
import {Constants} from "../common/constants";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
export function getToken() {

   // return localStorage.getItem(Constants.token);
    return Cookies.get(Constants.token);
}

export default async function getAuthenticatedUser() {

    const defaultObject = { authenticated: false, user: null };

    try {
        const token = getToken();
        if (!token){
            return defaultObject;
        }
        else
        {
            const userInfo = jwtDecode(token);
            const userObject = { authenticated: true , user: userInfo }
            return userObject;
        }
    }

    catch (error) {
        pushAlert({
            type:'error',
            message:'خطایی پیش آمده'
        })
        return defaultObject;
    }
}