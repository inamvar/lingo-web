import Link from "next/link";
import appRoutes from '/common/appRoutes';
import InputText from "../../components/form-inputs/InputText";
import {useForm} from "react-hook-form";
import Meta from "../../components/meta";
import {useContext, useState} from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import {validator} from "/common/validator";
import {loginUser} from "../../services/appServices";
import {router} from "next/router";
import authContext from "../../context/authContext";
import useAuth from "../../hooks/useAuth";

export default function Login(){

    const authCtx = useContext(authContext);

    const schema = validator.object({
        userName:validator.string().required('انتخاب نام کاربری اجباری است'),
        password:validator.string().required('نوشتن رمز عبور اجباری است')
    })

    const { register, handleSubmit, watch,
        formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });

    function setContext(res)
    {
        authCtx.setAuthState(res);
    }

    const onSubmit =async (data) => {
        const result = await loginUser(data.userName,data.password);
        if (result != undefined)
        {
            setContext(result);
            router.push(appRoutes.Main);
        }
    };

    return(<>
        <Meta title='ورود'/>
        <div className='flex flex-col w-full items-center'>
            <div className='flex flex-row w-5/6 sm:w-96'>
                <div className='w-1/2 p-5 bg-white rounded-tr-lg text-sm text-center'>ورود</div>
                <Link className='w-1/2 p-5 bg-grey rounded-tl-lg text-sm text-disable text-center' href={appRoutes.Signup}>ثبت نام</Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-5 bg-white rounded w-5/6 sm:w-96 gap-5'>
                <p className='text-sm'>لطفا برای ورود به حساب کاربری اطلاعات زیر را تکمیل کنید </p>
                <div className='flex flex-col gap-3'>
                    <InputText error={errors.userName?.message} register={register}  placeholder='نام کاربری' name='userName'/>
                    <InputText error={errors.password?.message} type='password' required register={register} placeholder='رمز عبور' name='password'/>
                    {/*<InputSelect name='gender' register={register} error={errors.gender?.message} options={[{name:'mahsa',value:'1'},{name:'araz',value:2}]}/>*/}
                </div>
                <div className='text-right'>
                    <Link href={appRoutes.ForgotPassword} className='text-sm b'>رمز عبور خود را فراموش کرده ام!</Link>
                </div>
                <div className='flex flex-row justify-center'>
                    <button  type='submit' className='bg-cyan-500 p-1 text-sm btn-page bg-red text-white w-full'>ورود به حساب کاربری</button>
                </div>
            </form>
        </div>
    </>);
}

