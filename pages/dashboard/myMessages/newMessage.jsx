import AuthContext from "../../../context/authContext";
import {useCallback, useContext, useEffect, useState} from "react";
import {withAuth} from "../../../components/Authorized";
import Link from "next/link";
import AppRoutes from "../../../common/appRoutes";
import InputText from "../../../components/form-inputs/InputText";
import {validator} from "../../../common/validator";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/router";
import InputTextarea from "../../../components/form-inputs/InputTextarea";
import {getSendMessages} from "../../../services/appServices";
import {postMessage} from "../../../services/clientAppService";

const sendMessages = ({authContext}) =>
{
    if(authContext.authState.authenticated)
    {
        const router=useRouter();



        const schema = validator.object({
            titleMessage:validator.string().required('نوشتن عنوان پیام اجباری است'),
            bodyMessage:validator.string().required('نوشتن متن پیام اجباری است')
        })


        const { register,reset, handleSubmit, watch,
            formState: { errors } } = useForm({
            resolver:yupResolver(schema),
            defaultValues:{
                titleMessage:'',
                bodyMessage:''
            }
        });




        const onSubmit = async (data) =>
        {
            const result = await postMessage(data.titleMessage,data.bodyMessage);
            console.log(result);
           if (result===true){
           reset({
               titleMessage:'',
               bodyMessage:''
           });

           }
        };

        return(
            <div className='flex justify-center'>
                <div className='flex flex-col mt-16 gap-7 w-full sm:w-[75rem]'>

                    <div className='flex justify-evenly gap-7 mx-[0.5rem]'>

                        <Link href={AppRoutes.SendMessages} className='bg-white flex w-2/3 flex-col items-center justify-center gap-7 py-10 rounded hover:drop-shadow-xl'>
                            <svg width="83" height="63" viewBox="0 0 83 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M81.4275 20.6755C82.0598 20.17 83 20.6429 83 21.4419V54.7868C83 59.1078 79.5146 62.6135 75.2188 62.6135H7.78125C3.48535 62.6135 0 59.1078 0 54.7868V21.4582C0 20.6429 0.924023 20.1863 1.57246 20.6918C5.20371 23.529 10.0184 27.1325 26.5535 39.215C29.974 41.726 35.7451 47.009 41.5 46.9764C47.2873 47.0253 53.1719 41.6282 56.4627 39.215C72.9978 27.1325 77.7963 23.5127 81.4275 20.6755ZM41.5 41.7423C45.2609 41.8076 50.6754 36.9811 53.3988 34.9918C74.9107 19.2895 76.548 17.9199 81.5086 14.0065C82.4488 13.2728 83 12.1314 83 10.9248V7.82669C83 3.5057 79.5146 0 75.2188 0H7.78125C3.48535 0 0 3.5057 0 7.82669V10.9248C0 12.1314 0.551172 13.2565 1.49141 14.0065C6.45195 17.9035 8.08926 19.2895 29.6012 34.9918C32.3246 36.9811 37.7391 41.8076 41.5 41.7423Z" fill="#F84C4D"/>
                            </svg>
                            <div className='flex gap-2'>
                                <p className='darkBlue-color font-bold text-xs sm:text-sm md:text-lg whitespace-nowrap'>پیام های ارسال شده</p>
                            </div>
                        </Link>

                        <div className='bg-white flex w-2/3 flex-col items-center justify-center gap-7 py-10 rounded active-div-message'>
                            <svg width="85" height="75" viewBox="0 0 85 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.5 0C19.0287 0 0 15.4936 0 34.6078C0 42.8538 3.55439 50.4142 9.46289 56.3608C7.38105 64.7316 0.448242 72.2105 0.365234 72.2937C0.186862 72.4825 0.0675796 72.7196 0.0221189 72.9756C-0.0233418 73.2316 0.00700985 73.4953 0.109426 73.7342C0.211841 73.9731 0.381836 74.1768 0.598415 74.3199C0.814995 74.4631 1.06867 74.5396 1.32812 74.5399C12.3283 74.5399 20.5859 69.2572 24.6699 65.9911C30.3712 68.1327 36.4114 69.2251 42.5 69.2156C65.9729 69.2156 85 53.722 85 34.6078C85 15.4936 65.9729 0 42.5 0ZM58.4375 38.601C58.4375 38.954 58.2976 39.2926 58.0485 39.5422C57.7994 39.7918 57.4616 39.9321 57.1094 39.9321H47.8125V49.2496C47.8125 49.6026 47.6726 49.9411 47.4235 50.1908C47.1744 50.4404 46.8366 50.5806 46.4844 50.5806H38.5156C38.1634 50.5806 37.8256 50.4404 37.5765 50.1908C37.3274 49.9411 37.1875 49.6026 37.1875 49.2496V39.9321H27.8906C27.5384 39.9321 27.2006 39.7918 26.9515 39.5422C26.7024 39.2926 26.5625 38.954 26.5625 38.601V30.6146C26.5625 30.2616 26.7024 29.923 26.9515 29.6734C27.2006 29.4238 27.5384 29.2835 27.8906 29.2835H37.1875V19.966C37.1875 19.613 37.3274 19.2745 37.5765 19.0248C37.8256 18.7752 38.1634 18.635 38.5156 18.635H46.4844C46.8366 18.635 47.1744 18.7752 47.4235 19.0248C47.6726 19.2745 47.8125 19.613 47.8125 19.966V29.2835H57.1094C57.4616 29.2835 57.7994 29.4238 58.0485 29.6734C58.2976 29.923 58.4375 30.2616 58.4375 30.6146V38.601Z" fill="#F84C4D"/>
                            </svg>
                            <div className='flex gap-2'>
                                <p className='darkBlue-color font-bold text-xs sm:text-sm md:text-lg whitespace-nowrap'>ایجاد پیام جدید</p>
                            </div>
                        </div>

                    </div>

                    <form  onSubmit={handleSubmit(onSubmit)} name='titleMessage' className='flex flex-col gap-5 mx-[1rem]'>

                        <p className='darkBlue-color text-xs sm:text-sm md:text-lg'>ایجاد پیام جدید :</p>
                        <div className='flex w-full flex-col gap-3'>

                            <InputText error={errors.titleMessage?.message} name='titleMessage' className='rounded w-full py-5 px-3 text-black text-xs sm:text-sm darkgrey-color focus:outline-none' register={register} required placeholder='عنوان پیام'/>
                            <InputTextarea name="bodyMessage" rows="7" placeholder="متن پیام یا پرسش" className="rounded w-full py-5 px-3 text-black text-xs sm:text-sm darkgrey-color focus:outline-none" register={register} required/>

                        </div>

                        <div className='w-full flex justify-center items-center'>
                            <button type='submit' className='bg-cyan-500 p-1 text-xs sm:text-sm md:text-lg btn-page text-sm bg-red text-white w-[20rem] hover:bg-red-600'>ثبت</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <></>
        )
    }
}

export default withAuth(sendMessages);