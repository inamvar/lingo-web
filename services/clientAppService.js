import API_ROUTES from "/common/apiRoutes";
import { handleApiError } from "../common/handleApiError";
import { pushAlert } from "../common/notifier";
import jwt from 'jsonwebtoken';
import { Constants } from "../common/constants";
import ax from "../common/apiClientSideRequest";
import Cookies from "js-cookie";

export const getSiteSetting = async(context) => {
    try {
        const response = await ax.get(API_ROUTES.SITESETTING, { ctx: context });
        if (response.data.success == true) {
            const result = response.data.data;
            return result;
        } else {
            pushAlert({ message: response.data.message, type: 'error' });
            return null;
        }
    } catch (error) {

        handleApiError(error, context);
    }
}
export const signUpUser = async(firstname, lastname, password, confirmPassword, email, phoneNumber, marketerCode) => {
    try {
        let response = await ax.post(API_ROUTES.SIGN_UP, { confirmPassword: confirmPassword, email: email, firstName: firstname, lastName: lastname, password: password, phoneNumber: phoneNumber, marketerCode: marketerCode })
        if (response.data.success == true) {
            const { accessToken, refreshToken } = response.data.data.authToken;
            const decodedToken = jwt.decode(accessToken);

            const remainingTime = decodedToken.exp - Date.now() / 1000;
            Cookies.set(Constants.token, accessToken, { expires: remainingTime / (60 * 60 * 24) });
            Cookies.set(Constants.refreshToken, refreshToken, { expires: 365 });

            // pushAlert({
            //     message:'ثبت نام با موفقیت انجام شد',
            //     type:'success'
            // })

            return {
                authenticated: true,
                user: decodedToken
            };

        } else {
            console.log(response.data.message);
            pushAlert({
                message: response.data.message,
                type: 'error'
            });
        }
    } catch (error) {
        console.log(error.response);
        if (error.response.status == '400' || error.response.status == '404') {
            pushAlert({
                message: error.response.data.errorMessages,
                type: 'error'
            })
        }
    }
}

export const loginUser = async(username, password) => {
    try {
        let response = await ax.post(API_ROUTES.LOGIN, { userName: username, password: password });

        if (response.data.success == true) {
            const { accessToken, refreshToken } = response.data.data;
            const decodedToken = jwt.decode(accessToken);

            const remainingTime = decodedToken.exp - Date.now() / 1000;
            Cookies.set(Constants.token, accessToken, { expires: remainingTime / (60 * 60 * 24) });
            Cookies.set(Constants.refreshToken, refreshToken, { expires: 365 });
            //
            // pushAlert({
            //     message:'ورود با موفقیت انجام شد',
            //     type:'success'
            // })
            return {
                authenticated: true,
                user: decodedToken
            };
        } else {
            console.log(response.data.message);
            pushAlert({
                message: response.data.message,
                type: 'error'
            });
        }
    } catch (error) {
        pushAlert({
            message: error.response.data.errorMessages,
            type: 'error'
        })
        console.log(error)
    }
};

export const updateMyProfile = async(input, ctx) => {
    try {
        const response = await ax.put(API_ROUTES.UPDATEMYPROFILE, { firstName: input.firstName, lastName: input.lastName, phoneNumber: input.phoneNumber }, { ctx: ctx });
        if (response.data.success == true) {
            const result = response.data.data;
            console.log(result);
            return result;
        } else {
            pushAlert({ message: response.data.message, type: 'error' });
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

export const logout = async() => {
    const response = await ax.get(API_ROUTES.SIGN_OUT);
    if (response.status == 200) {
        console.log(response);
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        return true;
    }
}