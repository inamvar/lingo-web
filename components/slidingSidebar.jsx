import {useState} from 'react';
import AppRoutes from "../common/appRoutes";
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import Link from "next/link";
import authContext from "../context/authContext";
import {useContext} from "react";

const slidingSidebar = () => {

    const authCtx = useContext(authContext);
    const [openPanel, setOpenPanel] = useState(false);

    const handleLinkClick = () => {
        setOpenPanel(false);
    };
    return (
        <div >
            <div>
                <button className='mt-0.5' onClick={() => setOpenPanel(true)}>
                    <svg width="33" height="100%" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 23.1891H32.2376V19.3243H0V23.1891ZM0 13.527H32.2376V9.66214H0V13.527ZM0 0V3.86486H32.2376V0H0Z" fill="#143794"/>
                    </svg>
                </button>
            </div>
            <SlidingPanel
                type={'right'}
                isOpen={openPanel}
                size={70}
                backdropClicked={handleLinkClick}

            >
                <div className='flex flex-col h-full justify-between'>
                    <div className='flex flex-col py-7 px-8 divide-y-2 divide-gray-300'>

                        {authCtx.authState.authenticated ? (
                            <div className='flex flex-col justify-center items-center gap-6 mb-4'>
                                <div className='bg-darkBlue w-40 h-40 rounded-full justify-center items-center flex text-white'>{authCtx.authState.user.first_name + ' ' + authCtx.authState.user.last_name}</div>
                                <Link onClick={handleLinkClick} href={AppRoutes.Dashboard} className='darkBlue-color'>مشاهد پروفایل</Link>
                            </div>
                        ):(
                            <Link  onClick={handleLinkClick} href={AppRoutes.Login} className='darkBlue-color py-2 w-full text-right pb-5'>ورود/ثبت نام</Link>
                        )}

                        <div className='flex flex-col items-end mb-4 pt-4'>
                            <Link onClick={handleLinkClick} href={AppRoutes.Main} className='darkBlue-color py-2 w-full text-right'>خانه</Link>
                            <Link onClick={handleLinkClick} href={AppRoutes.MyPackages} className='darkBlue-color py-2 w-full text-right'>دوره های من</Link>
                            <Link onClick={handleLinkClick} href='#'  className='darkBlue-color py-2 w-full text-right'>پکیج ها و مشاوره</Link>
                            <Link onClick={handleLinkClick} href='#' className='darkBlue-color py-2 w-full text-right'>تخفیف ها</Link>
                            <Link onClick={handleLinkClick} href='#' className='darkBlue-color py-2 w-full text-right'>پکیج های رایگان</Link>

                        </div>

                        <div className='flex flex-col items-end pt-4'>
                            <Link onClick={handleLinkClick} href='#' className='darkBlue-color py-2 w-full text-right'>تماس با ما</Link>
                            <Link onClick={handleLinkClick} href='#' className='darkBlue-color py-2 w-full text-right'>پرسش های متداول</Link>
                        </div>
                    </div>
                    <div className='p-4 bg-darkBlue' onClick={() => setOpenPanel(false)}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 11.375H6.22375L15.3075 2.29125L13 0L0 13L13 26L15.2913 23.7087L6.22375 14.625H26V11.375Z" fill="#F5F5F5"/>
                        </svg>
                    </div>
                </div>
            </SlidingPanel>
        </div>
    );
};

export default slidingSidebar;