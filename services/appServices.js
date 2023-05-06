import API_ROUTES from "/common/apiRoutes";
import {handleApiError} from "../common/handleApiError";
import {pushAlert} from "../common/notifier";
import jwt from 'jsonwebtoken';
import {Constants} from "../common/constants";
import * as https from "https";
import {ax} from "./api-request";




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

        if (response.data.success == true)
        {
            const packages = response.data.data.data;
            console.log(packages);
            return packages;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error)
    {
         handleApiError(error);
        // pushAlert({
        //     message:error.data.message,
        //     type:'error'
        // });
    }
}

export const getPackageCourseList = async (slug) =>
{
    try
    {
        const response = await ax.get(API_ROUTES.PACKAGE(slug));

        if (response.data.success == true)
        {
            const courses = response.data.data.data;
            console.log(courses);
            return courses;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error)
    {
        // pushAlert({
        //     message:error.data.message,
        //     type:'error'
        // })
    }
}

export const courseDetail = async (slug) =>
{
    try
    {
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^test^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        console.log(slug);
        const response = await ax.get(API_ROUTES.COURSE(slug));
        console.log(response);
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^test^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

        if (response.data.success == true)
        {
            const course = response.data.data.data;
            console.log(course);
            return course;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error)
    {
        handleApiError(error);
        // pushAlert({
        //     message:error.data.message,
        //     type:'error'
        // })
    }
}
export  const logout= () =>
{
    localStorage.removeItem(Constants.token);
    localStorage.removeItem(Constants.refreshToken);
}