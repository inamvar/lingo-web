import Link from "next/link";
import appRoutes from '/common/appRoutes';
import InputText from "../../components/form-inputs/InputText";
import {useForm} from "react-hook-form";
import Meta from "../../components/meta";
import { yupResolver } from '@hookform/resolvers/yup';
import {validator} from "/common/validator";
import {signUpUser} from "../../services/appServices";
import {router} from "next/router";

export default function Login(){

    const schema = validator.object({
        firstName:validator.string().required('نوشتن نام اجباری است'),
        lastName:validator.string().required('نوشتن نام خانوادگی اجباری است'),
        email:validator.string().required('انتخاب ایمیل اجباری است'),
        password:validator.string().required('نوشتن رمز عبور اجباری است'),
        phoneNumber:validator.string().required('نوشتن شماره تلفن اجباری است'),
        confirmPassword:validator.string().required('نوشتن تکرار رمز عبور اجباری است')
    })

    const { register, handleSubmit, watch,
        formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });

    const  onSubmit =async (data) => {
        var result = await signUpUser(data.firstName,data.lastName,data.password,data.confirmPassword,data.email,data.phoneNumber,data.marketerCode);
        if (result == true){
            router.push(appRoutes.Login);
        }
    };

    return(<>
        <Meta title='ثبت نام'/>
        <div className='flex flex-col w-full items-center'>
            <div className='flex flex-row w-5/6 sm:w-96'>
                <Link className='w-1/2 p-5 bg-grey rounded-tr-lg text-sm text-center' href={appRoutes.Login}>ورود</Link>
                <div className='w-1/2 p-5 bg-white rounded-tl-lg text-sm text-disable text-center'>ثبت نام</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-5 bg-white rounded w-5/6 sm:w-96 gap-5'>
                <p className='text-sm'>لطفا برای ثبت نام اطلاعات زیر را تکمیل کنید </p>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2'>
                        <InputText error={errors.firstName?.message} register={register} required placeholder='نام' name='firstName'/>
                        <InputText error={errors.lastName?.message} register={register} required placeholder='نام خانوادگی' name='lastName'/>
                    </div>
                    <InputText error={errors.email?.message} register={register} required  placeholder='ایمیل' name='email'/>
                    <InputText error={errors.phoneNumber?.message} required register={register} placeholder='شماره تلفن' name='phoneNumber'/>
                    <InputText error={errors.password?.message} type='password' required register={register} placeholder='رمز عبور' name='password'/>
                    <InputText error={errors.confirmPassword?.message} type='password' required register={register} placeholder='تکرار رمز عبور' name='confirmPassword'/>
                    <InputText register={register} placeholder='کد معرف' name='marketerCode'/>
                </div>
                <div className='text-right'>
                    <Link href={appRoutes.ForgotPassword} className='text-sm b'>رمز عبور خود را فراموش کرده ام!</Link>
                </div>
                <div className='flex flex-row justify-center'>
                    <button type='submit' className='bg-cyan-500 p-1 text-sm btn-page bg-red text-white w-full'>ورود به حساب کاربری</button>
                </div>
            </form>
        </div>
    </>);
}

