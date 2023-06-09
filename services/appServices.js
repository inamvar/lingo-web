import API_ROUTES from "/common/apiRoutes";
import {handleApiError} from "../common/handleApiError";
import {pushAlert} from "../common/notifier";
import ax from "../common/apiServerSideRequest";


export const getOrderHistory = async (context) =>
{
    try
    {

        let response = await ax.get(API_ROUTES.ORDERHISTORY,{ctx:context});
        console.log(response);

        if (response.data.success == true)
        {
            const history = response.data.data.data;
            return history;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error)
    {
        handleApiError(error,context);
    }
}

export const getMyCoursesList = async (context) =>
{
    try
    {
        let response = await ax.get(API_ROUTES.MYCOURSES,{ctx:context});

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
        handleApiError(error,context);
    }
}

export const getGoldenPackage = async (context) =>
{
    try
    {
        let response = await ax.get(API_ROUTES.GOLDENPACKAGE);

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
        handleApiError(error,context);
    }
}

export const getFreePackagesList = async (context) =>
{
    try
    {
        let response = await ax.get(API_ROUTES.FREEPACKAGE,{ctx:context});

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
        handleApiError(error,context);
    }
}

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
        handleApiError(error,context);
    }
}

export const getSendMessages = async (context) =>
{
    try
    {
        let response = await ax({
            method: "get",
            url: API_ROUTES.SENDMESSAGES,
            data:{},
            ctx:context
        });
        if (response.data.success == true)
        {
            const res = response.data.data.data;
            return res;
        }

        // let response = await ax.get(API_ROUTES.SENDMESSAGES,{ctx:context});
        // console.log(response);
    }
    catch (error)
    {
        handleApiError(error,context);
    }
}

export const getMessageDetail = async (id,ctx) =>
{
    try
    {
        const response = await ax.get(API_ROUTES.MESSAGEDETAIL(id),{ctx:ctx});

        if (response.data.success == true)
        {
            const detail = response.data.data;

            return detail;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error)
    {
        handleApiError(error,ctx);
    }
}

export const getPackageCourseList = async (slug,ctx) =>
{
    try
    {
        const response = await ax.get(API_ROUTES.PACKAGE(slug),{ctx:ctx});

        if (response.data.success == true)
        {
            const courses = response.data.data.data;
            return courses;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error)
    {
        handleApiError(error,ctx);
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
        handleApiError(error,context);
    }
}

export const getVideoDetail=async (slug,context)=>
{
    try {
        const response=await ax.get(API_ROUTES.VIDEO(slug),{ctx:context});
        if (response.data.success == true)
        {
            const course = response.data.data;
            return course;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error){
        handleApiError(error,context);
    }
}

export const getMyProfile=async (ctx)=>
{
    try {
        const response = await ax.get(API_ROUTES.MYPROFILE,{ctx:ctx});
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
        handleApiError(error,ctx);
    }
}

export const getMyPassword = async (ctx) =>
{
    try {
        const response=await ax.get(API_ROUTES.CHANGEPASSWORD,{ctx:ctx});

        if (response.data.success==true)
        {
            const result =response.data.success;
            return result;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error){
        handleApiError(error,ctx);
    }
}

export const getBanner=async (context)=>
{
    try {
        const response=await ax.get(API_ROUTES.BANNER);
        if (response.data.success==true){
            const result=response.data.data;
            return result;
        }
    }
    catch (error){
    handleApiError(error,context);
    }
}