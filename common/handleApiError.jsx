import Swal from 'sweetalert2';
import appRoutes from "./appRoutes";

export const handleApiError = (error,context) => {

    if (context==undefined || context.ctx==undefined)
    {
        Swal.fire({
            icon: 'error',
            title: 'خطا',
            text: 'عدم امکان ارتباط با سرور',
            confirmButtonText: 'باشه',
        });
        return "";
    }

    const res = context.ctx.res;

    if (error.response) {

        const status = error.response.status;
        const data = error.response.data;
        const errorMessage = data?.message ?? 'عملیات با شکست مواجه شد';

        if (status === 401 && res!=undefined && res!=null)
        {
            console.log("get 401");
            res.writeHead(302, { Location: appRoutes.Login });
            res.end();
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
        else
        {
            Swal.fire({
                icon: 'error',
                title: 'خطا',
                text: errorMessage,
                confirmButtonText: 'باشه',
            });
        }
    }
    else
    {
        Swal.fire({
            icon: 'error',
            title: 'خطا',
            text: 'عدم امکان ارتباط با سرور',
            confirmButtonText: 'باشه',
        });
    }
};
