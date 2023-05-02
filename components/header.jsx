import Image from 'next/image';
import Logo from '/public/picture/Logo.png';
import Link from 'next/link';
import appRoutes from "../common/appRoutes";
import React,{useContext} from "react";
import authContext from "../context/authContext";
import {logout} from "../services/appServices";
import Modal from "./modal";
import SlidingSidebar from "./slidingSidebar";
import {getPackagesList} from "../services/appServices";


const Header = ()=>{

    const authCtx=useContext(authContext);

    const SignOut=()=>{
        logout();
        authCtx.setAuthState({authenticated:false,user:null});
    }

    // const getpackages = async() => {
    //     const result = await getPackagesList();
    //     console.log(result);
    // }

    return(
        <div className='flex justify-between mb-8 mt-4 lg:px-5 px-3'>

            <div className='block md:hidden mt-7'>
                <SlidingSidebar />
            </div>

            <div>
                <Link href={appRoutes.Main}><Image className='w-32' alt='logo' src={Logo}/></Link>
            </div>
            <div className='lg:w-1/3 w-1/2 hidden md:block'>
                <div className='flex flex-row justify-between items-center h-full'>
                    <a className='darkBlue-color'>خانه</a>
                    <a className='darkBlue-color'>پکیج های رایگان</a>
                    <a className='darkBlue-color'>پکیج ها و مشاوره ها</a>
                    <a className='darkBlue-color'>تخفیف</a>
                </div>
            </div>

            <div className='flex w-1/9 justify-between gap-1 items-center md:divide-x-2 md:divide-gray-300'>
                <a>
                    <Modal
                        text={<svg width="30" height="30" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.5991 32.7757L32.6732 25.8498L27.3459 23.6488C29.1197 21.1263 30.07 18.117 30.0666 15.0333C30.0666 6.74389 23.3227 0 15.0333 0C6.74389 0 0 6.74389 0 15.0333C0 23.3227 6.74389 30.0666 15.0333 30.0666C18.1439 30.0701 21.1781 29.1034 23.7132 27.3011L25.9084 32.614L32.8341 39.5402C33.2783 39.9844 33.8056 40.3368 34.3859 40.5772C34.9663 40.8176 35.5883 40.9413 36.2164 40.9414C36.8446 40.9414 37.4666 40.8177 38.047 40.5773C38.6273 40.3369 39.1547 39.9846 39.5989 39.5404C40.0431 39.0963 40.3954 38.569 40.6358 37.9886C40.8762 37.4083 41 36.7863 41 36.1581C41 35.5299 40.8763 34.9079 40.6359 34.3275C40.3956 33.7472 40.0432 33.2199 39.5991 32.7757ZM2.73333 15.0333C2.73333 8.25123 8.25123 2.73333 15.0333 2.73333C21.8154 2.73333 27.3333 8.25123 27.3333 15.0333C27.3333 21.8154 21.8154 27.3333 15.0333 27.3333C8.25123 27.3333 2.73333 21.8154 2.73333 15.0333ZM37.6662 37.6075C37.2814 37.9914 36.7601 38.207 36.2166 38.207C35.6731 38.207 35.1517 37.9914 34.767 37.6075L28.2265 31.067L26.1855 26.1269L31.1258 28.1679L37.6664 34.7084C38.0502 35.0932 38.2657 35.6145 38.2657 36.158C38.2657 36.7015 38.0501 37.2228 37.6662 37.6075Z" fill="#143794"/></svg>
                             }
                        body={
                            <div className='flex d-rtl'>
                                <input type='text' className='rounded py-4 px-3 text-black text-sm focus:outline-none w-3/4' placeholder='به دنبال یادگیری چه مهارتی هستید ؟'/>
                                <a className='p-4 w-1/4 text-center bg-darkBlue rounded-tl-md rounded-bl-md text-sm text-white'>جست و جو</a>
                            </div>
                        }
                    />
                </a>
                {authCtx.authState.authenticated ? (
                    <>
                        <Link href={appRoutes.Dashboard} className='hover:drop-shadow-md darkBlue-color px-2 hidden md:block whitespace-nowrap'>داشبورد من</Link>
                        <button onClick={SignOut} className='bg-darkBlue hover:bg-blue-900 text-white text-center btn-page sm:w-28 hidden md:block'>خروج</button>
                        <button onClick={SignOut} className='md:hidden block'>
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6506 32.8162H0V3.33015L16.6506 0V32.8162ZM2.17183 30.6443H14.4788V2.64962L2.17183 5.11104V30.6443ZM14.4788 3.13465H22.4421V32.8162H14.4787L14.4788 3.13465ZM20.2703 5.30651H16.6506V30.6444H20.2703V5.30651ZM27.915 22.2901L26.3803 20.7553L29.9261 17.2095L26.3818 13.6766L27.915 12.139L33 17.2065L27.915 22.2901ZM31.4914 18.3374H21.3563V16.1656H31.4914V18.3374Z" fill="#143794"/>
                            </svg>
                        </button>
                    </>
                ) : (
                    <>
                        <Link href={appRoutes.Login} className='hover:drop-shadow-md darkBlue-color px-2 hidden md:block'>ورود کاربران</Link>
                        <Link href={appRoutes.Signup} className='bg-red hover:bg-red-600 text-white text-center btn-page sm:w-28 hidden md:block'>ثبت نام</Link>
                    </>
                )}
            </div>
        </div>
    )
}
export default Header;