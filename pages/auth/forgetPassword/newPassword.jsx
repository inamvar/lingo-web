import Meta from "../../../components/meta";
import Link from "next/link";
import appRoutes from "../../../common/appRoutes";
import InputText from "../../../components/form-inputs/InputText";
import {validator} from "../../../common/validator";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {postResetPassword} from "../../../services/clientAppService";
import {router} from "next/router";
import ProgressTimer from "../../../components/progressTimer";
import {useEffect, useState} from "react";
import moment from "moment";
import Cookies from "js-cookie";
export default function NewPassword()
{

    const [requestExpTime, setRequestExpTime] = useState();
    const [requestTime,setRequestTime]=useState(null);
    const [progressFinished, setProgressFinished] = useState(false);

    const handleProgressFinished = () => {
        setProgressFinished(true);
        setProgressFinished(false);
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const expireTime = localStorage.getItem('ResetPassword-expireTime');
        const reqTime = localStorage.getItem('ResetPassword-RequestTime');
        setRequestExpTime(expireTime);
        setRequestTime(reqTime);
    }, []);


    useEffect(() => {

        if (requestExpTime===null){
            router.push(appRoutes.ForgetPassword);
        }
    }, [requestExpTime]);



    const schema = validator.object({
        securityCode:validator.string().required('نوشتن کد تایید اجباری است'),
        NewPass:validator.string().required('نوشتن  رمز عبور اجباری است'),
        RetryNewPass:validator.string().required('نوشتن تکرار رمز عبور اجباری است')
    })

    const { register, handleSubmit, watch,
        formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });

    const onSubmit = async (data) =>
    {
        const email = localStorage.getItem("ResetPassword-Key");
        const result = await postResetPassword(data.securityCode,data.NewPass,data.RetryNewPass,email);
        if(result)
        {
            router.push(appRoutes.Login);
        }
    };


    if(requestExpTime===undefined)
    {
        return (<></>);
    }
    else{
        return(<>
            <Meta title='فراموشی رمز'/>
            <div className='flex flex-col w-full items-center mt-16'>
                <div className='flex flex-row w-5/6 sm:w-96'>
                    <div className='w-full p-5 bg-white rounded-tr-lg rounded-tl-lg bg-darkBlue text-white text-sm text-center font-bold'>تغییر رمز عبور</div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-5 bg-white rounded w-5/6 sm:w-96 gap-7'>
                    <p className='text-sm darkBlue-color text-center'>لطفا برای تغییر رمز عبور اطلاعات زیر را تکمیل کنید </p>
                    <div className='flex flex-col gap-3'>
                        <InputText error={errors.securityCode?.message} required register={register} placeholder='کد تایید' name='securityCode'/>

                        {!progressFinished && (
                            <ProgressTimer
                                expireTime={requestExpTime}
                                requestTime={requestTime}
                                onProgressFinished={handleProgressFinished}
                            />
                        )}

                        <InputText error={errors.NewPass?.message} type='password' required register={register} placeholder="رمز عبور" name='NewPass'/>
                        <InputText error={errors.RetryNewPass?.message} type='password' required register={register} placeholder='تکرار رمز عبور' name='RetryNewPass'/>
                    </div>
                    <div className='flex flex-row justify-center'>
                        <button type='submit' className='bg-cyan-500 p-1 text-sm btn-page bg-red text-white w-full hover:bg-red-600'>تغییر رمز عبور</button>
                    </div>
                </form>
            </div>
        </>);
    }


}

