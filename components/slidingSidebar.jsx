import {useState} from 'react';
import AppRoutes from "../common/appRoutes";
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import Link from "next/link";
import authContext from "../context/authContext";
import {useContext} from "react";
import appRoutes from "../common/appRoutes";

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
                    <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.17857 5.32653H31.8214C32.4724 5.32653 33 4.79662 33 4.14286V1.18367C33 0.529916 32.4724 0 31.8214 0H1.17857C0.527632 0 0 0.529916 0 1.18367V4.14286C0 4.79662 0.527632 5.32653 1.17857 5.32653ZM1.17857 17.1633H31.8214C32.4724 17.1633 33 16.6334 33 15.9796V13.0204C33 12.3667 32.4724 11.8367 31.8214 11.8367H1.17857C0.527632 11.8367 0 12.3667 0 13.0204V15.9796C0 16.6334 0.527632 17.1633 1.17857 17.1633ZM1.17857 29H31.8214C32.4724 29 33 28.4701 33 27.8163V24.8571C33 24.2034 32.4724 23.6735 31.8214 23.6735H1.17857C0.527632 23.6735 0 24.2034 0 24.8571V27.8163C0 28.4701 0.527632 29 1.17857 29Z" fill="#143794"/>
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
                                <Link onClick={handleLinkClick} href={AppRoutes.Dashboard} className='darkBlue-color'>ورود به حساب کاربری</Link>
                            </div>
                        ):(
                            <Link  onClick={handleLinkClick} href={AppRoutes.Login} className='darkBlue-color py-2 w-full text-right pb-5'>ورود/ثبت نام</Link>
                        )}

                        <div className='flex flex-col items-end mb-4 pt-4'>
                            <Link onClick={handleLinkClick} href={AppRoutes.Main} className='darkBlue-color py-2 w-full text-right'>خانه</Link>
                            {authCtx.authState.authenticated && <Link onClick={handleLinkClick} href={AppRoutes.MyPackages} className='darkBlue-color py-2 w-full text-right'>دوره های من</Link>}
                            {authCtx.authState.authenticated && <Link onClick={handleLinkClick} href={AppRoutes.MyTransactions} className='darkBlue-color py-2 w-full text-right'>تراکنش های من</Link>}
                            <Link onClick={handleLinkClick} href={appRoutes.FREEPACKAGE} className='darkBlue-color py-2 w-full text-right'>پکیج های رایگان</Link>
                            <Link onClick={handleLinkClick} href={appRoutes.packages}  className='darkBlue-color py-2 w-full text-right'>پکیج های آموزشی</Link>
                            <Link onClick={handleLinkClick} href={appRoutes.Discount} className='darkBlue-color py-2 w-full text-right'>تخفیفات</Link>
                        </div>

                        <div className='flex flex-col items-end pt-4'>
                            <Link onClick={handleLinkClick} href='#' className='darkBlue-color py-2 w-full text-right'>تماس با ما</Link>
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