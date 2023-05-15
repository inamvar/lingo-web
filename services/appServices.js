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

export const getVideoDetail=async (slug,context)=>
{
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

export const getSiteSetting = async() =>
{
    try {
        const response=await ax.get(API_ROUTES.SITESETTING);

        if (response.data.success==true){
            const result = response.data.data;
            return result;
        }
        else {
            pushAlert({message:response.data.message,type:'error'});
            return null;
        }
    }
    catch (error){
        console.log(error)
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

    }
}

export const getBanner=async ()=>
{
    try {
        const response=await ax.get(API_ROUTES.BANNER);
        if (response.data.success==true){
            const result=response.data.data;
            console.log(result);
            return result;
        }
    }
    catch (error){

    }
}