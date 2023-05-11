import API_ROUTES from "/common/apiRoutes";
import {handleApiError} from "../common/handleApiError";
import {pushAlert} from "../common/notifier";
import jwt from 'jsonwebtoken';
import {Constants} from "../common/constants";
import ax from "./api-request";
import Cookies from "js-cookie";
import {
    getWordsAndWhitespaces
} from "next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/get-words-and-whitespaces";

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

        if(response.data.success == true)
        {
            const {accessToken, refreshToken} = response.data.data;
            const  decodedToken=jwt.decode(accessToken);
            console.log(accessToken);

            const remainingTime = decodedToken.exp - Date.now() / 1000;
            Cookies.set(Constants.token, accessToken, { expires: remainingTime / (60 * 60 * 24) });
            Cookies.set(Constants.refreshToken, refreshToken,{expires:365});

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

export const getPackagesList = async (context) =>
{
    try
    {
        let response = await ax.get(API_ROUTES.PACKAGES,{ctx:context});

        if (response.data.success == true)
        {
            const packages = response.data.data.data;
            return packages;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error)
    {
         handleApiError(error,context.res);
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
       handleApiError(error);
    }
}

export const courseDetail = async (slug,context) =>
{
    try
    {

        const response = await ax.get(API_ROUTES.COURSE(slug),{ctx:context});
        if (response.data.success == true)
        {
            const course = response.data.data;
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
        handleApiError(error,context.res);
        // pushAlert({
        //     message:error.data.message,
        //     type:'error'
        // })
    }
}
export const getVideoDetail=async (slug,context)=>{
    try {
            const response=await ax.get(API_ROUTES.VIDEO(slug),{ctx:context});
        if (response.data.success == true)
        {
            const course = response.data.data;
            console.log(course);
            return course;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error){
        handleApiError(error);
    }
}
export const  getSiteSetting=async ()=>{
    try {
        const response=await ax.get(API_ROUTES.SITESETTING);
        if (response.data.success==true){
            const result = response.data.data;
            console.log(result);
            return result;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error){

    }
}
export const getMyProfile=async (ctx)=>{
    try {
        const response=await ax.get(API_ROUTES.MYPROFILE,{ctx:ctx});
        if (response.data.success==true)
        {
            const result =response.data.data;
            return result;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error){

    }
}
export const updateMyProfile=async (input,ctx)=>{
    try {
        console.log(input);
        const response=await ax.put(API_ROUTES.UPDATEMYPROFILE,
            {firstName:input.firstName,lastName:input.lastName,phoneNumber:input.phoneNumber},{ctx:ctx});
        if (response.data.success==true){
            const result=response.data.data;
            console.log(result);
            return result;
        }
        else {

        }
    }
    catch (error){

    }
}
export const logout= () =>
{
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
}