import Swal from 'sweetalert2';
import appRoutes from "./appRoutes";
import router from 'next/router';

export const handleApiError = (error) => {
    console.log(error);
    if (error.response) {
        const { status, data } = error.response;
        const errorMessage = data?.message ?? 'عملیات با شکست مواجه شد';

        if (status === 401) {
            // redirect to login page
            router.push(appRoutes.Login);
        } else {
            // show error message
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
