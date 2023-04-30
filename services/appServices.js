import axios from "axios";
import API_ROUTES from "/common/apiRoutes";
import server from "../configs/server";
import {handleApiError} from "../common/handleApiError";
import {pushAlert} from "../common/notifier";
import jwt from 'jsonwebtoken';
import {Constants} from "../common/constants";

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
                localStorage.setItem(Constants.token,accessToken);
                localStorage.setItem(Constants.refreshToken,refreshToken);
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

export const getPackagesList = async () =>
{
    try
    {
        let response = await ax.get(API_ROUTES.PACKAGES);
        if (response.data.success = true)
        {
            const packages = response.data.data.data;
            console.log('packages is:');
            console.log(packages);
            console.log(packages);
            return packages;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
        }
    }
    catch (error)
    {
        pushAlert({
            message:error.data.message,
            type:'error'
        });
    }
}

export  const logout= () =>
{
    localStorage.removeItem(Constants.token);
    localStorage.removeItem(Constants.refreshToken);
}