import axios from "axios";
import API_ROUTES from "/common/apiRoutes";
import server from "../configs/server";
import {handleApiError} from "../common/handleApiError";
import {pushAlert} from "../common/notifier";
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import  constants from "../common/constants";

const ax = axios.create({
    baseURL: server
});

export const signUpUser = async (firstname , lastname, password , confirmPassword , email, phoneNumber ,marketerCode ) =>
{
    try
    {
        let response = await ax.post(API_ROUTES.SIGN_UP ,{ confirmPassword:confirmPassword, email:email , firstName:firstname , lastName:lastname , password:password , phoneNumber:phoneNumber , marketerCode:marketerCode})
        pushAlert({
            message:'ثبت نام با موفقیت انجام شد',
            type:'success'
        })
        return true;
    }
    catch(error)
    {
        console.log(error);
        handleApiError(error);
    }
}

export const loginUser = async (username, password) =>
{
    try
    {
        let response= await ax.post(API_ROUTES.LOGIN, { userName:username,password: password });
        console.log(response);
        if(response.data.success == true)
        {
            const {accessToken, refreshToken} = response.data.data;
            const  decodedToken=jwt.decode(accessToken);
            console.log(decodedToken);
            const tokenExpiration = decodedToken.exp * 1000; // Convert the expiration time to milliseconds
            console.log(tokenExpiration);
            const expireTime= new Date(tokenExpiration);
            console.log(expireTime);
            Cookies.set('token',accessToken, { expires: expireTime });
            Cookies.set('refreshToken',refreshToken, { expires: 365 });
            pushAlert({
                message:'ورود با موفقیت انجام شد',
                type:'success'
            })
            return {
               authenticated:true,
               user:decodedToken
            };
       }
       else{
           console.log(response.data.message);
           pushAlert({
               message:response.data.message,
               type:'error'
           });
       }
    }
    catch (error){
        handleApiError(error);
    }
};

export const logout= () =>
{
    // localStorage.removeItem('token');
}

export const isAuthenticated= () =>
{
    // const token = localStorage.getItem('token');
    // return token !== null;
}

// export async  function getCredits(){
//
//     try {
//         let result= await ax.get(API_ROUTES.CREDITS+"/GetCredits");
//         return result.data;
//     }
//     catch(error){
//
//     }
// }