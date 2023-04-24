// axiosUtils.js
import axios from "axios";
import API_ROUTES from "/common/apiRoutes";
import server from "../configs/server";
import {handleApiError} from "../common/handleApiError";
import {pushAlert} from "../common/notifier";

const ax = axios.create({
    baseURL: server
    // add other config options as needed
});

export const loginUser = async (username, password) =>
{
    try
    {
        let response= await ax.post(API_ROUTES.LOGIN, { phoneNumber:username,password: password });
        console.log(response);
       if(response.data.isSuccess) {
           const {token, refreshToken} = response.data.data;

            console.log(token,refreshToken);
            return {
                token,
                refreshToken
            };
           // localStorage.setItem('token',token);
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
        console.log(error);
        handleApiError(error);
        // return  handleApiError(error);
    }
};

export const logout= () =>
{
    localStorage.removeItem('token');

}

export const isAuthenticated= () =>
{
    const token = localStorage.getItem('token');
    return token !== null;
}

export async  function getCredits(){

    try {
        let result= await ax.get(API_ROUTES.CREDITS+"/GetCredits");
        return result.data;
    }
    catch(error){

    }
}