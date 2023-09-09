import Image from 'next/image';
import Logo from '/public/picture/Logo.png';
import Link from 'next/link';
import appRoutes from "../common/appRoutes";
import React, {useContext, useState} from "react";
import authContext from "../context/authContext";
import HeaderContext from "../context/headerContext";
import Modal from "./modal";
import SlidingSidebar from "./slidingSidebar";
import {logout} from "../services/clientAppService";
import {getSearchResult} from "../services/appServices";
import ClientSideRenderer from "./clientSideRenderer";
import {head} from "axios";


const Header = ()=>{

    const [result,setResult]=useState({});
    const [selectedItem,setSelectedItem] = useState(null);

    const authCtx = useContext(authContext);
    const headerCtx = useContext(HeaderContext);

    console.log(headerCtx);

    const SignOut=async ()=>
    {
       await logout();
       authCtx.setAuthState({authenticated:false,user:null});
    }

    const handleItemClick = (item) => {
        console.log(selectedItem);
        if (selectedItem === item)
        {
            setSelectedItem(null);
        }
        else
        {
            setSelectedItem(item.name);
        }
    }

    return(
        <ClientSideRenderer>
        <div className='flex justify-between lg:px-16 px-3'>

            <div className='block md:hidden mt-7'>
                <SlidingSidebar />
            </div>

            <div>
                {/*<BarLoader text={"Loading..."} bgColor={"#F0A500"} center={false} width={"150px"} height={"150px"}/>*/}
                <Link href={appRoutes.Main}><Image className='w-32' alt='logo' src={Logo}/></Link>
            </div>
            <div className='lg:w-1/3 w-1/2 xl:w-1/4 hidden md:block'>
                <div className='flex flex-row justify-between items-center h-full xl:gap-10 whitespace-nowrap'>
                    <Link href={appRoutes.Main} onClick={handleItemClick} name='/home' className={ headerCtx.headerItemState === '/home' ? 'darkBlue-color hover:drop-shadow-lg active-header-item pt-3 pb-3' : 'darkBlue-color hover:drop-shadow-lg header-item pt-3 pb-3'}>خانه</Link>
                    <Link href={appRoutes.FREEPACKAGE} onClick={handleItemClick} name='/freePackages' className={ headerCtx.headerItemState === '/freePackages' ? 'darkBlue-color hover:drop-shadow-lg active-header-item pt-3 pb-3' : 'darkBlue-color hover:drop-shadow-lg header-item pt-3 pb-3'}>پکیج های رایگان</Link>
                    <Link href={appRoutes.packages} onClick={handleItemClick} name='/packages' className={ headerCtx.headerItemState === '/packages' ? 'darkBlue-color hover:drop-shadow-lg active-header-item pt-3 pb-3' : 'darkBlue-color hover:drop-shadow-lg header-item pt-3 pb-3'}>پکیج های آموزشی</Link>
                    <Link href={appRoutes.Discount} onClick={handleItemClick} name='/discount' className={ headerCtx.headerItemState === '/discount' ? 'darkBlue-color hover:drop-shadow-lg active-header-item pt-3 pb-3' : 'darkBlue-color hover:drop-shadow-lg header-item pt-3 pb-3'}>تخفیفات</Link>
                </div>
            </div>

            <div className='flex w-1/9 justify-between gap-1 items-center md:divide-x-2 md:divide-gray-300'>
                <a>
                    <Modal
                        text={
                            <svg className='hover:drop-shadow-lg' width="28" height="28" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_408_921)">
                                    <path d="M32.5488 28.5334L26.1229 22.1074C25.8328 21.8174 25.4396 21.6562 25.0271 21.6562H23.9766C25.7555 19.3811 26.8125 16.5193 26.8125 13.4062C26.8125 6.00059 20.8119 0 13.4062 0C6.00059 0 0 6.00059 0 13.4062C0 20.8119 6.00059 26.8125 13.4062 26.8125C16.5193 26.8125 19.3811 25.7555 21.6562 23.9766V25.0271C21.6562 25.4396 21.8174 25.8328 22.1074 26.1229L28.5334 32.5488C29.1393 33.1547 30.1189 33.1547 30.7184 32.5488L32.5424 30.7248C33.1482 30.1189 33.1482 29.1393 32.5488 28.5334ZM13.4062 21.6562C8.84941 21.6562 5.15625 17.9695 5.15625 13.4062C5.15625 8.84941 8.84297 5.15625 13.4062 5.15625C17.9631 5.15625 21.6562 8.84297 21.6562 13.4062C21.6562 17.9631 17.9695 21.6562 13.4062 21.6562Z" fill="#143794"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_408_921">
                                        <rect width="33" height="33" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        }
                        result={result}
                    />
                </a>
                {authCtx.authState.authenticated ? (
                    <>
                        <Link href={appRoutes.Dashboard} className='hover:drop-shadow-lg darkBlue-color px-2 hidden md:block whitespace-nowrap'>داشبورد من</Link>
                        <button onClick={SignOut} className='bg-darkBlue hover:bg-blue-900 text-white text-center btn-page sm:w-28 hidden md:block mr-2'>خروج</button>
                        <button onClick={SignOut} className='md:hidden block'>
                            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.5294 14.1501L22.1955 25.5232C21.1836 26.5387 19.4295 25.8279 19.4295 24.3724V17.8735H10.2545C9.35721 17.8735 8.63535 17.1491 8.63535 16.2487V9.74982C8.63535 8.84945 9.35721 8.12509 10.2545 8.12509H19.4295V1.62617C19.4295 0.177452 21.1768 -0.540137 22.1955 0.475319L33.5294 11.8484C34.1569 12.4848 34.1569 13.5138 33.5294 14.1501ZM12.953 25.1848V22.4769C12.953 22.0301 12.5887 21.6645 12.1435 21.6645H6.47651C5.2824 21.6645 4.31767 20.6964 4.31767 19.4982V6.50036C4.31767 5.30212 5.2824 4.33405 6.47651 4.33405H12.1435C12.5887 4.33405 12.953 3.96849 12.953 3.52169V0.813805C12.953 0.367004 12.5887 0.00143983 12.1435 0.00143983H6.47651C2.90094 0.00143983 0 2.91241 0 6.50036V19.4982C0 23.0861 2.90094 25.9971 6.47651 25.9971H12.1435C12.5887 25.9971 12.953 25.6316 12.953 25.1848Z" fill="#143794"/>
                            </svg>
                        </button>
                    </>
                ) : (
                    <>
                        <Link href={appRoutes.Login} className='hover:drop-shadow-md darkBlue-color px-2 hidden md:block whitespace-nowrap'>ورود کاربران</Link>
                        <Link href={appRoutes.Signup} className='bg-red hover:bg-red-600 text-white text-center btn-page sm:w-28 hidden md:block whitespace-nowrap mr-2'>ثبت نام</Link>
                    </>
                )}
            </div>
        </div>
       </ClientSideRenderer>
    )
}


export default  (Header);