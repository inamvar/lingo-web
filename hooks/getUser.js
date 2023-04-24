import {pushAlert} from "../common/notifier";

export function getToken() {
    return localStorage.getItem('token');
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