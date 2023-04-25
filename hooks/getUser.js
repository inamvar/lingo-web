import {pushAlert} from "../common/notifier";
import {Constants} from "../common/constants";

export function getToken() {
    return localStorage.getItem(Constants.userToken);
}

export default async function getAuthenticatedUser() {
    const defaultObject = { authenticated: false, user: null };
    try {
        const token = getToken();
        if (!token) {
            return defaultObject;
        }
        else
        {
            //decode token check time if its old try refresh token
            const userObject = {authenticated: true , user: token}
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