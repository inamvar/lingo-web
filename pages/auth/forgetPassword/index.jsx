import Meta from "../../../components/meta";
import Link from "next/link";
import appRoutes from "../../../common/appRoutes";
import InputText from "../../../components/form-inputs/InputText";
import {validator} from "../../../common/validator";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {postResetPasswordRequest} from "../../../services/clientAppService";
import {router} from "next/router";

export default function forgetPassword()
{
    const schema = validator.object({
        email:validator.string().required('نوشتن ایمیل اجباری است')
    })

    const { register, handleSubmit, watch,
        formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });

    const onSubmit = async (data) =>
    {
        const result = await postResetPasswordRequest(data.email);
        if(result)
        {
            sessionStorage.setItem("ResetPassword-Key", data.email);
            router.push(appRoutes.NewPassword);
        }

    };

    return(<>
        <Meta title='فراموشی رمز'/>
        <div className='flex flex-col w-full items-center mt-16'>
            <div className='flex flex-row w-5/6 sm:w-96'>
                <div className='w-full p-5 bg-white rounded-tr-lg rounded-tl-lg bg-darkBlue text-white text-sm text-center font-bold'>تغییر رمز عبور</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-5 bg-white rounded w-5/6 sm:w-96 gap-7'>
                <div className='flex flex-col gap-3 mt-4'>
                    <InputText error={errors.email?.message} required register={register} placeholder='ایمیل' name='email'/>
                </div>
                <div className='flex flex-row justify-center'>
                    <button type='submit' className='bg-cyan-500 p-1 text-sm btn-page bg-red text-white w-full'>ثبت</button>
                </div>
                <div>
                    <p className='text-xs darkBlue-color'>لطفا پس از ثبت، برای دریافت کد تایید ایمیل خود را بررسی کنید. </p>
                </div>
            </form>
        </div>
    </>);
}