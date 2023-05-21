import Image from 'next/image';
import Logo from '/public/picture/Logo.png';
import Link from 'next/link';
import appRoutes from "../common/appRoutes";
import React,{useContext} from "react";
import authContext from "../context/authContext";
import Modal from "./modal";
import SlidingSidebar from "./slidingSidebar";
import {getPackagesList} from "../services/appServices";
import {logout} from "../services/clientAppService";
// import {BarLoader} from "react-spinner-animated";
// import 'react-spinner-animated/dist/index.css';


const Header = ()=>{

    const authCtx=useContext(authContext);

    const SignOut=async ()=>
    {
       await logout();
        authCtx.setAuthState({authenticated:false,user:null});
    }

    return(
        <div className='flex justify-between mb-8 mt-4 lg:px-16 px-3'>

            <div className='block md:hidden mt-7'>
                <SlidingSidebar />
            </div>

            <div>
                {/*<BarLoader text={"Loading..."} bgColor={"#F0A500"} center={false} width={"150px"} height={"150px"}/>*/}
                <Link href={appRoutes.Main}><Image className='w-32' alt='logo' src={Logo}/></Link>
            </div>
            <div className='lg:w-1/3 w-1/2 xl:w-1/4 hidden md:block'>
                <div className='flex flex-row justify-between items-center h-full xl:gap-10 whitespace-nowrap'>
                    <Link href={appRoutes.Main} className='darkBlue-color'>خانه</Link>
                    <Link href={appRoutes.FREEPACKAGE} className='darkBlue-color hover:drop-shadow-lg'>پکیج های رایگان</Link>
                    <a className='darkBlue-color hover:drop-shadow-lg'>پکیج ها و مشاوره ها</a>
                    <a className='darkBlue-color hover:drop-shadow-lg'>تخفیف</a>
                </div>
            </div>

            <div className='flex w-1/9 justify-between gap-1 items-center md:divide-x-2 md:divide-gray-300'>
                <a>
                    <Modal
                        text={<svg width="30" height="30" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.5991 32.7757L32.6732 25.8498L27.3459 23.6488C29.1197 21.1263 30.07 18.117 30.0666 15.0333C30.0666 6.74389 23.3227 0 15.0333 0C6.74389 0 0 6.74389 0 15.0333C0 23.3227 6.74389 30.0666 15.0333 30.0666C18.1439 30.0701 21.1781 29.1034 23.7132 27.3011L25.9084 32.614L32.8341 39.5402C33.2783 39.9844 33.8056 40.3368 34.3859 40.5772C34.9663 40.8176 35.5883 40.9413 36.2164 40.9414C36.8446 40.9414 37.4666 40.8177 38.047 40.5773C38.6273 40.3369 39.1547 39.9846 39.5989 39.5404C40.0431 39.0963 40.3954 38.569 40.6358 37.9886C40.8762 37.4083 41 36.7863 41 36.1581C41 35.5299 40.8763 34.9079 40.6359 34.3275C40.3956 33.7472 40.0432 33.2199 39.5991 32.7757ZM2.73333 15.0333C2.73333 8.25123 8.25123 2.73333 15.0333 2.73333C21.8154 2.73333 27.3333 8.25123 27.3333 15.0333C27.3333 21.8154 21.8154 27.3333 15.0333 27.3333C8.25123 27.3333 2.73333 21.8154 2.73333 15.0333ZM37.6662 37.6075C37.2814 37.9914 36.7601 38.207 36.2166 38.207C35.6731 38.207 35.1517 37.9914 34.767 37.6075L28.2265 31.067L26.1855 26.1269L31.1258 28.1679L37.6664 34.7084C38.0502 35.0932 38.2657 35.6145 38.2657 36.158C38.2657 36.7015 38.0501 37.2228 37.6662 37.6075Z" fill="#143794"/></svg>
                             }
                        body={
                            <div className='flex d-rtl justify-between md:border-none md:rounded-none rounded border-2 border-blue-950'>
                                <input type='text' className='rounded py-4 px-3 text-black text-xs md:text-sm focus:outline-none w-3/4' placeholder='به دنبال یادگیری چه مهارتی هستید ؟'/>
                                <a className='p-4 w-1/4 text-center bg-darkBlue rounded-tl-md rounded-bl-md text-sm text-white hidden md:block'>جست و جو</a>
                                <a className='block md:hidden m-2'>
                                    <svg width="30" height="30" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M52.1549 43.2298L43.033 34.0948L36.0166 31.1919C38.3528 27.8648 39.6044 23.8956 39.5999 19.8283C39.5999 8.89491 30.7177 0 19.8 0C8.88219 0 0 8.89491 0 19.8283C0 30.7617 8.88219 39.6566 19.8 39.6566C23.8968 39.6613 27.8931 38.3862 31.2321 36.009L34.1233 43.0165L43.2449 52.152C43.8299 52.7378 44.5244 53.2026 45.2888 53.5197C46.0531 53.8368 46.8723 54 47.6997 54C48.527 54 49.3463 53.8369 50.1107 53.5198C50.875 53.2028 51.5696 52.7381 52.1546 52.1522C52.7396 51.5664 53.2037 50.8709 53.5204 50.1054C53.837 49.34 54 48.5196 54 47.6911C54 46.8625 53.8371 46.0421 53.5205 45.2766C53.2039 44.5112 52.7399 43.8157 52.1549 43.2298ZM3.59999 19.8283C3.59999 10.883 10.8675 3.60515 19.8 3.60515C28.7324 3.60515 35.9999 10.883 35.9999 19.8283C35.9999 28.7736 28.7324 36.0515 19.8 36.0515C10.8675 36.0515 3.59999 28.7736 3.59999 19.8283ZM49.6091 49.6028C49.1024 50.1091 48.4157 50.3935 47.6999 50.3935C46.984 50.3935 46.2974 50.1091 45.7907 49.6028L37.1763 40.9761L34.4883 34.4604L40.9949 37.1523L49.6093 45.779C50.1149 46.2865 50.3988 46.9741 50.3987 47.6909C50.3987 48.4078 50.1147 49.0953 49.6091 49.6028Z" fill="#143794"/>
                                    </svg>
                                </a>
                            </div>
                        }
                    />
                </a>
                {authCtx.authState.authenticated ? (
                    <>
                        <Link href={appRoutes.Dashboard} className='hover:drop-shadow-lg darkBlue-color px-2 hidden md:block whitespace-nowrap'>داشبورد من</Link>
                        <button onClick={SignOut} className='bg-darkBlue hover:bg-blue-900 text-white text-center btn-page sm:w-28 hidden md:block mr-2'>خروج</button>
                        <button onClick={SignOut} className='md:hidden block'>
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6506 32.8162H0V3.33015L16.6506 0V32.8162ZM2.17183 30.6443H14.4788V2.64962L2.17183 5.11104V30.6443ZM14.4788 3.13465H22.4421V32.8162H14.4787L14.4788 3.13465ZM20.2703 5.30651H16.6506V30.6444H20.2703V5.30651ZM27.915 22.2901L26.3803 20.7553L29.9261 17.2095L26.3818 13.6766L27.915 12.139L33 17.2065L27.915 22.2901ZM31.4914 18.3374H21.3563V16.1656H31.4914V18.3374Z" fill="#143794"/>
                            </svg>
                        </button>
                    </>
                ) : (
                    <>
                        <Link href={appRoutes.Login} className='hover:drop-shadow-md darkBlue-color px-2 hidden md:block whitespace-nowrap'>ورود کاربران</Link>
                        <Link href={appRoutes.Signup} className='bg-red hover:bg-red-600 text-white text-center btn-page sm:w-28 hidden md:block whitespace-nowrap'>ثبت نام</Link>
                    </>
                )}
            </div>
        </div>
    )
}
export default Header;