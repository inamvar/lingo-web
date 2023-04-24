import Swal from 'sweetalert2';
import appRoutes from "./appRoutes";

export const pushAlert = (result) => {
    console.log(result);
    const {message,type}=result;
    switch (type) {
        case 'success':{
            Swal.fire({
                icon: 'success',
                title: 'موفق',
                text: message,
                confirmButtonText: 'باشه',
            });
            break;
        }
        case 'error':{
            Swal.fire({
                icon: 'error',
                title: 'خطا',
                text: message,
                confirmButtonText: 'باشه',
            });
            break;
        }
    }
}
