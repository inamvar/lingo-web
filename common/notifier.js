import Swal from 'sweetalert2';
import appRoutes from "./appRoutes";

export const pushAlert = (result) =>
{
    const {message,type}=result;

    switch (type) {
        case 'success':{
            Swal.fire({
                icon: 'success',
                title: 'موفق',
                text: message,
                confirmButtonText: 'تایید',
            });
            break;
        }
        case 'error':{
            Swal.fire({
                icon: 'error',
                title: 'خطا',
                text: message,
                confirmButtonText: 'تایید',
            });
            break;
        }
        case 'warning':{
            Swal.fire({
                icon: 'warning',
                title: 'هشدار',
                text: message,
                confirmButtonText: 'تایید',
            });
            break;
        }
    }
}
