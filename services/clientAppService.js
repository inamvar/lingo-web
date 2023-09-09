import API_ROUTES from "/common/apiRoutes";
import { handleApiError } from "../common/handleApiError";
import { pushAlert } from "../common/notifier";
import jwt from 'jsonwebtoken';
import { Constants } from "../common/constants";
import ax from "../common/apiClientSideRequest";
import Cookies from "js-cookie";
import axios from "axios";
import {Router} from "next/router";


export const ConfirmPhoneNumber = async(OTPCodeNumber) =>
{
    try
    {
        let response = await ax.post(API_ROUTES.CONFIRMPHONENUMBER,{securityCode:OTPCodeNumber});
        if (response.data.success == true)
        {
            console.log(response);
            return true;
        }
    }
    catch (error)
    {
        pushAlert({
            message: error.response.data.errorMessages,
            type: 'error'
        });
        console.log(error)
    }
};

export const ConfirmPhoneNumberRequest = async(phoneNumber) =>
{
    try
    {
        console.log(phoneNumber)
        let response = await ax.post(API_ROUTES.CONFIRMPHONENUMBERREQUEST,{phoneNumber:phoneNumber});
        if (response.data.success == true)
        {
            const result = response.data.data;
            return result;
        }
    }
    catch (error)
    {
        pushAlert({
            message: error.response.data.errorMessages,
            type: 'error'
        });
        return false;
    }
};

export const postResetPassword = async (securityCode,NewPass,RetryNewPass,email) =>
{
    try
    {
        let response = await ax.put(API_ROUTES.RESETPASSWORD, { password:NewPass,retypePassword:RetryNewPass,securityCode:securityCode,userName:email });
        console.log(response);

        if (response.data.success == true)
        {
            pushAlert({
                message: "عملیات با موفقیت انجام شد",
                type: 'success'
            });
            return true;
        }
        else {
            console.log(response.data.message);
            pushAlert({
                message: "بروز خطا",
                type: 'error'
            });
        }
    } catch (error)
    {
        pushAlert({
            message: error.response.data.errorMessages,
            type: 'error'
        })
        console.log(error)
    }
};

export const postResetPasswordRequest = async (email) =>
{
    try
    {
        let response = await ax.post(API_ROUTES.RESETPASSWORDREQUEST, { email:email });
        console.log(response);

        if (response.data.success == true)
        {
            pushAlert({
                message: "پیام ارسال شد",
                type: 'success'
            });
            const result = response.data;
            return result;
        }
        else {
            console.log(response.data.message);
            pushAlert({
                message: "بروز خطا",
                type: 'error'
            });
        }
    } catch (error) {
        pushAlert({
            message: error.response.data.errorMessages,
            type: 'error'
        })
        // console.log(error.response.data.errorMessages)
    }
};

export const postMessage = async (titleMessage, bodyMessage) =>
{
    try
    {
        let response = await ax.post(API_ROUTES.NEWMESSAGE, { subject: titleMessage, body: bodyMessage });
        console.log(response);

        if (response.data.success == true)
        {
            pushAlert({
                message: "پیام ارسال شد",
                type: 'success'
            });
            return true;
        }
        else {
            console.log(response.data.message);
            pushAlert({
                message: "بروز خطا",
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
export const getOrderHistoryPDF = async(orderId) =>
{
    try
    {
        console.log(orderId);
        let response = await ax.get(API_ROUTES.ORDERHISRORYPDF(orderId),{responseType:'blob'});
        if (response.status == 200)
        {
            return response.data;
        }
    } catch (error) {
        console.log(error);
        if (error.response){
            if (error.response.data){
                if (error.response.data.errorMessages){
                    pushAlert({
                        message: error.response.data.errorMessages,
                        type: 'error'
                    })
                }
                else {
                    pushAlert({type:'error',message:'عملیات با شکست مواجه شد'});
                }
            }
        }


    }
};

export const SeenReplyMessage = async(MessageId) =>
{
    try
    {
        let response = await ax.put(API_ROUTES.SEENMESSAGE(MessageId));
        if (response.data.success == true)
        {
            console.log(response);
            return true;
        }
    } catch (error) {
        pushAlert({
            message: error.response.data.errorMessages,
            type: 'error'
        })
        console.log(error)
    }
};

export const postOrderUSDT = async(courseId, CurrencyType) =>
{
    try
    {
        switch (CurrencyType)
        {
            case 'IRR':
                CurrencyType=1;
                break;
        }

        let response = await ax.post(API_ROUTES.ORDER, { items: [{courseId:courseId}], CurrencyType:CurrencyType });
        console.log(response);
        if (response.data.success == true)
        {
            pushAlert({
                message: "درگاه پرداخت یافت نشد",
                type: 'warning'
            })
            var form = new FormData();
            form.append('sign', response.data.data.paymentUrlDetails.params.sign);
            form.append('transaction_id', response.data.data.paymentUrlDetails.params.transaction_id);

            const res = await axios({
                method: 'post',
                url: response.data.data.paymentUrlDetails.paymentUrl,
                data: form
            }).then(function (response) {
                //handle success
                console.log(response);

                Router.push(response.data.data.paymentUrlDetails.paymentUrl);
            })
                .catch(function (response) {
                    //handle error
                    console.log(response);
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

export const postOrderIRR = async(courseId, CurrencyType) =>
{
    try
    {
        switch (CurrencyType)
        {
            case 'IRR':
                CurrencyType = 1;
                break;
        }

        let response = await ax.post(API_ROUTES.ORDER, { items: [{courseId:courseId}], CurrencyType:CurrencyType });
        console.log(response);
        if (response.data.success == true)
        {
            pushAlert({
                message: "درگاه پرداخت یافت نشد",
                type: 'warning'
            })
            var form = new FormData();
            form.append('sign', response.data.data.paymentUrlDetails.params.sign);
            form.append('transaction_id', response.data.data.paymentUrlDetails.params.transaction_id);

            const res = await axios({
                method: 'post',
                url: response.data.data.paymentUrlDetails.paymentUrl,
                data: form
            }).then(function (response) {
                //handle success
                console.log(response);

                Router.push(response.data.data.paymentUrlDetails.paymentUrl);
            })
                .catch(function (response) {
                    //handle error
                    console.log(response);
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
            console.log('signup Success');
            // const { accessToken, refreshToken } = response.data.data.authToken;
            // const decodedToken = jwt.decode(accessToken);
            //
            // const remainingTime = decodedToken.exp - Date.now() / 1000;
            // Cookies.set(Constants.token, accessToken, { expires: remainingTime / (60 * 60 * 24) });
            // Cookies.set(Constants.refreshToken, refreshToken, { expires: 365 });

            return true;

        } else {
            console.log(response.data.message);

            pushAlert({
                message: response.data.message,
                type: 'error'
            });
        }
    } catch (error) {
        console.log('got error in signup');
        console.log(error);
        if (error.response.status == 400 || error.response.status == '404') {
            pushAlert({
                message: error.response.data.errorMessages,
                type: 'error'
            })
        }
    }
}

export const getSearchResult = async (w) => {

    try {
        let response = await ax.get(API_ROUTES.SEARCH,{params:{Filter:w}});
        if (response.status == 200)
        {
            const result = response.data.data.data;
            return result;
        }
        else
        {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error)
    {
        handleApiError(error);
    }
}

export const loginUser = async(username, password) => {

    try {
        let response = await ax.post(API_ROUTES.LOGIN, { userName: username, password: password });
        console.log(response)

        if (response.data.success == true)
        {
            const { accessToken, refreshToken,accessTokenExpiresAt } = response.data.data;
            const decodedToken = jwt.decode(accessToken);

            const remainingTime = decodedToken.exp - Date.now() / 1000;
            Cookies.set(Constants.token, accessToken, { expires: remainingTime / (60 * 60 * 24) });
            Cookies.set(Constants.refreshToken, refreshToken, { expires: 365 });
            Cookies.set(Constants.tokenExpireTime,accessTokenExpiresAt,{expires:365});
            return {
                authenticated: true,
                user: decodedToken
            };

        }
        else {
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

export const updateMyPass = async(input, ctx) => {
    try {
        const response = await ax.put(API_ROUTES.CHANGEPASSWORD, { currentPassword: input.currentPassword, newPassword: input.newPassword, confirmNewPassword: input.confirmNewPassword }, { ctx: ctx });

        if (response.data.success == true)
        {
            const result = response.data.success;
            return result;
        }
        else
        {
            console.log(response.response.data)
            pushAlert({ message: response.data.message, type: 'error' });
            // const error = response.res
            return null;
        }
    }
    catch (error)
    {
        console.log(error);
        const errorMassage = error.response.data.errorMessages;
        console.log(errorMassage)
        return errorMassage;
    }
}

export const logout = async() => {
    const response = await ax.get(API_ROUTES.SIGN_OUT);
    if (response.status == 200) {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        Cookies.remove('accessTokenExpireTime');
        return true;
    }
}