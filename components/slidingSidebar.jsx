import {useEffect, useState} from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
//
// import statusContext from "../Contex/contex";
// import {useContext} from "react";

const slidingSidebar = () => {

    const [openPanel, setOpenPanel] = useState(false);

    return (
        <div>
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
                size={80}
            >
                <div className='flex flex-col h-full justify-between'>
                    <div className='flex flex-col py-7 px-8 divide-y-2 divide-gray-300'>
                        <div className='flex flex-col justify-center items-center gap-6 mb-4'>
                            <div className='bg-darkBlue w-40 h-40 rounded-full justify-center items-center flex'>مریم ناظری</div>
                            <p className='darkBlue-color'>مشاهد پروفایل</p>
                        </div>
                        <div className='flex flex-col items-end mb-4 pt-4'>
                            <a className='darkBlue-color py-2 w-full text-right'>ثبت نام</a>
                            <a className='darkBlue-color py-2 w-full text-right'>خانه</a>
                            <a className='darkBlue-color py-2 w-full text-right'>دانلودهای من</a>
                            <a className='darkBlue-color py-2 w-full text-right'>پکیج های رایگان</a>
                            <a className='darkBlue-color py-2 w-full text-right'>پکیج ها و مشاوره</a>
                            <a className='darkBlue-color py-2 w-full text-right'>تخفیف ها</a>
                        </div>
                        <div className='flex flex-col items-end pt-4'>
                            <a className='darkBlue-color py-2 w-full text-right'>تماس با ما</a>
                            <a className='darkBlue-color py-2 w-full text-right'>پرسش های متداول</a>
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