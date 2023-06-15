import Link from "next/link";
import appRoutes from '/common/appRoutes';
import InputText from "../../components/form-inputs/InputText";
import {useForm} from "react-hook-form";
import Meta from "../../components/meta";
import { yupResolver } from '@hookform/resolvers/yup';
import {validator} from "/common/validator";
import {router} from "next/router";
import {signUpUser} from "../../services/clientAppService";
import authContext from "../../context/authContext";
import {useContext} from "react";

export default function signUp(){

    const authCtx = useContext(authContext);

    const schema = validator.object({
        firstName:validator.string().required('نوشتن نام اجباری است'),
        lastName:validator.string().required('نوشتن نام خانوادگی اجباری است'),
        email:validator.string().required('انتخاب ایمیل اجباری است'),
        password:validator.string().required('نوشتن رمز عبور اجباری است'),
        confirmPassword:validator.string().required('نوشتن تکرار رمز عبور اجباری است')
    })

    const { register, handleSubmit ,
        formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });

    function setContext(res)
    {
        authCtx.setAuthState(res);
    }

    const  onSubmit =async (data) =>
    {
        const returnUrl= router.query.returnUrl;
        const result = await signUpUser(data.firstName,data.lastName,data.password,data.confirmPassword,data.email,data.phoneNumber,data.marketerCode);
        if (result != undefined)
        {
            setContext(result);
            if (returnUrl==undefined || returnUrl == appRoutes.ChangePassword){
                router.push(returnUrl);
                return;
            }
            else
            {
                router.push(appRoutes.Main);
                return;
            }
        }
    };

    return(<>
        <Meta title='ثبت نام'/>
        <div className='flex flex-col w-full items-center mt-16'>
            <div className='flex flex-row w-5/6 sm:w-96'>
                <Link className='w-1/2 p-5 bg-grey rounded-tr-lg text-sm text-center' href={appRoutes.Login}>ورود</Link>
                <div className='w-1/2 p-5 bg-white rounded-tl-lg text-sm text-disable text-center'>ثبت نام</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-5 bg-white rounded w-5/6 sm:w-96 gap-5'>
                <p className='text-sm darkgrey-color'>لطفا برای ثبت نام اطلاعات زیر را تکمیل کنید </p>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2'>
                        <InputText error={errors.firstName?.message} register={register} required placeholder='نام' name='firstName'/>
                        <InputText error={errors.lastName?.message} register={register} required placeholder='نام خانوادگی' name='lastName'/>
                    </div>
                    <InputText error={errors.email?.message} register={register} required  placeholder='ایمیل' name='email'/>
                    <InputText error={errors.phoneNumber?.message} register={register} placeholder='شماره تلفن' name='phoneNumber'/>
                    <InputText error={errors.password?.message} type='password' required register={register} placeholder='رمز عبور' name='password'/>
                    <InputText error={errors.confirmPassword?.message} type='password' required register={register} placeholder='تکرار رمز عبور' name='confirmPassword'/>
                    <InputText register={register} placeholder='کد معرف' name='marketerCode'/>
                </div>
                <div className='flex flex-row justify-center'>
                    <button type='submit' className='bg-cyan-500 p-1 text-sm btn-page bg-red text-white w-full hover:bg-red-600'>ورود به حساب کاربری</button>
                </div>
            </form>
        </div>
    </>);
}

