import {pushAlert} from "../common/notifier";
import {Constants} from "../common/constants";
import jwt_decode from "jwt-decode";

export function getToken() {
    return localStorage.getItem(Constants.token);
}

export default async function getAuthenticatedUser() {
    const defaultObject = { authenticated: false, user: null };
    try {
        const token = getToken();
        const userInfo = jwt_decode(token);

        if (!token) {
            return defaultObject;
        }
        else
        {
            //decode token check time if its old try refresh token
            const userObject = {authenticated: true , user: userInfo}
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