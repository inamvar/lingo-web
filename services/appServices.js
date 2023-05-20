import API_ROUTES from "/common/apiRoutes";
import {handleApiError} from "../common/handleApiError";
import {pushAlert} from "../common/notifier";
import ax from "../common/apiServerSideRequest";


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