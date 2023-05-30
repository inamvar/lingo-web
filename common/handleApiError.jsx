import Swal from 'sweetalert2';
import appRoutes from "./appRoutes";
import router from 'next/router';

export const handleApiError = (error,context) => {

    console.log("_________________________________________________________________________________________________________")
    console.log(context.ctx);
    console.log("_____________________________________________________________________________________________________________")

    if (context==undefined || context.ctx==undefined){
        Swal.fire({
            icon: 'error',
            title: 'خطا',
            text: 'عدم امکان ارتباط با سرور',
            confirmButtonText: 'باشه',
        });
        return "401";
    }
    //const  req = context.ctx.req;
    const res = context.ctx.res;
   // const currentUrl = req.url;
    // console.log('currentUrl');
    // console.log(currentUrl);
    // console.log('currentUrl');
    if (error.response) {
        const status = error.response.status;
        const data = error.response.data;
        console.log(status);
        console.log(data);
        const errorMessage = data?.message ?? 'عملیات با شکست مواجه شد';
        if (status === 401 && res!=undefined && res!=null) {

            console.log("get 401");
            // if (currentUrl!=undefined){
            //     res.writeHead(302, { Location: appRoutes.LoginReturn(currentUrl) });
            //     res.end();
            // }
            // else{
                res.writeHead(302, { Location: appRoutes.Login });
                res.end();
            // }

        }
        else if( status === 400)
        {
            Swal.fire({
                icon: 'error',
                title: 'خطا',
                text: data.errorMessages ,
                confirmButtonText: 'باشه',
            });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'خطا',
                text: errorMessage,
                confirmButtonText: 'باشه',
            });
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'خطا',
            text: 'عدم امکان ارتباط با سرور',
            confirmButtonText: 'باشه',
        });
    }
};
